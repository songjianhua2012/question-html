function differentQuestion() {
  this.Items = [new singleChoice1(),new blankChoice(),new manyChoice1()];
}

differentQuestion.prototype.add = function(result) {

  // this.Items[0] = new singleChoice1();
  // this.Items[1] = new blankChoice();
  // this.Items[2] = new manyChoice1();
  //alert(this.Items[1].singleQuestions);
  for (var i = 0; i < result.length; i++) {
    //alert(this.Items);
    switch(result[i].type) {

      case 'radio':
          (this.Items[0]).addSingleQuestion(result[i]);
          //alert(this.Items[0].singleQuestions[0].answer);
          break;
      case 'text':
        (this.Items[1]).addBlankQuestion(result[i]);
        //alert(this.Items[1].blankQuestions[0].answer);
        break;
      case 'checkbox':
          this.Items[2].addManyQuestion(result[i]);
          break;
    }
  }
  //alert(this.Items[0].singleQuestions[0].name);
};
