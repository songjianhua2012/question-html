function Questions() {
  //this.questionItems = [];
}

Questions.prototype.getScore = function(Items) {
  var total = 0;
  var answers = loadCorrectAnswer();
  for(var i=0; i<Items.length; i++) {
    for(var j=0; j<Items[i].length; j++) {
      Items[i].comp(answers);
      total += Items[i].getTotalscore();
    }
  }
};
