CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    middle_name TEXT,
    last_name TEXT NOT NULL,
    gender char(1) NOT NULL,
    birth_date DATE NOT NULL,
    address TEXT,
    id_position INT,
    id_division INT
);

CREATE TABLE positions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE division(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    type INT
);

CREATE TABLE division_type(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);
