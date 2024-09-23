//input value return function
function getInputFieldById(id){
   const idValue= document.getElementById(id).value;
   const idValueNumber=parseFloat(idValue);
   return idValueNumber;
}

//text value return function
function getTextFieldById(id){
    const textValue= document.getElementById(id).innerText;
    const textValueNumber=parseFloat(textValue);
    return textValueNumber;
 }
