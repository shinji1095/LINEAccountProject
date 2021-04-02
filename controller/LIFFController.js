require('dotenv').config();

module.exports = {
    omikuji: (req, res, next) => {
        res.render("omikuji");
    }
}