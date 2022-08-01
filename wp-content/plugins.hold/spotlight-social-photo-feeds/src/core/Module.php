<?php

namespace RebelCode\Spotlight\Instagram;

use Psr\Container\ContainerInterface;

/**
 * Padding layer for modules.
 */
abstract class Module implements ModuleInterface
{
    public function run(ContainerInterface $c) { }

    public function getExtensions() { return []; }

    public function getFactories() { return []; }
}
