<?php

declare(strict_types=1);

namespace RebelCode\Iris\Aggregator;

use RebelCode\Iris\Data\Item;

class AggregateResult
{
    /** @var Item[] */
    public $items;

    /** @var int */
    public $total;

    /**
     * Constructor.
     *
     * @param Item[] $items The aggregated items.
     * @param int $total The total number of aggregated items, including those not part of this result.
     */
    public function __construct(array $items, int $total)
    {
        $this->items = $items;
        $this->total = $total;
    }
}
