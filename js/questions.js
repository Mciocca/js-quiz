var Question = function (question, choices,  correct) {
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correct;
  this.userAnswer;
};

Question.prototype = {

  createQuestionHtml: function (current, total) {
    var qnum = 'q-'+current;
    document.getElementById('question-title').innerText = this.question;
    var btn = current !== (total-1) ? "<button id='next-button'>Next Question</button>" : "<button id='next-button'>Finish Quiz</button>";
    var htmlString = this.createChoicesHtml();
    htmlString += btn;
    return htmlString;
  },
  
  createChoicesHtml : function(){
     var htmlString = '';
    for (var index = 0; index < this.choices.length; index++) {
      htmlString += "<input class='question-input' name='"+qnum+"' type=\"radio\" value='" + this.choices[index] + "'>" + this.choices[index] + "</input> <br/>";
    }
    return htmlString;
  },

  saveUserAnswer: function (qnum) {
    var $this = this;
    var els = document.querySelectorAll('input[name='+qnum+']');

    for (var index = 0; index < els.length; index++) {
      var element = els[index];
      element.addEventListener('click', function () {
        $this.userAnswer = this.value;
      }, false);
    }
  }

};