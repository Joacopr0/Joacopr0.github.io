<html>
    <head>
        <title>
            Prueba
        </title>
        <link rel="stylesheet" href="estilopresent.css">
    </head>
<body>
<h1>Mis Primeros pasos en php</h1>
<h2>
<?php

echo "Hola Mundo";
echo "<br>";


$nombre="Joaquin";
$num1=5;
$num2=78;

echo "El primer numero es 5 y el segundo es 78";
echo "<br>";
echo "La suma es:", $num1 + $num2;
echo "<br>";
echo "La resta es:", $num1 - $num2;
echo "<br>";
echo "La multiplicacion es:", $num1*$num2;
echo "<br>";
echo "La division es:", $num1/$num2;

    ?>
</h2>
<button class="boton-proyecto" onclick="location.href='dinámica.html'">Volver</button>
</body>
</html>