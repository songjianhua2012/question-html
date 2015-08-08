//var FormSelizer = require("../form-selizer.js");

describe("formSelizer test",function() {
  var testContainer = document.getElementById("test-container");
  var form;
  var results = [];
  var subFormSelizer;
  beforeEach(function() {
    testContainer.innerHTML = "<form>"+

    "<input type='text' name='1_1' value='统一建模语言'/>"+
    "<input type='text' name='1_2' value='多态封装继承'/>"+
    "<input type='radio' name='2_1' value='A' checked='true'/>"+
    "<input type='radio' name='2_2' value='D' checked='true'/>"+
    "<input type='checkbox' name='3_1' value='A' checked='true'/>"+
    "<input type='checkbox' name='3_1' value='B' checked='true'>"+"</form>";

    form = testContainer.getElementsByTagName("form")[0];

    subFormSelizer = new FormSelizer();
  });
  afterEach(function() {
    testContainer.innerHTML = "";
  });

  it("should be right result",function() {
    var result = subFormSelizer.scan(form);
    expect(result).toEqual([{type:'text',
                              name:'1_1',
                              answer:'统一建模语言'},
                              {type:'text',
                              name:'1_2',
                              answer:'多态封装继承'
                              },
                              {type:'radio',
                              name:'2_1',
                              answer:'A'
                              },
                              {type:'radio',
                              name:'2_2',
                              answer:'D'
                              },
                              {type:'checkbox',
                              name:'3_1',
                              answer:'A'
                              },
                              {type:'checkbox',
                              name:'3_1',
                              answer:'B'
                              }]);
  });
});
