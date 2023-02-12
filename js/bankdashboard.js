document.getElementById('depositBtn').addEventListener('click', function () {
    // get value from input fild  
    const inputfild = document.getElementById('depositAmount');
    const inputDopositAmountstring = inputfild.value;
    const inputAmount = parseFloat(inputDopositAmountstring);
    inputfild.value = '';
    if (isNaN(inputAmount)) {
        alert('input Valid Number')
        return;
    }
   
    const getPriviousAmount = document.getElementById('privaousAmount');
    const priviousAmountString = getPriviousAmount.innerText;
    const priviousAmount = parseFloat(priviousAmountString);
    //  add new and privious doposit amount 
    document.getElementById('privaousAmount').innerText = priviousAmount + inputAmount;

    const getPriviousTotalAmount = document.getElementById('priviousTotalAmount');
    const privaousTotalAmountString = getPriviousTotalAmount.innerText;
    const privaousTotalAmount = parseFloat(privaousTotalAmountString);
    document.getElementById('priviousTotalAmount').innerText = privaousTotalAmount + inputAmount;

})

// withdraw btn 
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const inputfild = document.getElementById('withdrawAmount');
    const withdrawAmountString = inputfild.value;
    const withdrawamount = parseFloat(withdrawAmountString);
    inputfild.value = '';
    if (isNaN(withdrawamount)) {
        alert('input Valid Number')
        return;
    }
    const getPriviousAmount = document.getElementById('privaousWithdrAwmount');
    const priviousAmountString = getPriviousAmount.innerText;
    const priviousAmount = parseFloat(priviousAmountString);
    //  add new and privious doposit amount 
    const getPriviousTotalAmount = document.getElementById('priviousTotalAmount');
    const privaousTotalAmountString = getPriviousTotalAmount.innerText;
    const privaousTotalAmount = parseFloat(privaousTotalAmountString);
   
   
    if (withdrawamount>privaousTotalAmount) {
        alert('You Dont have suufficnt blance')
        return;
    }
    // final calculation 
    document.getElementById('privaousWithdrAwmount').innerText = priviousAmount + withdrawamount;

    document.getElementById('priviousTotalAmount').innerText = privaousTotalAmount - withdrawamount;
})