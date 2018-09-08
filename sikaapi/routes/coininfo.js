var person = require('./Person.js');
var person1 = new person('James', 'Bond');
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty" + person1.firstName
        });
    }
};
