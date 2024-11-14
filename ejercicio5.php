<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 5</title>
</head>
<body>
    <h1>Resultado del Ejercicio 5</h1>
    
    <?php
$edad = 25;
if ($edad >= 0 && $edad <= 12) {
    echo "Rango de edad: Niño";
} elseif ($edad >= 13 && $edad <= 17) {
    echo "Rango de edad: Adolescente";
} elseif ($edad >= 18 && $edad <= 64) {
    echo "Rango de edad: Adulto";
} else {
    echo "Rango de edad: Anciano";
}
    ?>

    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
