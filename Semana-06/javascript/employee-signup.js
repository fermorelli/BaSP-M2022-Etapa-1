var nameForm = document.querySelector('#name');
var alertName = document.querySelector('.name-alert')
var nameChecked = document.getElementById('name-checked');

var surname = document.querySelector('#surname');
var alertSurname = document.querySelector('.surname-alert');
var surnameChecked = document.getElementById('surname-checked')

var dni = document.querySelector('#dni');
var alertDni = document.querySelector('.dni-alert');
var dniChecked = document.getElementById('dni-checked')

var dob = document.querySelector('#dob');
var alertDob = document.querySelector('.dob-alert');
var dobChecked = document.getElementById('dob-checked')

var phone = document.querySelector('#phone');
var alertPhone = document.querySelector('.phone-alert');
var phoneChecked = document.getElementById('phone-checked')

var adress = document.querySelector('#adress');
var alertAdress = document.querySelector('.adress-alert');
var adressChecked = document.getElementById('adress-checked')

var city = document.querySelector('#city');
var alertCity = document.querySelector('.city-alert');
var cityChecked = document.getElementById('city-checked')

var zipCode = document.querySelector('#zip-code');
var alertZipCode = document.querySelector('.zip-code-alert');
var zipCodeChecked = document.getElementById('zip-code-checked')

var mail = document.querySelector('#mail');
var alertMail = document.querySelector('.mail-alert');
var mailChecked = document.getElementById('mail-checked');

var password = document.querySelector('#password');
var alertPass = document.querySelector('.password-alert');
var passChecked = document.getElementById('pass-checked');

var rePassword = document.querySelector('#re-password');
var alertRePass = document.querySelector('.re-password-alert');
var rePassChecked = document.getElementById('re-pass-checked')

var button = document.getElementById('su-button');
var button2 = document.getElementById('button-7');

//NAME VALIDATION

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

//SURNAME VALIDATION

surname.addEventListener('blur', function(){
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var surnameValue = surname.value;
    var justNumbers = true;
    var justLetters = true;

    surnameValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (!justNumbers && justLetters && surnameValue.length > 3){
        surname.classList.add('validation');
    }else{
        surname.classList.add('negation');
        alertSurname.style.color = 'red';
        alertSurname.innerText = 'You must enter a valid surname format';
    }
});

surname.addEventListener('focus', function(){
    surname.classList.remove('negation');
    surname.classList.remove('validation');
    alertSurname.innerText = '';
});

//DNI VALIDATION

dni.addEventListener('blur', function(){
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var dniValue = dni.value;
    var justNumbers = true;
    var justLetters = true;

    dniValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && dniValue.length > 7){
        dni.classList.add('validation');
    }else{
        dni.classList.add('negation');
        alertDni.style.color = 'red';
        alertDni.innerText = 'You must enter a valid dni format';
    }
});

dni.addEventListener('focus', function(){
    dni.classList.remove('negation');
    dni.classList.remove('validation');
    alertDni.innerText = '';
});


//DOB VALIDATION

dob.addEventListener('blur', function(){
    var dobValue = dob.value;
    var day = dobValue.substring(0,2);
    var month = dobValue.substring(3,5);
    var year = dobValue.substring(6,10);

    if(dobValue.length !== 10 || dobValue.substring(2,3) !== '/' || dobValue.substring(5,6) !== '/' || day <= 00 || day > 31 || month <= 00 || month > 12 || year < 1910 || year > 2004){
        dob.classList.add('negation');
        alertDob.style.color = 'red';
        alertDob.innerText = 'You must enter a valid date format';
    }else{
        dob.classList.add('validation');
    }
});

dob.addEventListener('focus', function(){
    dob.classList.remove('negation');
    dob.classList.remove('validation');
    alertDob.innerText = '';
});

//PHONE VALIDATION

phone.addEventListener('blur', function(){
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var phoneValue = phone.value;
    var justNumbers = true;
    var justLetters = true;

    phoneValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && phoneValue.length == 10){
        phone.classList.add('validation');
    }else{
        phone.classList.add('negation');
        alertPhone.style.color = 'red';
        alertPhone.innerText = 'You must enter a valid phone number';
    }
});

phone.addEventListener('focus', function(){
    phone.classList.remove('negation');
    phone.classList.remove('validation');
    alertPhone.innerText = '';
});

//ADRESS VALIDATION

adress.addEventListener('blur', function(){
    var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var adressValue = adress.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    adressValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && !justNumbers && !justLetters && adressValue.length >= 5 && adressValue.indexOf(' ') != -1){
        adress.classList.add('validation');
    }else{
        adress.classList.add('negation');
        alertAdress.style.color = 'red';
        alertAdress.innerText = 'You must enter a valid adress';
    }
});

adress.addEventListener('focus', function(){
    adress.classList.remove('negation');
    adress.classList.remove('validation');
    alertAdress.innerText = '';
});

//CITY VALIDATION

city.addEventListener('blur', function(){
    var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var cityValue = city.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    cityValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && (!justNumbers || justLetters) && cityValue.length > 3){
        city.classList.add('validation');
    }else{
        city.classList.add('negation');
        alertCity.style.color = 'red';
        alertCity.innerText = 'You must enter a valid city format';
    }
});

city.addEventListener('focus', function(){
    city.classList.remove('negation');
    city.classList.remove('validation');
    alertCity.innerText = '';
});

