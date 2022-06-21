<?php

declare(strict_types=1);

namespace RebelCode\Spotlight\Instagram\Modules;

use Dhii\Services\Factories\Constructor;
use Dhii\Services\Factories\ServiceList;
use Dhii\Services\Factories\Value;
use Dhii\Services\Factory;
use Psr\Container\ContainerInterface;
use Psr\Http\Client\ClientInterface;
use RebelCode\Iris\Aggregator;
use RebelCode\Iris\Converter;
use RebelCode\Iris\Engine;
use RebelCode\Iris\Fetcher;
use RebelCode\Iris\Fetcher\Catalog;
use RebelCode\Iris\Importer;
use RebelCode\Spotlight\Instagram\Config\WpOption;
use RebelCode\Spotlight\Instagram\Di\ArrayExtension;
use RebelCode\Spotlight\Instagram\Engine\Aggregator\CustomMediaPreProcessor;
use RebelCode\Spotlight\Instagram\Engine\Aggregator\IgAggregationStrategy;
use RebelCode\Spotlight\Instagram\Engine\Aggregator\SortProcessor;
use RebelCode\Spotlight\Instagram\Engine\Converter\IgConversionStrategy;
use RebelCode\Spotlight\Instagram\Engine\Data\Source\UserSource;
use RebelCode\Spotlight\Instagram\Engine\DbTransientMarker;
use RebelCode\Spotlight\Instagram\Engine\Fetcher\AccountPostsCatalog;
use RebelCode\Spotlight\Instagram\Engine\Fetcher\IgFetchStrategy;
use RebelCode\Spotlight\Instagram\Engine\Fetcher\NullCatalog;
use RebelCode\Spotlight\Instagram\Engine\IgPostStore;
use RebelCode\Spotlight\Instagram\Engine\Importer\IgImportStrategy;
use RebelCode\Spotlight\Instagram\Engine\Importer\WpCronScheduler;
use RebelCode\Spotlight\Instagram\Engine\Store\ThumbnailRecipe;
use RebelCode\Spotlight\Instagram\Engine\Store\ThumbnailStore;
use RebelCode\Spotlight\Instagram\Module;
use RebelCode\Spotlight\Instagram\Wp\PostType;

class EngineModule extends Module
{
    /** The name of the import limit config */
    const CFG_IMPORT_LIMIT = 'importLimit';

    public function run(ContainerInterface $c)
    {
    }

    public function getFactories()
    {
        return [
            //==========================================================================
            // ENGINE
            //==========================================================================

            'instance' => new Constructor(Engine::class, [
                'fetcher',
                'converter',
                'aggregator',
                'store',
            ]),

            //==========================================================================
            // FETCHER
            //==========================================================================

            'fetcher' => new Constructor(Fetcher::class, [
                'fetcher/strategy',
            ]),

            'fetcher/strategy' => new Constructor(IgFetchStrategy::class, [
                'fetcher/strategy/catalog_map',
            ]),

            'fetcher/strategy/catalog_map' => new Factory(
                ['fetcher/catalog/account'],
                function (Catalog $account) {
                    return [
                        UserSource::TYPE_PERSONAL => $account,
                        UserSource::TYPE_BUSINESS => $account,
                    ];
                }
            ),

            'fetcher/catalog/account' => new Factory(
                ['@ig/client', '@accounts/cpt', 'fetcher/catalog/stories'],
                function (ClientInterface $client, PostType $accounts, ?Catalog $storyCatalog) {
                    return new AccountPostsCatalog($client, $accounts, $storyCatalog);
                }
            ),

            'fetcher/catalog/stories' => new Value(null),

            'fetcher/catalog/fallback' => new Constructor(NullCatalog::class),

            //==========================================================================
            // CONVERTER
            //==========================================================================

            'converter' => new Constructor(Converter::class, [
                'store',
                'converter/strategy',
            ]),

            'converter/strategy' => new Constructor(IgConversionStrategy::class),

            //==========================================================================
            // AGGREGATOR
            //==========================================================================

            'aggregator' => new Constructor(Aggregator::class, [
                'store',
                'aggregator/strategy',
            ]),

            'aggregator/strategy' => new Constructor(IgAggregationStrategy::class, [
                'aggregator/pre_processors',
                'aggregator/post_processors',
            ]),

            'aggregator/pre_processors' => new ServiceList([
                'aggregator/processors/custom_media',
                'aggregator/processors/sorter',
            ]),

            'aggregator/post_processors' => new ServiceList([]),

            'aggregator/processors/custom_media' => new Constructor(CustomMediaPreProcessor::class),
            'aggregator/processors/sorter' => new Constructor(SortProcessor::class),

            //==========================================================================
            // STORE
            //==========================================================================

            'store' => new Constructor(IgPostStore::class, [
                '@media/cpt/slug',
                'store/thumbnails',
            ]),

            'store/thumbnails' => new Constructor(ThumbnailStore::class, [
                'store/thumbnails/directory',
                'store/thumbnails/recipes',
            ]),

            'store/thumbnails/directory' => new Value('spotlight-insta'),

            'store/thumbnails/recipes' => new Value([
                ThumbnailStore::SIZE_SMALL => new ThumbnailRecipe(400, 80),
                ThumbnailStore::SIZE_MEDIUM => new ThumbnailRecipe(600, 90),
            ]),

            //==========================================================================
            // IMPORTER
            //==========================================================================

            // The importer instance
            'importer' => new Constructor(Importer::class, [
                'instance',
                'importer/strategy',
                'importer/scheduler',
                'importer/lock',
                'importer/interrupt',
            ]),

            // The strategy to use for importing
            'importer/strategy' => new Constructor(IgImportStrategy::class, [
                'store',
                'importer/strategy/limit_config',
                'importer/strategy/batch_size',
                'importer/strategy/max_hashtag_items',
            ]),
            'importer/strategy/batch_size' => new Value(50),
            'importer/strategy/max_hashtag_items' => new Value(200),
            'importer/strategy/limit_config' => new Factory([], function () {
                return new WpOption('sli_import_limit', 0, false);
            }),

            // The scheduler for the importer, which uses WP Cron
            'importer/scheduler' => new Constructor(WpCronScheduler::class, [
                'importer/scheduler/cron/hook',
                'importer/scheduler/cron/delay',
                'importer/scheduler/cron/time_limit',
            ]),
            'importer/scheduler/cron/hook' => new Value('spotlight/instagram/import_batch'),
            'importer/scheduler/cron/delay' => new Value(5),
            'importer/scheduler/cron/time_limit' => new Value(30 * 60),

            // The markers for the importer. They auto-expire in 5 minutes
            'importer/lock' => new Value(new DbTransientMarker('_sli_importer_running', 5 * 60)),
            'importer/interrupt' => new Value(new DbTransientMarker('_sli_importer_interrupt', 5 * 60)),
        ];
    }

    /** @inheritDoc */
    public function getExtensions()
    {
        return [
            'config/entries' => new ArrayExtension([
                static::CFG_IMPORT_LIMIT => 'importer/strategy/limit_config'
            ]),
        ];
    }
}
