<?php

declare(strict_types=1);

namespace RebelCode\Spotlight\Instagram\Engine\Store;

class ThumbnailRecipe
{
    /** @var int */
    public $width;

    /** @var int */
    public $jpegQuality;

    /**
     * Constructor.
     *
     * @param int $width
     * @param int $jpegQuality
     */
    public function __construct(int $width, int $jpegQuality)
    {
        $this->width = $width;
        $this->jpegQuality = $jpegQuality;
    }
}
