module.exports = {
    getUser: (req, res) => {
        res.json({
          username: req.session.user.username,
          profilePicture: req.session.user.profile_pic,
          userId: req.session.user.id
        })
    }
}