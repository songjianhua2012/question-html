describe("differentQuestion test",function() {
  var different;
  var blank = [];
  var result = [];
  beforeEach(function() {
    // blank = [      {type:'input',name:'1_1',answer:['统一建模语言']},
    //                {type:'input',name:'1_2',answer:['抽象','封装']}];

    result = [{type:'text',name:'4_1',answer:'hello'},
                   {type:'radio',name:'1_1',answer:'A'},
                   {type:'radio',name:'1_2',answer:'多态'},
                   {type:'radio',name:'1_2',answer:'继承'},
                   {type:'checkbox',name:'2_1',answer:'A'},
                   {type:'checkbox',name:'2_1',answer:'B'},

                  //  {type:'checkbox',name:'3_1',answer:['B','D']}];
                ];


    });

    // blankQuestion.comp(answers);
    it("should calculete every score",function() {
      different = new differentQuestion();
      different.add(result);

      expect(different.Items[1].singleQuestions[0].answer).toBe('A');

    // expect(blankQuestion.blankQuestions).toEqual([{type:'input',name:'1_1',answer:['统一建模语言'],score:0},
    //             {type:'input',name:'1_2',answer:['抽象','封装'],score:0}]);
  });

  // describe("total score",function() {
  //   it("should be right score",function() {
  //   var sum = blankQuestion.getTotalscore();
  //   expect(sum).toBe(0);
  // });
  // });
});
