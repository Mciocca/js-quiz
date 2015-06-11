var User = function(name, email){
  this.name = name;
  this.email = email;
  this.score = 0;
};

User.prototype = {
 getScore: function(questions) {
   var questionValue = 100/questions.length;
   for (var i = 0; i < questions.length; i++) {
     if(questions[i].correctAnswer === questions[i].userAnswer){
       this.score += questionValue;
     }
   }  
 },
 
 displayScore: function(){
   document.getElementById('user-name').innerText = this.name;
   document.getElementById('user-score').innerText = this.score;
   document.getElementById('show-user-score').style.display = 'block';  
 }
 
};