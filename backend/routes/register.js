const router = require(`express`).Router();
let Register = require(`../models/register.model`)

router.route('/').get((req,res) => {
    Register.find()
        .then(registers => res.json(registers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/kayit').post((req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    const age = req.body.age;

    const newRegister = Register({
        username,
        message,
        age
    })

    newRegister.save()
    .then(() => res.json('Register added! aq'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;