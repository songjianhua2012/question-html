function blankChoice() {
  this.blankQuestions = [];
}

blankChoice.prototype.addBlankQuestion=function(blank) {
  //this.manyQuestions.push(many);
  for(var j=0; j<this.blankQuestions.length; j++) {
    if(blank.name === this.blankQuestions[j].name) {
      this.blankQuestions[j].answer.push(blank.answer[0]);
      return;
    }
  }
  this.blankQuestions.push(blank);
};

blankChoice.prototype.comp = function(answers) {
  var count = 0;
  for(var i=0; i<this.blankQuestions.length; i++) {
    for(var j=0; j<answers.length; j++) {
      if(this.blankQuestions[i].name === answers[j].name ) {

        for(var m = 0; m < this.blankQuestions[i].answer.length; m++) {
          for(var n=0; n < answers[j].answer.length; n++) {
          if(this.blankQuestions[i].answer[m] == answers[j].answer[n]) {
            count++;//填空题题号与答案中题号一致时，逐一判断选项是否与答案相同，
                    //相同时计数器加1，不同时计数器不变

          }
          //else {
            //count = 0;
            //break;
          //}
        }
      }
          this.blankQuestions[i].score += 5*count;
    }
      else {
        this.blankQuestions[i].score = 0;
        count = 0;
      }
    }
  }
};

blankChoice.prototype.getTotalscore=function() {
  var blankTotal = 0;
  for(var i=0; i<this.blankQuestions.length; i++) {
    blankTotal += this.blankQuestions[i].score;
  }

  return blankTotal;
};
