INSERT INTO totalMealStats
(title, total_fat, total_carbohydrate, total_protein, total_calories, total_vitamin_a, total_vitamin_c, total_vitamin_d, total_vitamin_e, total_vitamin_k, total_thiamin, total_riboflavin, total_niacin, total_vitamin_b6, total_biotin, total_folate, total_vitamin_b12, total_calcium, total_copper, total_fluoride, total_iodine, total_iron, total_magnesium, total_manganese, total_phosphorus, total_potassium, total_sodium, total_selenium, total_zinc, user_id)
VALUES 
(${title},${totalFat},${totalCarbs},${totalProtein},${totalCalories},${totalVitaminA},${totalVitaminC},${totalVitaminD},${totalVitaminE},${totalVitaminK},${totalThiamin},${totalRiboflavin},${totalNiacin},${totalVitaminB6},${totalBiotin},${totalFolate},${totalVitaminB12},${totalCalcium},${totalCopper},${totalFluoride},${totalIodine},${totalIron},${totalMagnesium},${totalManganese},${totalPhosphorus},${totalPotassium},${totalSodium},${totalSelenium},${totalZinc},${userId})
RETURNING *;
