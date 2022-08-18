

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const currentWithdraw = getInputvalue('withdraw-field');
    const preWithdraw = getInnerTextValue('pre-withdraw');
    const addTotalWithdraw = currentWithdraw + preWithdraw ;
    const setNewTotalWithdraw = setTotal(addTotalWithdraw, 'pre-withdraw');
   
    
    const preBalance = getInnerTextValue('pre-balance');
    const restTotalBalance = preBalance - currentWithdraw;
    const setNewTotalBalance = setTotal(restTotalBalance, 'pre-balance')





    return setNewTotalWithdraw, setNewTotalBalance ;
 

} )

