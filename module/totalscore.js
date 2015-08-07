function totalScore() {}

totalScore.prototype.getTotalscore=function(addblank,singlechoice,manychoice) {
  var total = 0;
  //var scanner = new formSelizer();
  //total =
  var answers = loadCorrectAnswer();
  addblank.comp(answers);
  singlechoice.comp(answers);
  manychoice.comp(answers);
  total = addblank.getTotalscore() +
          singlechoice.getTotalscore() + manychoice.getTotalscore();
  return total;
};
