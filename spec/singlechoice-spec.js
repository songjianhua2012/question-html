
describe("singleChoice test",function() {
  var singleQuestion;
  var singles = [];
  var answers = [];
  beforeEach(function() {
    singles = [{type:'radio',name:'1_1',answer:'A'},
                   {type:'radio',name:'1_2',answer:'B'}];

    answers = [{type:'text',name:'2_1',answer:'hello'},
                   {type:'radio',name:'1_1',answer:'C'},
                   {type:'radio',name:'1_2',answer:'B'}];

    singleQuestion = new singleChoice();
    for(var i=0; i<singles.length; i++) {
      singleQuestion.addSingleQuestion(singles[i]);
    }

    singleQuestion.comp(answers);

  });
  it("should calculete every score",function() {

    expect(singleQuestion.singleQuestions).toEqual([{type:'radio',name:'1_1',answer:'A',score:0},
                {type:'radio',name:'1_2',answer:'B',score:10}]);
  });

  describe("total score",function() {
    it("should be right score",function() {
    var sum = singleQuestion.getTotalscore();
    expect(sum).toBe(10);
  });
  });
});
