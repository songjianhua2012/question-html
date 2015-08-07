function FormSelizer() {}

FormSelizer.prototype.scan = function(form) {
  /*var testContainer=document.getElementById("test-container");
  var form;
  var result = [];

  form=testContainer.getElementsByTagName("form");
  */
  var result = [];
  for(var i=0; i<form.length; i++) {
    result.push({type:form[i].type,name:form[i].name,answer:form[i].value});
  }
  return result;
};

//module.exports = formSelizer;
