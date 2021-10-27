CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE IF NOT EXISTS regions (
    region_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    region_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS managers (
    manager_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    manager_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS caretakers (
    caretaker_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caretaker_name VARCHAR(100) NOT NULL,
    manager_id INT(11) NOT NULL,
    FOREIGN KEY (manager_id)
        REFERENCES manager (manager_id)
);

CREATE TABLE IF NOT EXISTS species (
    species_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    species_name VARCHAR(100) NOT NULL,
    region_id INT(11) NOT NULL,
    FOREIGN KEY (region_id)
        REFERENCES regions (region_id)
);

CREATE TABLE IF NOT EXISTS animals (
    animal_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    animal_name VARCHAR(100) NOT NULL,
    sex VARCHAR(6) NOT NULL,
    age INT(11) NOT NULL,
    species_id INT(11) NOT NULL,
    FOREIGN KEY (species_id)
        REFERENCES species (species_id),
    region_id INT(11) NOT NULL,
    FOREIGN KEY (region_id)
        REFERENCES regions (region_id)
);