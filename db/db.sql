CREATE DATABASE databese_politiqueando;


USE databese_politiqueando;

CREATE TABLE usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(16) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL
);

CREATE TABLE fundaciones (
    fundacion_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(16) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(100) NOT NULL
);



CREATE TABLE mascotas (
    mascota_id INT AUTO_INCREMENT PRIMARY KEY,
    fundacion_id int,
    nombre VARCHAR(16) NOT NULL,
    edad VARCHAR(255) NOT NULL,
    raza VARCHAR(100) NOT NULL,
    estatura VARCHAR(100) NOT NULL,
    foreign key (usuario_id) references fundaciones (fundacion_id)
);


CREATE TABLE comentarios(
    usuario_id int,
    descripcion TEXT NOT NULL,
    creado timestamp NOT NULL DEFAULT current_timestamp,
    foreign key (usuario_id) references usuarios (usuario_id)
);

CREATE TABLE reacciones(
    usuario_id int,
    reaccion VARCHAR(255) NOT NULL,
    foreign key (usuario_id) references usuarios (usuario_id)
);


ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
MODIFY id INT(11) NOT NULL AUTO_INCREMENT;


DESCRIBE usuarios;

SELECT * FROM usuarios;
