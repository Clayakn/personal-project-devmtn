SELECT meals.id AS meal_id,* FROM meals
JOIN totalMealStats 
ON meals.totalMealStat_id = totalMealStats.id 
WHERE totalMealStats.id = ${titleId}
