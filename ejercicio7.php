<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 7</title>
</head>
<body>
    <h1>Resultado del Ejercicio 7</h1>
    /*primero defino la variable igual a 1, despues pongo la variable menor o igual a 10, 
    despues hago que incremente hazta el 10, despues multiplico x5 sabiendo que hay un limite hasta 10*/
    <?php
for ($i = 1; $i <= 10; $i++) {
    echo "5 x $i = " . (5 * $i) . "<br>";
}
?>

    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
