<?php
header('Content-Type: text/plain');

// Ausdruck aus dem POST-Request lesen
$data = json_decode(file_get_contents("php://input"), true);
$expression = $data['expression'];

// Ausdruck evaluieren und Ergebnis zurückgeben
$result = eval('return '.$expression.';');

// Ergebnis als Text ausgeben
echo $result;
?>