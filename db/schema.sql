ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yes';

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)
