<?php
include("conexion.php");
$con=conectar();

$id=$_POST["id"];
$nombre=$_POST["nombre"];

$cargo= $_POST["cargo"];

$direccion= $_POST["direccion"];
$telefono= $_POST["telefono"];
$correo= $_POST["correo"];


$sql="INSERT INTO empleados values('$id ', '$nombre','$cargo','$direccion ', '$telefono','$correo')";
$query=mysqli_query($con,$sql);

if($query){
    header("location:bonificaciones.php");
} else {

}
?>


