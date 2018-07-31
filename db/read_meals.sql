
SELECT 
meal_name AS mealName
, fat 
, carbohydrate AS carbs
, protein 
, calories 
, vitamin_a AS vitamina
, vitamin_c AS vitaminc
, vitamin_d AS vitamind
, vitamin_e AS vitamine
, vitamin_k AS vitamink
, thiamin 
, riboflavin 
, niacin 
, vitamin_b6 AS vitaminb6
, biotin 
, folate 
, vitamin_b12 AS vitaminb12
, calcium 
, copper 
, fluoride 
, iodine 
, iron 
, magnesium 
, manganese 
, phosphorus 
, potassium 
, sodium 
, selenium 
, zinc 
FROM meals
WHERE totalMealStat_id = ${mealplanId};