var mail = document.querySelector('#mail');
var alertMail = document.querySelector('.mail-alert');
var password = document.getElementById('password');
var alertPass = document.querySelector('.password-alert');
var button = document.getElementById('login-button');
var button2 = document.getElementById('button-6');
var mailChecked = document.getElementById('mail-checked');
var passChecked = document.getElementById('pass-checked');

mail.addEventListener('blur', function(){
    var mailInput = mail.value;
    var mailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(mailInput.match(mailRegEx)){
        mail.classList.add('validation');
    } else{
        mail.classList.remove('validation');
        mail.classList.add('negation');
        alertMail.style.color = 'red';
        alertMail.innerHTML = '<span>You must enter a valid email format</span>'
    }
});

mail.addEventListener('focus', function(){
    alertMail.style.color = 'white';
});

password.addEventListener('blur', function(){
    var passValue = password.value;
    for (i=0;i<passValue.length; i++){
        var char = passValue.charAt(i);
        var charN = char.charCodeAt(0);
        if ((charN > 47 && charN < 58) || (charN > 64 && cc < 91) || (charN > 96 && charN < 123)){
            password.classList.add('validation');
        }else{
            password.classList.remove('validation');
            password.classList.add('negation');
            alertPass.style.color = 'red';
            alertPass.innerHTML = '<span>You must enter a valid password format</span>'
        }
    }
});

button.addEventListener('click', function(){
    var mailValue = mail.value;
    var passValue = password.value;
    document.getElementById('overlay').style.display = 'block';
    mailChecked.innerHTML = '<span>Mail: </span>' + mailValue;
    passChecked.innerHTML = '<span>Password: </span>' + passValue;

})

button2.addEventListener('click', function(){
    document.getElementById('overlay').style.display = 'none';
})
