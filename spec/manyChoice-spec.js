describe("manyChoice test",function() {
  var manyQuestion;
  var many = [];
  var answers = [];
  beforeEach(function() {
    many = [{type:'checkbox',name:'2_1',answer:['A']},
                   {type:'checkbox',name:'2_1',answer:['B']},
                   {type:'checkbox',name:'3_1',answer:['B']},
                   {type:'checkbox',name:'3_1',answer:['D']}];

    answers = [{type:'text',name:'4_1',answer:'hello'},
                   {type:'radio',name:'1_1',answer:'C'},
                   {type:'radio',name:'1_2',answer:'B'},
                   {type:'checkbox',name:'2_1',answer:['A','C']},

                   {type:'checkbox',name:'3_1',answer:['B','D']}];

    manyQuestion = new manyChoice();
    for(var i=0; i<many.length; i++) {
      manyQuestion.addManyQuestion(many[i]);
    }

    manyQuestion.comp(answers);

  });
  it("should calculete every score",function() {

    expect(manyQuestion.manyQuestions).toEqual([{type:'checkbox',name:'2_1',answer:['A','B'],score:0},
                {type:'checkbox',name:'3_1',answer:['B','D'],score:10}]);
  });

  describe("total score",function() {
    it("should be right score",function() {
    var sum = manyQuestion.getTotalscore();
    expect(sum).toBe(10);
  });
  });
});
