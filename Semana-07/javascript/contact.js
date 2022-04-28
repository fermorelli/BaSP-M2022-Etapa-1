var nameForm = document.getElementById('name');
var alertName = document.querySelector('.name-alert');
var nameChecked = document.getElementById('name-checked');

var mail = document.getElementById('mail');
var alertMail = document.querySelector('.mail-alert');
var mailChecked = document.getElementById('mail-checked');

var textArea = document.getElementById('text-area');
var alertTextArea = document.querySelector('.text-area-alert');
var messageChecked = document.getElementById('message-checked');

var button = document.getElementById('button-3');
var button2 = document.getElementById('button-6');

nameForm.addEventListener('blur', function(){
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var nameValue = nameForm.value;
    var justNumbers = true;
    var justLetters = true;

    nameValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    
    if (!justNumbers && justLetters && nameValue.length > 3){
        nameForm.classList.add('validation');
    }else if(nameValue.length == 0){
        nameForm.classList.add('negation');
        alertName.style.color = 'red';
        alertName.innerText = 'Field is required';
    }else{
        nameForm.classList.add('negation');
        alertName.style.color = 'red';
        alertName.innerText = 'You must enter a valid name format';
    }
});

nameForm.addEventListener('focus', function(){
    nameForm.classList.remove('negation');
    nameForm.classList.remove('validation');
    alertName.innerText = '';
});

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
        alertMail.style.textAlign = 'left';
        alertMail.innerText = 'You must enter a valid email format';
    }
});

mail.addEventListener('focus', function(){
    mail.classList.remove('negation');
    mail.classList.remove('validation');
    alertMail.innerText = '';
});

textArea.addEventListener('blur', function(){
    var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var textAreaValue = textArea.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    textAreaValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && (!justNumbers || !justLetters) && textAreaValue.length >= 3){
        textArea.classList.add('validation');
    }else if(textAreaValue.length == 0){
        textArea.classList.add('negation');
        alertTextArea.style.color = 'red';
        alertTextArea.innerText = 'Field is required';
    }else{
        textArea.classList.add('negation');
        alertTextArea.style.color = 'red';
        alertTextArea.innerText = 'Message should have at least 3 characters';
    }
});

button.addEventListener('click', function(){
    var nameValue = nameForm.value;
    var mailValue = mail.value;
    var messageValue = textArea.value;

    console.log('hola');
     
    document.getElementById('overlay-1').style.display = 'block';

    if(mailValue.length == 0 && nameValue.length == 0 && messageValue.length == 0){
        mailChecked.innerText = 'Fields are empty';

    }else if(mail.classList.contains('validation')){
        mailChecked.innerText = 'Mail: ' + mailValue;
    }else if(mail.classList.contains('negation')){
        mailChecked.innerText = 'Mail: Incorrect mail format';
    };

    if(nameForm.classList.contains('validation')){
        nameChecked.innerText = 'Name: ' + nameValue;
    }else if(nameForm.classList.contains('negation') && nameValue.length > 0){
        nameChecked.innerText = 'Name: Incorrect name format';
    };
});

button2.addEventListener('click', function(){
    document.getElementById('overlay-1').style.display = 'none';
});