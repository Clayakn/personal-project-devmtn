DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS meals CASCADE;
DROP TABLE IF EXISTS totalMealStats CASCADE;


CREATE TABLE users (
id SERIAL PRIMARY KEY
, auth0_id TEXT
, email VARCHAR(100) 
, username VARCHAR(40) UNIQUE
, profile_pic TEXT
);

CREATE TABLE totalMealStats (
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
, total_riobflavin DECIMAL
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
, total_sodium DECIMAL
, total_selenium DECIMAL
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
, riobflavin DECIMAL
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
, sodium DECIMAL
, selenium DECIMAL
, zinc DECIMAL
, totalMealStats_id INTEGER REFERENCES totalMealStats (id)
);

-- Testing Data

INSERT INTO users 
(auth0_id, email, username, profile_pic)
VALUES
(123, 'gmail@andrew.com', 'Andrew', 'www.google.com');

INSERT INTO totalMealStats
(title, total_fat, total_carbohydrate, total_protein, total_calories, total_vitamin_a, total_vitamin_c, total_vitamin_d, total_vitamin_e, total_vitamin_k, total_thiamin, total_riobflavin, total_niacin, total_vitamin_b6, total_biotin, total_folate, total_vitamin_b12, total_calcium, total_copper, total_fluoride, total_iodine, total_iron, total_magnesium, total_manganese, total_phosphorus, total_potassium, total_sodium, total_selenium, total_zinc, user_id)
VALUES 
('Meal Plan 1',2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1);

INSERT INTO meals
(meal_name, fat, carbohydrate, protein, calories, vitamin_a, vitamin_c, vitamin_d, vitamin_e, vitamin_k, thiamin, riobflavin, niacin, vitamin_b6, biotin, folate, vitamin_b12, calcium, copper, fluoride, iodine, iron, magnesium, manganese, phosphorus, potassium, sodium, selenium, zinc, totalMealStats_id)
VALUES 
('Ultimate Sandwich',2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1);




