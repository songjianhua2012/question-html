/**
 * Created by songjianhua on 15-8-3.
 */
document.getElementById('Snum').addEventListener("keydown",function(evt){
    String.fromCharCode(evt.keyCode);
    if((evt.keyCode < 48) || (evt.keyCode > 57) ) {
        evt.preventDefault();
    }
});
/*
document.getElementsByName('2_1');


    for (var i = 0; i < document.getElementsByName('2_1').length; i++) {
        if (document.getElementsByName('2_1')[i].checked == true) {
            document.getElementsByName('2_1')[0].value = 'A';
        }
    }

document.getElementsByName('3_1');
var str = [];
for (var i = 0; i < document.getElementsByName('3_1').length; i++) {
    if (document.getElementsByName('3_1')[i].checked == true) {
        str.push(document.getElementsByName('3_1')[i].value );
    }
}
document.getElementsByName('3_1')[0].value = str;
*/



function getResult1() {
    var result = [].filter.call(question1,function(elem) {
        return elem.checked;
    }).map(function(elem) {
        return elem.value;
    });
    return result.join("");
}
var question1 = document.getElementsByName('3_1');
[].filter.call(question1,function(elem) {
    elem.addEventListener('click', function () {
        document.getElementsByName('3')[0].value=getResult1();
    });
});



function getResult() {
    var result = [].filter.call(question,function(elem) {
        return elem.checked;
    }).map(function(elem) {
        return elem.value;
    });
    return result.join("");
}

var question = document.getElementsByName('3_2_1');
[].filter.call(question,function(elem) {
    elem.addEventListener('click', function () {
        document.getElementsByName('3_2')[0].value=getResult();
    });
});


var question2 = document.getElementsByName('2_1');
[].filter.call(question2,function(val) {
    val.addEventListener('click',function() {
        document.getElementsByName('2')[0].value = getResult2();
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

var question3 = document.getElementsByName('2_2');
[].filter.call(question3,function(val) {
    val.addEventListener('click',function() {
        document.getElementsByName('2_2_1')[0].value = getResult3();
    });
});
function getResult3() {
    var result = [].filter.call(question3,function(val) {
        return val.checked;
    }).map(function(val) {
        return val.value;
    });
    return result;
}

document.getElementById('submit').addEventListener('click',function(){
    document.getElementsByName('score')[0].value = getScore();
});

/*
var question4=document.getElementsByName("提交");

[].filter.call(question4,function(val) {
    val.addEventListener('click',function() {
        document.getElementsByName('score')[0].value = getScore();
    })
})*/

function getScore() {
    var score = 0;
   /* var str = [];
    for(var i=0; i<3; i++) {
        str.push(document.getElementsByName('1_2_'+(i+1)))[0].value;
    }

    var str1 = '';
    for(var j=0; j<str.length; j++) {
        (str1 += str[i].value);
    }
    if(str1 == '封装继承多态') {
        score += 15;
    }
*/
    if(document.getElementsByName('1_1')[0].value == '统一建模语言') {
        score += 5;
    }
    if(document.getElementsByName('3')[0].value == "AB") {
        score+=10;
    }
    if(document.getElementsByName('3_2')[0].value == "BC") {
        score += 10;
    }
    if(document.getElementsByName('2_2_1')[0].value == "A") {
        score += 10;
    }
    if(document.getElementsByName('2')[0].value == "D") {
        score += 10;
    }

    return score;
}
