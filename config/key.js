module.exports = {
    mongoURI: process.env.MONGOURI || "mongodb://localhost:27017/upwhy",
    secretOrKey: process.env.SECRET || "secret"
}
