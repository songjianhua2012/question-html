/**
 * Created by songjianhua on 15-8-3.
 */
document.getElementById('Snum').addEventListener("keydown",function(evt){
    String.fromCharCode(evt.keyCode);
    if((evt.keyCode < 48) || (evt.keyCode > 57) ) {
        evt.preventDefault();
    }
});

function manyChoice(str1,str2) {
  function getResult1() {
      var result = [].filter.call(question1,function(elem) {
          return elem.checked;
      }).map(function(elem) {
          return elem.value;
      });
      return result.join("");
  }
  var question1 = document.getElementsByName(str1);
  [].filter.call(question1,function(elem) {
      elem.addEventListener('click', function () {
          document.getElementsByName(str2)[0].value=getResult1();
      });
  });
}

manyChoice('3_1','3');
manyChoice('3_2_1','3_2');



function singleChoice(str1,str2) {
  var question2 = document.getElementsByName(str1);
  [].filter.call(question2,function(val) {
      val.addEventListener('click',function() {
          document.getElementsByName(str2)[0].value = getResult2();
        });
      });

  function getResult2() {
    var result = [].filter.call(question2,function(val) {
        return val.checked;
    }).map(function(val) {
        return val.value;
    });
    return result;
  }
}

singleChoice('2_1','2');
singleChoice('2_2','2_2_1');


document.getElementById('submit').addEventListener('click',function(){
    document.getElementsByName('score')[0].value = getScore();
});


function getScore() {
    var score = 0;

    var testContainer = document.getElementById("test-container");
    form = testContainer.getElementsByTagName("form")[0];
    var scanner = new formSelizer();

    var result=scanner.scan(form);
    var different = new differentQuestion();
    different.add(result);

    var question = new Questions();
    score = question.getScore(different);
    //different.add();
    return score;
}
