CREATE DATABASE IF NOT EXISTS solicitudesdb;

CREATE TABLE `Usuario` (
    `Email` varchar(45)  NOT NULL,
    `password` varchar(45)  NOT NULL ,
    `nombre` varchar(45)  NOT NULL ,
    `tipo_usuario` int  NOT NULL ,
    PRIMARY KEY (
        `Email`
    )
);

CREATE TABLE `TIPO_USUARIO` (
    `tipo` int  NOT NULL AUTO_INCREMENT,
    `type` varchar(45)  NOT NULL ,
    PRIMARY KEY (
        `tipo`
    )
);

CREATE TABLE `Solicitud` (
    `id_solicitud` int  NOT NULL ,
    `tipo_solicitud` int  NOT NULL ,
    `email_usuario` varchar(45)  NOT NULL ,
    `descripcion` varchar(100)  NOT NULL ,
    `area` int  NOT NULL ,
    `resuelto` bool  NOT NULL ,
    PRIMARY KEY (
        `id_solicitud`
    )
);

CREATE TABLE `Area` (
    `id_area` int  NOT NULL ,
    `nombre_area` varchar(45)  NOT NULL ,
    `encargado_area` int  NOT NULL ,
    PRIMARY KEY (
        `id_area`
    )
);

CREATE TABLE `TIPO_SOLICITUD` (
    `id_solicitud` int  NOT NULL ,
    `type` varchar(45)  NOT NULL ,
    PRIMARY KEY (
        `id_solicitud`
    )
);

CREATE TABLE `Encargado` (
    `id_encargado` int  NOT NULL ,
    `nombre` varchar(45)  NOT NULL ,
    `email` varchar(45)  NOT NULL ,
    PRIMARY KEY (
        `id_encargado`
    )
);

ALTER TABLE `Usuario` ADD CONSTRAINT `fk_Usuario_tipo_usuario` FOREIGN KEY(`tipo_usuario`)
REFERENCES `TIPO_USUARIO` (`tipo`);

ALTER TABLE `Solicitud` ADD CONSTRAINT `fk_Solicitud_tipo_solicitud` FOREIGN KEY(`tipo_solicitud`)
REFERENCES `TIPO_SOLICITUD` (`id_solicitud`);

ALTER TABLE `Solicitud` ADD CONSTRAINT `fk_Solicitud_email_usuario` FOREIGN KEY(`email_usuario`)
REFERENCES `Usuario` (`Email`);

ALTER TABLE `Solicitud` ADD CONSTRAINT `fk_Solicitud_area` FOREIGN KEY(`area`)
REFERENCES `Area` (`id_area`);

ALTER TABLE `Area` ADD CONSTRAINT `fk_Area_encargado_area` FOREIGN KEY(`encargado_area`)
REFERENCES `Encargado` (`id_encargado`);