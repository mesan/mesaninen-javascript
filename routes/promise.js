module.exports = function(app) {
    app.get('/promise-exercise-1', promise1);
    app.get('/promise-exercise-2', promise2);
    app.get('/message.json', messageGetter);
    app.post('/message.json', messagePoster);
};

var message = { posted: new Date(), text: 'Hello!' };

function messageGetter(req, res) {
    res.json(message);
}

function messagePoster(req, res) {
    if (!req.body || !req.body.text) {
        return res.status(400).json('Please provide a message!');
    }

    message = {
        posted: new Date(),
        text: req.body.text
    };

    return res.json(message);
}

function promise1(req, res) {
    return res.render('promise_exercise_1', { pageTitle: 'Promises / Fetch - Oppgave 1', menu: 'promise-exercise-1' });
}

function promise2(req, res) {
    return res.render('promise_exercise_2', { pageTitle: 'Promises / Fetch - Oppgave 2', menu: 'promise-exercise-2' });
}