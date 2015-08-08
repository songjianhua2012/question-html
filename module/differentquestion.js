function differentQuestion() {
  this.Items = [new addBlankQuestion(),
                new singleChoice(),
                new manyChoice()];
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
        this.Items[0].addBlankQuestion(this.result[i]);
      }
      break;
      case 'radio': {
        if(this.result[i].checked) {
          this.Items[1].addSingleQuestion(this.result[i]);
        }
      }
      break;
      case 'checkbox': {
        if(this.result[i].checked) {
          this.Items[2].addManyQuestion(this.result[i]);
        }
      }
      break;
    }
  }


  //return totalscore.getTotalscore(addblank,singlechoice,manychoice);
};
