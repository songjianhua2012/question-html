function Questions() {
  //this.questionItems = [];
}

Questions.prototype.getTScore = function(questions) {
  var total = 0;
   var answers = loadCorrectAnswer();

  for(var i=0; i<questions.Items.length; i++) {
      //alert(questions.Items[0].blankQuestions[0].answer);
      var ob = questions.Items[i];
      //alert(ob);
      ob.comp(answers);
      total += ob.getTotalscore();
  }
  return total;
};
