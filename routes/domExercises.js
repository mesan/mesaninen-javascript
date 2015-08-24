module.exports = function(app) {
    app.get('/dom-exercise-1', exercise1);
    app.get('/dom-exercise-2', exercise2);
    app.get('/dom-exercise-3', exercise3);
    app.get('/dom-exercise-4', exercise4);
    app.get('/dom-exercise-5', exercise5);
    app.get('/dom-exercise-6', exercise6);
};

function exercise1(req, res) {
   return res.render('dom_exercise_1', { pageTitle: 'DOM - Oppgave 1', menu: 'dom-exercise-1' });
}

function exercise2(req, res) {
   return res.render('dom_exercise_2', { pageTitle: 'DOM - Oppgave 2', menu: 'dom-exercise-2' });
}

function exercise3(req, res) {
   return res.render('dom_exercise_3', { pageTitle: 'DOM - Oppgave 3', menu: 'dom-exercise-3' });
}

function exercise4(req, res) {
   return res.render('dom_exercise_4', { pageTitle: 'DOM - Oppgave 4', menu: 'dom-exercise-4' });
}

function exercise5(req, res) {
   return res.render('dom_exercise_5', { pageTitle: 'DOM - Oppgave 5', menu: 'dom-exercise-5' });
}

function exercise6(req, res) {
   return res.render('dom_exercise_6', { pageTitle: 'DOM - Oppgave 6', menu: 'dom-exercise-6' });
}