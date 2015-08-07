describe("addblank test",function() {
  var blankQuestion;
  var blank = [];
  var answers = [];
  beforeEach(function() {
    blank = [      {type:'input',name:'1_1',answer:['统一建模语言']},
                   {type:'input',name:'1_2',answer:['抽象','封装']}];

    answers = [{type:'text',name:'4_1',answer:'hello'},
                   {type:'radio',name:'1_1',answer:['统一建模语言']},
                   {type:'radio',name:'1_2',answer:['多态','封装','继承']},
                   {type:'checkbox',name:'2_1',answer:['A','C']},

                   {type:'checkbox',name:'3_1',answer:['B','D']}];

    blankQuestion = new blankChoice();
    for(var i=0; i<blank.length; i++) {
      blankQuestion.addBlankQuestion(blank[i]);
    }

    blankQuestion.comp(answers);

  });
  it("should calculete every score",function() {

    expect(blankQuestion.blankQuestions).toEqual([{type:'input',name:'1_1',answer:['统一建模语言'],score:0},
                {type:'input',name:'1_2',answer:['抽象','封装'],score:0}]);
  });

  describe("total score",function() {
    it("should be right score",function() {
    var sum = blankQuestion.getTotalscore();
    expect(sum).toBe(0);
  });
  });
});
