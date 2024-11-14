<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 9</title>
</head>
<body>
    <h1>Resultado del Ejercicio 9</h1>
    <?php
$count = 0;
do {
    $num = rand(-10, 10);
    if ($num >= 0) {
        $count++;
    }
} while ($num >= 0);
echo "Se ingresaron $count números positivos antes de un número negativo.";
?>

    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
