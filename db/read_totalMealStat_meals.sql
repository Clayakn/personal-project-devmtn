SELECT  * FROM meals
JOIN totalmealstats 
ON meals.totalmealstat_id = totalmealstats.id 
WHERE totalMealStats.id = ${titleId};