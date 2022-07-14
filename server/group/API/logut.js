function logout(app) {
    app.delete('/logout', async (req, res) => {
        await req.session.destroy()
        res.sendStatus(200)
      })
} module.exports.logout = logout