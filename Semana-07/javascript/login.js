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
    var mailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(mailInput.match(mailRegEx)){
        mail.classList.add('validation');
    }else if(mailInput.length == 0){
        mail.classList.add('negation');
        alertMail.style.color = 'red';
        alertMail.innerText = 'Field is required';
    }else{
        mail.classList.remove('validation');
        mail.classList.add('negation');
        alertMail.style.color = 'red';
        alertMail.innerText = 'You must enter a valid email format';
    }
});

mail.addEventListener('focus', function(){
    mail.classList.remove('negation');
    mail.classList.remove('validation');
    alertMail.innerText = '';
});

password.addEventListener('blur', function(){
        var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var passValue = password.value;
        var isAlphanumeric = true;
        var justNumbers = true;
        var justLetters = true;

        passValue.split('').forEach(function(letter){
            if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });
        
        if (isAlphanumeric && !justNumbers && !justLetters){
            password.classList.add('validation');
            alertPass.style.display = 'none';
        }else if(passValue.length == 0){
            password.classList.add('negation');
            alertPass.innerText = 'Field is required';
        }else{
            password.classList.add('negation');
            alertPass.innerText = 'You must enter a valid password format';
        }
});

password.addEventListener('focus', function(){
    password.classList.remove('negation');
    password.classList.remove('validation');
    alertPass.innerText = '';
});

button.addEventListener('click', function(){
    var mailValue = mail.value;
    var passValue = password.value;
    var isOk = 0;

    document.getElementById('overlay').style.display = 'block';

    if(mailValue.length == 0 && passValue.length == 0){
        mailChecked.innerText = 'Fields are empty';

    }else if(mail.classList.contains('validation')){
        isOk += 1;
    }else if(mail.classList.contains('negation')){
        mailChecked.innerText = 'Mail: Incorrect mail format';
    };

    if(password.classList.contains('validation')){
        isOk += 1;
    }else if(password.classList.contains('negation') && passValue.length > 0){
        passChecked.innerText = 'Password: Incorrect password format';
    };

    if(isOk==2){
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login'
        url += '?email=' + mail.value + '&password=' + password.value;

        fetch(url)
            .then(function(response){
                return response.json()
            })
            .then(function(jsonResponse){
                if(jsonResponse.succes=true){
                    document.getElementById('login-checked').innerText = jsonResponse.msg;
                }else{
                    throw jsonResponse;
                }
            })
            .catch(function(error){
                document.getElementById('login-checked').innerText = jsonResponse.msg;
            })       
    }
});

button2.addEventListener('click', function(){
    document.getElementById('overlay').style.display = 'none';
    mailChecked.innerText = '';
    passChecked.innerText = '';
    document.getElementById('login-checked').innerText = '';
});
