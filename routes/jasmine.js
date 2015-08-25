module.exports = function(app) {
    app.get('/jasmine-exercise-1', exercise1);
    app.get('/jasmine-exercise-2', exercise2);
};

function exercise1(req, res) {
   return res.render('jasmine_exercise_1', { pageTitle: 'Jasmine - Oppgave 1', menu: 'jasmine-exercise-1' });
}

function exercise2(req, res) {
   return res.render('jasmine_exercise_2', { pageTitle: 'Jasmine - Oppgave 2', menu: 'jasmine-exercise-2' });
}