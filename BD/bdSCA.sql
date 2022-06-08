SET NAMES 'utf8';
DROP DATABASE IF EXISTS SCA;
CREATE DATABASE IF NOT EXISTS SCA DEFAULT CHARACTER SET utf8;
USE SCA;

create table auto(
	id_auto 	INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca 		VARCHAR (100) NOT NULL,
    modelo	 	VARCHAR (100) not null,
	anno 		INTEGER (100) not null,
	motor 		varchar (100) not null,
    color 		varchar (100) not null,
	rine 		VARCHAR (100) not null,
	img 		TEXT NOT NULL,
	precio 		VARCHAR (100) NOT NULL,
	segmento	VARCHAR (100) NOT NULL,
	CONSTRAINT id_unico UNIQUE(id_auto)

)DEFAULT CHARACTER SET utf8;

INSERT INTO auto(marca,modelo,anno,motor,color,rine,img,precio,segmento)
VALUES('FORD','Mustang Shelby',2022,'V8 de 5.2 L Supercargado con Cigüeñal Cross Plane','Naranja','18','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/shelby-gt500/2021/colores/solido/colorizer/naranja-tornado/ford-mustang-shelby-gt500-2021-auto-deportivo-potencia-color-naranja-tornado.jpg.dam.full.high.jpg/1628089431044.jpg','2,500,000','Deportivo');
INSERT INTO auto(marca,modelo,anno,motor,color,rine,img,precio,segmento)
VALUES('Toyota','Supra',2022,'Motor turboalimentado de 6 cil. en línea de 3 L','Gris Platinado','15','https://www.toyota.com/content/dam/toyota/vehicles/2022/gr-supra/mlp/gr-supra-compare.png?wid=768&fmt=jpg&fit=crop','1,500,000','Deportivo');
INSERT INTO auto(marca,modelo,anno,motor,color,rine,img,precio,segmento)
VALUES('MCLAREN','720 S',2022,'V8 biturbo de 4,0 litros ofrece 720 PS y 770 Nm de par','Naranja Satinado','16','https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s/sustainment-2021/images/configurator.png','7,000,000','Hypercar');
INSERT INTO auto(marca,modelo,anno,motor,color,rine,img,precio,segmento)
VALUES('Lamborghini','Aventador LP 780',2022,'V12 Naturalmente Aspirado','Gris Mate','20','https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2022/05_18/gallery/aven_ultimae_03.jpg','10,000,000','Super Deportivo');
INSERT INTO auto(marca,modelo,anno,motor,color,rine,img,precio,segmento)
VALUES('NISSAN','GT-R',2022,'V8 Super Cargado','Naranja ','16','https://www.nissan.com.mx/content/dam/Nissan/mexico/vehicles/GT-R/MY18/VAP/gtr-grade-19-terantbwa-uslhd-pace.jpg.ximg.l_12_h.smart.jpg','3,000,000','Deportivo');
