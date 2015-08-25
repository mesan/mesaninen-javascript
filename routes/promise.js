module.exports = function(app) {
    app.get('/promise-exercise-1', promise1);
    app.get('/promise-exercise-2', promise2);
};

function promise1(req, res) {
    return res.render('promise_exercise_1', { pageTitle: 'Promises / Fetch - Oppgave 1', menu: 'promise-exercise-1' });
}

function promise2(req, res) {
    return res.render('promise_exercise_2', { pageTitle: 'Promises / Fetch - Oppgave 2', menu: 'promise-exercise-2' });
}