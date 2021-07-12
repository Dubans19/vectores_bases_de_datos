create database incendios;
use incendios;

create table informantes(
id_informante int not null primary key auto_increment,
nombre varchar(50),
telefono int(10),
correo varchar(50),
direccion varchar(50));

create table bomberos(
id_bombero int not null primary key auto_increment,
nombre varchar(50),
telefono int(10),
correo varchar(50),
lugar_trabajo varchar(50),
direccion varchar(40),
numero_incendios int );

create table zona_afectada(
id_zona int not null primary key auto_increment,
nombre varchar(50),
espacio_afectado decimal(50));

create table incendios(
numero_incendio int not null primary key auto_increment,
fecha date,
hora time(6),
zona varchar(50),
area_afectada decimal(50),
causa_general varchar(100),
causa_especifica varchar(100),
id_bombero int not null,
id_informante int not null,
id_zona int not null,
constraint id_informante foreign key(id_informante) references informantes (id_informante),
constraint id_bombero foreign key(id_bombero) references bomberos (id_bombero),
constraint id_zona foreign key(id_zona) references zona_afectada (id_zona));

select*from bomberos;

insert into bomberos values('1001','carlos','310547','carlos@gmail.com','estacion_5','medellin','25');

