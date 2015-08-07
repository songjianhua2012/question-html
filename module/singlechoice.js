function singleChoice() {
  this.singleQuestions = [];
}

singleChoice.prototype.addSingleQuestion=function(single) {
  this.singleQuestions.push(single);
};

singleChoice.prototype.comp = function(answers) {
  for(var i=0; i<this.singleQuestions.length; i++) {
    for(var j=0; j<answers.length; j++) {
      if(this.singleQuestions[i].name === answers[j].name &&
        this.singleQuestions[i].answer === answers[j].answer) {

          this.singleQuestions[i].score = 10;
      }
      else {
        this.singleQuestions[i].score = 0;
      }
    }
  }
};

singleChoice.prototype.getTotalscore=function() {
  var singleTotal = 0;
  for(var i=0; i<this.singleQuestions.length; i++) {
    singleTotal += this.singleQuestions[i].score;
  }

  return singleTotal;
};
