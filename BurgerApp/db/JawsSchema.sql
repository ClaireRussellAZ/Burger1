use cp62ql07igi440nm;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) not null,
	devoured BOOLEAN default false,
	date TIMESTAMP
);

INSERT INTO burgers (burger_name) VALUES ("Levi Bird");
INSERT INTO burgers (burger_name) VALUES ("Baked Alaska");
INSERT INTO burgers (burger_name) VALUES ("Tweedles");
INSERT INTO burgers (burger_name) VALUES ("Sassafras");
INSERT INTO burgers (burger_name) VALUES ("Shiba");
Select * from burgers;