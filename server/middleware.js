module.exports = {
    filterWords: (req, res, next) => {
        let badWords = ['knucklehead', 'jerk', 'internet explorer'];
        if (req.body.message) {
             for (let i = 0; i < badWords.length; i++) {
             let regex = new RegExp(badWords[i], 'g');
             req.body.message = req.body.message.replace(regex, '****');
            }
        next();
        } else {
         next();
        }
    }
}