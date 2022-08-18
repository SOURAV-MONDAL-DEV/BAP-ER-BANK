function getInputvalue(inputId){
    const getInputField = document.getElementById(inputId);
    const getInputValueString = getInputField.value;
    const getInputvalueNumber = parseFloat(getInputValueString);

    getInputField.value = '';

    return getInputvalueNumber ;

}

function getInnerTextValue(innerTextid){
    const getInnerTextField = document.getElementById(innerTextid);
    const getInnerTextString = getInnerTextField.innerText;
    const getInnerTextNumber = parseFloat(getInnerTextString);

    return getInnerTextNumber;
}

function setTotal(  WhatToSet , targetId){
    const getTargetId = document.getElementById(targetId);
    getTargetId.innerText = WhatToSet;
}

