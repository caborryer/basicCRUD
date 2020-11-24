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
