create database bonificaciones;
use bonificaciones;

create table empleados(
id_empleado int not null primary key auto_increment,
nombre varchar(50),
cargo varchar(50),
direccion varchar(50),
telefono int(15),
correo varchar(50));

create table premios(
id_premio int not null primary key auto_increment,
nombre varchar(50),
caracteristicas varchar(100));

create table puntaje(
numero_puntaje int not null primary key auto_increment,
id_empleado int not null,
id_premio int not null,
constraint id_empleado foreign key (id_empleado) references empleados (id_empleado),
constraint id_premio foreign key (id_premio) references premios (id_premio));