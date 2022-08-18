document.getElementById('btn-submit').addEventListener('click', function(){
    const emailbox = document.getElementById('user_email');
    const email = emailbox.value;
    const passbox = document.getElementById('user-password');
    const password = passbox.value;

    if(email == 'sourav@bank.com' && password == 'taka'){
        window.location.href ='bank.html';   
    }
    else{
        alert("please input correct password");
    }

})