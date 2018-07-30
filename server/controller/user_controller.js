const axios = require('axios');

module.exports = {
    login: (req, res) => {
        const payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        };

        const dbInstance = req.app.get('db');

        function tradeCodeForAccessToken() {
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
        }

        function tradeAccessTokenForUserInfo(response) {
            const accessToken = response.data.access_token
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`)
        }

        function storeUserInfoInDataBase(response){
            const auth0id = response.data.sub
            return dbInstance.find_user_by_auth0_id(auth0id).then(users => {
                if (users.length) {
                    const user = users[0]
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    const createUserData = {
                        auth0id,
                        email: response.data.email,
                        username: response.data.name,
                        profilePicture: response.data.picture
                    }
                 return dbInstance.create_user(createUserData).then(newUsers => {
                     const user = newUsers[0];
                     req.session.user = user;
                     res.redirect('/');
                 })
                }
            })
        }
        tradeCodeForAccessToken()
        .then(tradeAccessTokenForUserInfo)
        .then(storeUserInfoInDataBase)
        .catch(error => {
            console.log('---- error with login', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
    createMealPlan: (req, res) => {
        const dbInstance = req.app.get('db')
        const auth0Id = req.session.user.auth0_id
        const {totalFat, totalCarbs, totalProtein, totalCalories, totalVitaminA, totalVitaminC, totalVitaminD, totalVitaminE, totalVitaminK, totalThiamin, totalRiboflavin, totalNiacin, totalVitaminB6, totalBiotin, totalFolate, totalVitaminB12, totalCalcium, totalCopper, totalFluoride, totalIodine, totalIron, totalMagnesium, totalManganese, totalPhosphorus, totalPotassium, totalSodium, totalSelenium, totalZinc, title, mealList} = req.body
        dbInstance.find_user_by_auth0_id(auth0Id)
        .then(users => {
        dbInstance.create_totalMealStat({
            title,
            totalFat,
            totalCarbs,
            totalProtein, 
            totalCalories,
            totalVitaminA,
            totalVitaminC, 
            totalVitaminD, 
            totalVitaminE, 
            totalVitaminK, 
            totalThiamin, 
            totalRiboflavin, 
            totalNiacin, 
            totalVitaminB6, 
            totalBiotin, 
            totalFolate, 
            totalVitaminB12, 
            totalCalcium, 
            totalCopper, 
            totalFluoride, 
            totalIodine, 
            totalIron, 
            totalMagnesium, 
            totalManganese, 
            totalPhosphorus, 
            totalPotassium, 
            totalSodium, 
            totalSelenium, 
            totalZinc,
            userId: users[0].id})
        .then(mealStats => {
          mealList.forEach(meal => dbInstance.create_meal({
          mealName: meal.mealName,
          fat: meal.fat,
          carbs: meal.carbs,
          protein: meal.protein, 
          calories: meal.calories,
          vitaminA: meal.vitaminA,
          vitaminC: meal.vitaminC,
          vitaminD: meal.vitaminD,
          vitaminE: meal.vitaminE,
          vitaminK: meal.vitaminK,
          thiamin: meal.thiamin,
          riboflavin: meal.riboflavin,
          niacin: meal.niacin,
          vitaminB6: meal.vitaminB6,
          biotin: meal.biotin,
          folate: meal.folate,
          vitaminB12: meal.vitaminB12,
          calcium: meal.calcium,
          copper: meal.copper,
          fluoride: meal.fluoride,
          iodine: meal.iodine,
          iron: meal.iron,
          magnesium: meal.magnesium,
          manganese: meal.manganese,
          phosphorus: meal.phosphorus,
          potassium: meal.potassium,
          sodium: meal.sodium,
          selenium: meal.selenium,
          zinc: meal.zinc,
          totalMealStatId: mealStats[0].id 
         }))
        })
        .then(response => {
            res.status(200).send('Successfully created Mealplan')
        })   
        })
        .catch(error => {
            console.log('Controller error on createMealPlan', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })
    }
}