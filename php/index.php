<?php

use php\Button;

phpinfo();

$b = new Button("Pero");
$b->addClick(function () {

});

$b->addClick(function (\http\Env\Request $request) {
});


