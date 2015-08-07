function manyChoice() {
  this.manyQuestions = [];
}

manyChoice.prototype.addManyQuestion=function(many) {
  //this.manyQuestions.push(many);
  for(var j=0; j<this.manyQuestions.length; j++) {
    if(many.name === this.manyQuestions[j].name) {
      this.manyQuestions[j].answer.push(many.answer[0]);
      return;
    }
  }
  this.manyQuestions.push(many);
};

manyChoice.prototype.comp = function(answers) {
  var count = 0;
  for(var i=0; i<this.manyQuestions.length; i++) {
    for(var j=0; j<answers.length; j++) {
      if(this.manyQuestions[i].name === answers[j].name ) {

        for(var m = 0; m < this.manyQuestions[i].answer.length; m++) {
          if(this.manyQuestions[i].answer[m] == answers[j].answer[m]) {
            count++;//多选题题号与答案中题号一致时，逐一判断选项是否与答案相同，
                    //相同时计数器加1，不同即为错误，计数器清零，结束比较
          }
          else {
            count = 0;
            break;
          }
        }
          this.manyQuestions[i].score += 5*count;
    }
      else {
        this.manyQuestions[i].score = 0;
        count = 0;
      }
    }
  }
};

manyChoice.prototype.getTotalscore=function() {
  var manyTotal = 0;
  for(var i=0; i<this.manyQuestions.length; i++) {
    manyTotal += this.manyQuestions[i].score;
  }

  return manyTotal;
};
