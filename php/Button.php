<?php

namespace php;
class Button
{

    /**
     * @param string $string
     */
    public function __construct(string $string)
    {
    }

    public function addClick(Closure $param): void
    {
        $param->call();
    }
}