//ZIP CODE VALIDATION


zipCode.addEventListener('blur', function(){
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var zipCodeValue = zipCode.value;
    var justNumbers = true;
    var justLetters = true;

    zipCodeValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && zipCodeValue.length>=4 && zipCodeValue.length<=5){
        zipCode.classList.add('validation');
    }else{
        zipCode.classList.add('negation');
        alertZipCode.style.color = 'red';
        alertZipCode.innerText = 'You must enter a valid zip code number';
    }
});

zipCode.addEventListener('focus', function(){
    zipCode.classList.remove('negation');
    zipCode.classList.remove('validation');
    alertZipCode.innerText = '';
});

// MAIL VALIDATION

mail.addEventListener('blur', function(){
    var mailInput = mail.value;
    var mailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(mailInput.match(mailRegEx)){
        mail.classList.add('validation');
    } else{
        mail.classList.remove('validation');
        mail.classList.add('negation');
        alertMail.style.color = 'red';
        alertMail.innerText = 'You must enter a valid email format'
    }
});

mail.addEventListener('focus', function(){
    mail.classList.remove('negation');
    mail.classList.remove('validation');
    alertMail.innerText = '';
});

//PASSWORD VALIDATION

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
    if (isAlphanumeric && !justNumbers && !justLetters && passValue.length >= 8){
        password.classList.add('validation');
    }else{
        password.classList.add('negation');
        alertPass.style.color = 'red';
        alertPass.innerText = 'You must enter a valid password format';
    }
});

password.addEventListener('focus', function(){
    password.classList.remove('negation');
    password.classList.remove('validation');
    alertPass.innerText = '';
});

//REPEAT PASSWORD VALIDATION

rePassword.addEventListener('blur', function(){
    var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var rePassValue = rePassword.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    rePassValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && !justNumbers && !justLetters && rePassValue.length >= 8){
        rePassword.classList.add('validation');
    }else{
        rePassword.classList.add('negation');
        alertRePass.style.color = 'red';
        alertRePass.innerText = 'You must enter a valid password format';
    }
});

rePassword.addEventListener('focus', function(){
    rePassword.classList.remove('negation');
    rePassword.classList.remove('validation');
    alertRePass.innerText = '';
});

//MODAL CODE

button.addEventListener('click', function(){
    var nameValue = nameForm.value;
    var surnameValue = surname.value;
    var dniValue = dni.value;
    var dobValue = dob.value;
    var phoneValue = phone.value;
    var adressValue = adress.value;
    var cityValue = city.value;
    var zipCodeValue = zipCode.value;
    var mailValue = mail.value;
    var passValue = password.value;
    var rePassValue = rePassword.value;

    document.getElementById('overlay').style.display = 'block';

    if(nameForm.classList.contains('validation')){
        nameChecked.innerText = 'Name: ' + nameValue;
    }else if(nameForm.classList.contains('negation')){
        nameChecked.innerText = 'Name: Incorrect name format';
    };

    if(surname.classList.contains('validation')){
        surnameChecked.innerText = 'Surname: ' + surnameValue;
    }else if(surname.classList.contains('negation')){
        surnameChecked.innerText = 'Surname: Incorrect surname format';
    };

    if(dni.classList.contains('validation')){
        dniChecked.innerText = 'DNI: ' + dniValue;
    }else if(dni.classList.contains('negation')){
        dniChecked.innerText = 'DNI: Incorrect DNI format';
    };

    if(dob.classList.contains('validation')){
        dobChecked.innerText = 'Date of birth: ' + dobValue;
    }else if(dob.classList.contains('negation')){
        dobChecked.innerText = 'Date of birth: Incorrect date format';
    };

    if(phone.classList.contains('validation')){
        phoneChecked.innerText = 'Phone: ' + phoneValue;
    }else if(phone.classList.contains('negation')){
        phoneChecked.innerText = 'Phone: Incorrect phone format';
    };

    if(adress.classList.contains('validation')){
        adressChecked.innerText = 'Adress: ' + adressValue;
    }else if(adress.classList.contains('negation')){
        adressChecked.innerText = 'Adress: Incorrect adress format';
    };

    if(city.classList.contains('validation')){
        cityChecked.innerText = 'City: ' + cityValue;
    }else if(city.classList.contains('negation')){
        cityChecked.innerText = 'City: Incorrect city format';
    };

    if(zipCode.classList.contains('validation')){
        zipCodeChecked.innerText = 'Zip code: ' + zipCodeValue;
    }else if(zipCode.classList.contains('negation')){
        zipCodeChecked.innerText = 'Zip code: Incorrect zip code format';
    };

    if(mail.classList.contains('validation')){
        mailChecked.innerText = 'Mail: ' + mailValue;
    }else if(mail.classList.contains('negation')){
        mailChecked.innerText = 'Mail: Incorrect mail format';
    };

    if(password.classList.contains('validation')){
        passChecked.innerText = 'Password: ' + passValue;
    }else if(password.classList.contains('negation')){
        passChecked.innerText = 'Password: Incorrect password format';
    };

    if(rePassword.classList.contains('validation')){
        rePassChecked.innerText = 'Repeat password: ' + rePassValue;
    }else if(rePassword.classList.contains('negation')){
        rePassChecked.innerText = 'Repeat password: Incorrect password format';
    };
});

button2.addEventListener('click', function(){
    document.getElementById('overlay').style.display = 'none';
});