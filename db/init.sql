DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS meals CASCADE;
DROP TABLE IF EXISTS totalmealstats CASCADE;


CREATE TABLE users (
id SERIAL PRIMARY KEY
, auth0_id TEXT
, email VARCHAR(100) 
, username VARCHAR(40) UNIQUE
, profile_pic TEXT
);

CREATE TABLE totalmealstats (
id SERIAL PRIMARY KEY
, title text NOT NULL 
, total_fat DECIMAL
, total_carbohydrate DECIMAL
, total_protein DECIMAL
, total_calories DECIMAL 
, total_vitamin_a DECIMAL
, total_vitamin_c DECIMAL
, total_vitamin_d DECIMAL
, total_vitamin_e DECIMAL
, total_vitamin_k DECIMAL
, total_thiamin DECIMAL
, total_riboflavin DECIMAL
, total_niacin DECIMAL
, total_vitamin_b6 DECIMAL
, total_biotin DECIMAL
, total_folate DECIMAL
, total_vitamin_b12 DECIMAL
, total_calcium DECIMAL
, total_copper DECIMAL
, total_fluoride DECIMAL
, total_iodine DECIMAL
, total_iron DECIMAL
, total_magnesium DECIMAL
, total_manganese DECIMAL
, total_phosphorus DECIMAL
, total_potassium DECIMAL
, total_selenium DECIMAL
, total_sodium DECIMAL
, total_zinc DECIMAL
, user_id INTEGER REFERENCES users (id)
);



CREATE TABLE meals (
id SERIAL PRIMARY KEY
, meal_name TEXT NOT NULL
, fat DECIMAL
, carbohydrate DECIMAL
, protein DECIMAL
, calories DECIMAL 
, vitamin_a DECIMAL
, vitamin_c DECIMAL
, vitamin_d DECIMAL
, vitamin_e DECIMAL
, vitamin_k DECIMAL
, thiamin DECIMAL
, riboflavin DECIMAL
, niacin DECIMAL
, vitamin_b6 DECIMAL
, biotin DECIMAL
, folate DECIMAL
, vitamin_b12 DECIMAL
, calcium DECIMAL
, copper DECIMAL
, fluoride DECIMAL
, iodine DECIMAL
, iron DECIMAL
, magnesium DECIMAL
, manganese DECIMAL
, phosphorus DECIMAL
, potassium DECIMAL
, selenium DECIMAL
, sodium DECIMAL
, zinc DECIMAL
, totalmealstat_id INTEGER REFERENCES totalmealstats (id)
);

SELECT * FROM users;
SELECT * FROM totalmealstats;
SELECT * FROM meals;



