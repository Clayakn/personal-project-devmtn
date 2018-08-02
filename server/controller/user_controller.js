const axios = require('axios');

module.exports = {
    login: (req, res) => {
        const payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `https://${req.headers.host}/auth/callback`
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
            return dbInstance.read_user_by_auth0_id(auth0id).then(users => {
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
        res.status(200).send('Successfully logged out')
        redirect('/');
    },
    createMealplan: (req, res) => {
        const dbInstance = req.app.get('db')
        const userId = req.session.user.id
        const {totalFat, totalCarbs, totalProtein, totalCalories, totalVitaminA, totalVitaminC, totalVitaminD, totalVitaminE, totalVitaminK, totalThiamin, totalRiboflavin, totalNiacin, totalVitaminB6, totalBiotin, totalFolate, totalVitaminB12, totalCalcium, totalCopper, totalFluoride, totalIodine, totalIron, totalMagnesium, totalManganese, totalPhosphorus, totalPotassium, totalSodium, totalSelenium, totalZinc, title, mealList} = req.body
        dbInstance.read_user({userId})
        .then(users => {
        dbInstance.create_totalmealstat({
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
            userId: users[0].id
        })
        .then(mealStats => {
          mealList.forEach(meal => dbInstance.create_meal({
          name: meal.name,
          fat: meal.fat,
          carbs: meal.carbs,
          protein: meal.protein, 
          calories: meal.calories,
          vitamina: meal.vitamina,
          vitaminc: meal.vitaminc,
          vitamind: meal.vitamind,
          vitamine: meal.vitamine,
          vitamink: meal.vitamink,
          thiamin: meal.thiamin,
          riboflavin: meal.riboflavin,
          niacin: meal.niacin,
          vitaminb6: meal.vitaminb6,
          biotin: meal.biotin,
          folate: meal.folate,
          vitaminb12: meal.vitaminb12,
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
            res.status(201).send('Successfully created Mealplan')
        })   
        })
        .catch(error => {
            console.log('Controller error on createMealPlan', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })
    },
    // Reading user information and title from totalMealStat 
    readUserAndTitle: (req, res) => {
        const dbInstance = req.app.get('db')
        const userId = req.session.user.id
        dbInstance.read_user({userId})
        .then(users => {
            dbInstance.read_totalmealstat_title([users[0].id])
        .then(titles => {
            res.status(200).json([{
                titles,
                username: req.session.user.username,
                profilePicture: req.session.user.profile_pic
            }])
        })
        }).catch(error => {
            console.log('Controller error on readUserAndTitle', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })
    },
    readMealplan(req, res) {
        const { titleId } = req.params
        const dbInstance = req.app.get('db')
        dbInstance.read_totalmealstat_meals({titleId})
        .then(mealplans => {
            res.status(200).json([{
                mealplans
            }])
        })
    },

    updateMealplan(req, res) {
        const { mealplanId } = req.params
        const dbInstance = req.app.get('db')
        const {totalFat, totalCarbs, totalProtein, totalCalories, totalVitaminA, totalVitaminC, totalVitaminD, totalVitaminE, totalVitaminK, totalThiamin, totalRiboflavin, totalNiacin, totalVitaminB6, totalBiotin, totalFolate, totalVitaminB12, totalCalcium, totalCopper, totalFluoride, totalIodine, totalIron, totalMagnesium, totalManganese, totalPhosphorus, totalPotassium, totalSodium, totalSelenium, totalZinc, title, mealList} = req.body
        dbInstance.update_totalmealstat({
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
            mealplanId
        })
        .then(mealStats => {
        dbInstance.delete_meals({mealplanId})
        .then(meals => {
            mealList.forEach(meal => dbInstance.create_meal({
                name: meal.name,
                fat: meal.fat,
                carbs: meal.carbs,
                protein: meal.protein, 
                calories: meal.calories,
                vitamina: meal.vitamina,
                vitaminc: meal.vitaminc,
                vitamind: meal.vitamine,
                vitamine: meal.vitamine,
                vitamink: meal.vitamink,
                thiamin: meal.thiamin,
                riboflavin: meal.riboflavin,
                niacin: meal.niacin,
                vitaminb6: meal.vitaminb6,
                biotin: meal.biotin,
                folate: meal.folate,
                vitaminb12: meal.vitaminb12,
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
                totalMealStatId: mealplanId
            }))  
        })
        .then(response => {
            res.status(200).send('Successfully saved Mealplan')
        })   
        }).catch(error => {
            console.log('Controller error on updateMealplan', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })
    },
    deleteMealplan: (req, res) => {
        const { mealplanId } = req.params
        dbInstance = req.app.get('db')
        dbInstance.delete_meals({mealplanId})
        .then(meals => {
        dbInstance.delete_totalmealstat({mealplanId})
        .then(mealStats => {
            res.status(200).json({
                mealStats,
                message: 'Successfully deleted Mealplan'
            })
        })
        }).catch(error => {
            console.log('Controller error on deleteMealplan', error)
            res.status(500).json({message: 'Server error. See server terminal'})
        })
    }
}