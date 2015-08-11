describe("questions test",function() {
  var single_1;
  var blank_1;
  var many_1;
  var question;
  var blank;
  var sngle;
  var many;
  var answers;
  var Items;
  beforeEach(function() {
    blank = [{type:'text', name:'1_1', value:['统一建模语言'],score:10}];
    single = [{type:'text', name:'1_2', value:'A',score:0}];
    many = [{type:'text', name:'1_3', value:['A','B'],score:20}];

    answers = [{type:'text', name:'1_1', answer:['统一建模语言']},
               {type:'text', name:'1_2', answer:'A'},
               {type:'text', name:'1_3', answer:['A','B']}];
    single_1 = new singleChoice();
    blank_1 =new blankChoice();
    many_1 = new manyChoice();

    single_1.addSingleQuestion(single);
    blank_1.addBlankQuestion(blank);
    many_1.addManyQuestion(many);

    Items = [single_1,blank_1,many_1];
    question = new Questions();
    
    question.getScore(Items);
  });
});
