<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 4</title>
</head>
<body>
    <h1>Resultado del Ejercicio 4</h1>
    <?php
$x = 20;
$y = 20;
$z = 20;
if ($x > $y && $x > $z) {
    echo "El mayor es: $x";
} elseif ($y > $x && $y > $z) {
    echo "El mayor es: $y";
} elseif ($z > $x && $z > $y) {
    echo "El mayor es: $z";
} else {
    echo "Hay un empate";
}
?>

    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
