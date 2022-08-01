<?php

namespace RebelCode\Spotlight\Instagram\Engine;

use RebelCode\Iris\Utils\Marker;

class DbOptionMarker implements Marker
{
    /** @var string */
    protected $option;

    /**
     * @param string $option
     */
    public function __construct(string $option)
    {
        $this->option = $option;
    }

    /** @inheritDoc */
    public function create(): void
    {
        update_option($this->option, '1', false);
    }

    /** @inheritDoc */
    public function isSet(): bool
    {
        return filter_var(get_option($this->option, false), FILTER_VALIDATE_BOOLEAN);
    }

    /** @inheritDoc */
    public function delete(): void
    {
        delete_option($this->option);
    }
}
