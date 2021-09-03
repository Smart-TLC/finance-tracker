module.exports = {
    mongoURI: process.env.MONGOURI || "mongodb://localhost:27017/users",
    secretOrKey: process.env.SECRET || "secret"
}
