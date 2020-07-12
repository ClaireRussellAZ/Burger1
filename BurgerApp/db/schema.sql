DROP DATABASE IF EXISTS burgersdb;
CREATE DATABASE burgersdb;

USE burgersdb;
CREATE TABLE burgers
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) not null,
	devoured BOOLEAN default false,
	date TIMESTAMP
);