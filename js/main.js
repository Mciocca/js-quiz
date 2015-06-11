var currentUser;
var quiz;

window.onload = function() {	
  
  var questions = [
	  new Question('All javascript objects inherently have a', ['prototype', 'class', 'model', 'view' ], 'prototype'),
	  new Question('Referencing a variable in a parent scope is called a', ['refernce', 'recursive variable', 'closure', 'error' ], 'closure'),
	  new Question('A parent element can handle an event for a child element', ['true', 'false'], 'true'),
	  new Question('JSON and JavaScript objects are EXACTLY the same', ['true', 'false'], 'false')
  ];
  
  var userBtn = document.getElementById('user-setup');
  userBtn.addEventListener('click', function(){
	  createUser();
	  quiz = new Quiz(currentUser, questions);
    quiz.init();
    //console.log(currentUser);
    //console.log(quiz);
  },false);

};

function createUser() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	currentUser = new User(name, email);
	//console.log(currentUser);
}