
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilopresent.css">
    <title>Ejercicio 3</title>
</head>
<body>
    <h1>Resultado del Ejercicio 3</h1>
    
    <?php
$num = 0;
if ($num > 0) {
    echo "El número es positivo";
} elseif ($num < 0) {
    echo "El número es negativo";
} else {
    echo "El número es cero";
}
?>

    <br>
    <button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>
