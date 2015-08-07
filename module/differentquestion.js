function differentQuestion() {
  this.addblank = new blankChoice();
  this.singlechoice = new singleChoice();
  this.manychoice = new manyChoice();
}

differentQuestion.prototype.add = function(result) {


  //var totalscore = new totalScore();

  for (var i = 0; i < this.result.length; i++) {
    // if(this.result[i].type === 'input') {
    //   this.addblank.addBlankQuestion(this.result[i]);
    // }
    // else if (this.result[i].type === 'radio') {
    //   this.singlechoice.addSingleQuestion(this.result[i]);
    // }
    // else if (this.result[i].type === 'checkbox') {
    //   this.manychoice.addManyQuestion(this.result[i]);
    // }

    switch(type) {
      case 'text': {
        addblank.addBlankQuestion(this.result[i]);
      }
      break;
      case 'radio': {
        if(this.result[i].checked) {
          singlechoice.addSingleQuestion(this.result[i]);
        }
      }
      break;
      case 'checkbox': {
        if(this.result[i].checked) {
          manychoice.addManyQuestion(this.result[i]);
        }
      }
      break;
    }
  }


  //return totalscore.getTotalscore(addblank,singlechoice,manychoice);
};
