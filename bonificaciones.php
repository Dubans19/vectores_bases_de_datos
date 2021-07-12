<?php
include("conexion.php");
$con=conectar();

$sql= "SELECT * FROM empleados";
$query =mysqli_query($con,$sql);

$row=mysqli_fetch_array($query);
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--bootstrap-->
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>

<link rel="stylesheet" href="ccss/coordinadora.css">

    <title>bonificaciones</title>

</head>

<body>

<div class="titulo1">
    <center><h1>Sistema de bonificaciones</h1></center>
</div>
<div class="formulario">

   <form class="formu" method="POST" action="tabla.php">

   <input class="btn btn-default" type="number" name="id" placeholder="Número de identificación" required value>

   <input class="btn btn-default" type="varchar" name="nombre" placeholder="Nombre" required value>
  

   <input class="btn btn-default" type="varchar" name="cargo" placeholder="cargo" required value>

   <input class="btn btn-default" type="varchar" name="direccion" placeholder="direccion" required value>

   <input class="btn btn-default" type="number" name="telefono" placeholder="telefono" required value>

   <input class="btn btn-default" type="correo" name="correo" placeholder="correo" required value>

  <div>
   <input class="btn btn-info" type="submit" name="register" value="enviar">
   </div>
   </form> 

   </div>

<!--formulario de registro -->
<?php

?>



<div class=formulario1>

<div class="titulo">

<center><h1>Registros</h1></center>
</div>

<table class="table table-striped">

<thead class="active">

<th>Id</th>
<th>Nombre</th>

<th>Cargo</th>
<th>direccion</th>
<th>telefono</th>
<th>Correo</th>
</thead>

<tbody>
<?php

while ($row=mysqli_fetch_array($query)){

?>
<tr>
<th><?php echo $row["id"] ?></th>
<th><?php echo $row["nombre"] ?></th>
<th><?php echo $row["cargo"] ?></th>
<th><?php echo $row["direccion"] ?></th>
<th><?php echo $row["telefono"] ?></th>
<th><?php echo $row["correo"] ?></th>
</tr>
<?php
}
?>
</tbody>
</table>
</div>

</body>
</html>




