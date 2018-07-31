module.exports = {
    readUser: (req, res) => {
        res.status(200).json({
          username: req.session.user.username,
          profilePicture: req.session.user.profile_pic,
          userId: req.session.user.id
        })
    },
    readMeals: (req, res) => {
       const dbInstance = req.app.get('db')
       const { mealplanId } = req.params
       dbInstance.read_meals({mealplanId})
       .then(meals => {
           res.status(200).json({meals})
       })
    },
    readTotalMealStat: (req, res) => {
        const dbInstance = req.app.get('db')
        const { mealplanId } = req.params
        dbInstance.read_totalmealstat({mealplanId})
        .then(totalMealStats => {
            res.status(200).json({totalMealStats})
        })
    }
}