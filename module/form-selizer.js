function FormSelizer() {
  //this.result = [];
}

FormSelizer.prototype.scan = function(form) {

  var result = [];

  for(var i=0; i<form.length; i++) {
    if((form[i].type === 'radio' || form[i].type === 'checkbox') && (form[i].checked===true))
      {result.push({type:form[i].type,name:form[i].name,answer:form[i].value});
      }
    if(form[i].type !== 'radio' && form[i].type!=='checkbox') {
      result.push({type:form[i].type,name:form[i].name,answer:form[i].value});
    }
  }
  //alert(result[5].type);
  return result;
   //different.add(result);
};

//module.exports = formSelizer;
