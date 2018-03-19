
function validate() {
    
  var final=true;
  var arrayOfInputs=document.getElementsByTagName("input");
    /*The getElemenstByTagName returns all the objects that is of the type input and stores them in the form of an arry*/
    
  if(arrayOfInputs[0].value.length==0) final=false;
    
  return final;
}

/*The form is NOT sent if we return false.

But if we simply write return false, the form will still be submitted. We need to modify the html code attribute as. 
onsubmit="return validate()"
*/