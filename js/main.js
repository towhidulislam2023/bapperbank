document.getElementById('loginSubmitBtn').addEventListener('click', function () {
    //get input emailfild value
    const userInputEmail = document.getElementById('userEmailInput')
    const userEmail = userInputEmail.value;
    userInputEmail.value = '';
    // get password value 
    const userInputPassword = document.getElementById('userPasswordInput');
    const userpassword = userInputPassword.value
    userInputPassword.value = '';;
    // apply  condittaion but proprotionally we do it backend
  const userTrueEmail="info@gmail.com"
  const userTruePassword="1234"
    if (userEmail === userTrueEmail && userpassword===userTruePassword) {
        window.location.href="bank.html"
    }
    else {
        alert('Input Valid Password Or Email')
    }
})
