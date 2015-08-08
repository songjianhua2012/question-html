function Questions() {
  //this.questionItems = [];
}

Questions.prototype.getScore = function(questions) {
  var total = 0;
  var answers = loadCorrectAnswer();
  for(var i=0; i<questions.Items.length; i++) {

      questions.Items[i].comp(answers);
      total += questions.Items[i].getTotalscore();

  }
};
