<?php

declare(strict_types=1);

namespace RebelCode\Spotlight\Instagram\Actions;

use RebelCode\Iris\Utils\Marker;
use RebelCode\Spotlight\Instagram\Engine\Store\ThumbnailStore;
use RebelCode\Spotlight\Instagram\Utils\DbQueries;

class DeleteAllPostsAction
{
    /* The limit to use in the delete query. Effectively, the size of the batches for the delete query. */
    const LIMIT = 500;

    /** @var string */
    protected $cpt;

    /** @var ThumbnailStore */
    protected $thumbnailStore;

    /** @var string */
    protected $batchCron;

    /** @var Marker */
    protected $importerLock;

    /** @var Marker */
    protected $importerInterrupt;

    /**
     * Constructor.
     *
     * @param string $cpt
     * @param ThumbnailStore $thumbnailStore
     * @param string $batchCron
     * @param Marker $importerLock
     * @param Marker $importerInterrupt
     */
    public function __construct(
        string $cpt,
        ThumbnailStore $thumbnailStore,
        string $batchCron,
        Marker $importerLock,
        Marker $importerInterrupt
    ) {
        $this->cpt = $cpt;
        $this->thumbnailStore = $thumbnailStore;
        $this->batchCron = $batchCron;
        $this->importerLock = $importerLock;
        $this->importerInterrupt = $importerInterrupt;
    }

    public function __invoke()
    {
        set_time_limit(30 * 60);

        global $wpdb;
        $total = 0;

        // If the importer is running, interrupt it
        if ($this->importerLock->isSet()) {
            $this->importerInterrupt->create();
        }

        do {
            $query = DbQueries::deletePostsByType([$this->cpt], static::LIMIT);
            $count = $wpdb->query($query);

            $total += $count;
        } while ($count !== false && $count > 0);

        // Delete all thumbnails
        $this->thumbnailStore->deleteAll();

        wp_unschedule_hook($this->batchCron);

        return $total;
    }
}
