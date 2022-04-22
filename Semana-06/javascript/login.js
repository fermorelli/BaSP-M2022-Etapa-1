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
    alertMail.classList.remove('negation');
    alertMail.classList.remove('validation');
    alertMail.style.color = "white";
});

password.addEventListener('blur', function(){
        var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var passValue = password.value;
        var isAlphanumeric = true;
        var justNumbers = true;
        var justLetters = true;

        passValue.split('').forEach(letter=>{
            if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });
        if (isAlphanumeric && !justNumbers && !justLetters){
            password.classList.add('validation');
        }else{
            password.classList.add('negation');
            alertPass.style.color = 'red';
            alertPass.innerHTML = '<span>You must enter a valid password format</span>';
        }
});

password.addEventListener('focus', function(){
    alertPass.classList.remove('negation');
    alertPass.classList.remove('validation');
    alertPass.style.color = "white";
});

button.addEventListener('click', function(){
    var mailValue = mail.value;
    var passValue = password.value;
    document.getElementById('overlay').style.display = 'block';
    if(mail.classList.contains('validation')){
        mailChecked.innerHTML = '<span>Mail: </span>' + mailValue;
    }else if(mail.classList.contains('negation')){
        mailChecked.innerHTML = '<span>Mail: Incorrect mail format</span>';
    };

    if(password.classList.contains('validation')){
        passChecked.innerHTML = '<span>Password: </span>' + passValue;
    }else if(password.classList.contains('negation')){
        passChecked.innerHTML = '<span>Password: Incorrect password format</span>';
    };
});

button2.addEventListener('click', function(){
    document.getElementById('overlay').style.display = 'none';
});