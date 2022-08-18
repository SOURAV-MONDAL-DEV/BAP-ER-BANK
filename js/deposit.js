document.getElementById('btn-deposit').addEventListener('click', function(){
    const currentDepositValue= getInputvalue('deposit-field');
    const preDeposit = getInnerTextValue('pre-deposit');
    const addTotalDeposit = currentDepositValue + preDeposit ;
    const setNewTotalDeposit =  setTotal(addTotalDeposit,'pre-deposit');

    const prebalance = getInnerTextValue('pre-balance');
    const totalBalance = currentDepositValue + prebalance ;
    const addBalance = setTotal(totalBalance , 'pre-balance');

    return setNewTotalDeposit , addBalance ;

})




