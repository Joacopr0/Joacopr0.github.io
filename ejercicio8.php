<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 8</title>
</head>
<body>
    <h1>Resultado del Ejercicio 8</h1>

<?php
$suma = 0;
$i = 1;
while ($i <= 100) {
    $suma += $i;
    $i++;
}
echo "La suma de los números del 1 al 100 es: $suma";
?>

    ?>
    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
