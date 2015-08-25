module.exports = function(app) {
    app.get('/jasmine-exercise-1', gameOfThrones);
    app.get('/jasmine-exercise-2', calculator);
};

function gameOfThrones(req, res) {
   return res.render('jasmine_exercise_1', { pageTitle: 'Jasmine - Game of Thrones', menu: 'jasmine-exercise-1' });
}

function calculator(req, res) {
   return res.render('jasmine_exercise_2', { pageTitle: 'Jasmine - Calculator', menu: 'jasmine-exercise-2' });
}