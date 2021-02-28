CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
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

create table division
(
    id   int auto_increment primary key,
    name text not null,
    type_id int  null
);

CREATE TABLE division_type(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);
