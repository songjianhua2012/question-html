function differentQuestion() {
  this.Items = [new blankChoice(),
                new singleChoice(),
                new manyChoice()];
}

differentQuestion.prototype.add = function(result) {


  //var totalscore = new totalScore();

  for (var i = 0; i < this.Items.length; i++) {

    switch(result[i].type) {
      case 'text': {
        this.Items[0].addBlankQuestion(result[i]);
      }
      break;
      case 'radio': {
          this.Items[1].addSingleQuestion(result[i]);
      }
      break;
      case 'checkbox': {
        // if(this.result[i].checked) {
          this.Items[2].addManyQuestion(result[i]);
        //}
      }
      break;
    }
  }


  //return totalscore.getTotalscore(addblank,singlechoice,manychoice);
};
