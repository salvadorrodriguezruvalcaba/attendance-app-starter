const express = require('express');
const router = express.Router();
const names = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

const courses = {
    courseName: 'Advanced Javascript',
    description: 'Welcome to the Advanced Class at Austin Coding Academy!',
    students: [
     {name: 'Matt', score: 95, attendance: 0, notes: ''},
     {name: 'Joe', score: 100, attendance: 0, notes: ''}
    ]
  };

function findStudentIndex(studentName) {
   for (var i = 0; i < courses.students.length; i++) {
     if (courses.students[i].name === studentName){
        return i;
     }
   }
};

router.get('/*', function(req, res, next) {
  res.render('names.ejs', { courses: courses });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;

  const studentIndex = findStudentIndex(name);
  if (studentIndex !== undefined) {
        courses.students[studentIndex].attendance++;
      }
  else {
        const newStudent = {name: name, score: null, attendance: 1, notes: 'Welcome!'};
        courses.students.push(newStudent);
      }

  res.redirect('/names');

});

module.exports = router;
