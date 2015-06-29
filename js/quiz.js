var Quiz = function (currentUser, questions) {
  this.currentUser = currentUser;
  this.questions = questions;
  this.currentQuestion = 0;
};

Quiz.prototype = {
  init: function () {
    document.getElementById('user-info').style.display = "none";
    this.loadQuestion();
  },

  loadQuestion: function () {
    var q = this.questions[this.currentQuestion];
    document.getElementById('current-question').innerHTML = q.createQuestionHtml(this.currentQuestion, this.questions.length);
    q.saveUserAnswer('q-' + this.currentQuestion);
    this.goToNextQuestion();
  },

  goToNextQuestion: function () {
    var $this = this;
    var btn = document.getElementById('next-button');
    btn.addEventListener('click', function () {
      $this.getNextQuestion();
    });
  },

  getNextQuestion: function () {
    this.currentQuestion += 1;
    if (this.currentQuestion < this.questions.length) {
      this.loadQuestion();
    } else {
      this.currentUser.getScore(this.questions);
      document.getElementById('quiz-main').style.display = 'none';
      this.currentUser.displayScore();
    }
  }
};