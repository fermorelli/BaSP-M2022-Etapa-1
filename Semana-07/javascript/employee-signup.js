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

var numbers = '0123456789';
var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

//NAME VALIDATION

nameForm.addEventListener('blur', function(){
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
        alertName.innerText = 'Field is required';
    }else{
        nameForm.classList.add('negation');
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
    var surnameValue = surname.value;
    var justNumbers = true;
    var justLetters = true;

    surnameValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (!justNumbers && justLetters && surnameValue.length > 3){
        surname.classList.add('validation');
    }else if(surnameValue.length == 0){
        surname.classList.add('negation');
        alertSurname.innerText = 'Field is required';
    }else{
        surname.classList.add('negation');
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
    var dniValue = dni.value;
    var justNumbers = true;
    var justLetters = true;

    dniValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && dniValue.length > 7){
        dni.classList.add('validation');
    }else if(dniValue.length == 0){
        dni.classList.add('negation');
        alertDni.innerText = 'Field is required';
    }else{
        dni.classList.add('negation');
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
    var month = dobValue.substring(0,2);
    var day = dobValue.substring(3,5);
    var year = dobValue.substring(6,10);

    if(dobValue.length !== 10 || dobValue.substring(2,3) !== '/' || dobValue.substring(5,6) !== '/' || day <= 00
    || day > 31 || month <= 00 || month > 12 || year < 1910 || year > 2004){
        dob.classList.add('negation');
        alertDob.innerText = 'You must enter a valid date format';
    }else if(month==02 && day > 28){
        dob.classList.add('negation');
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
    var phoneValue = phone.value;
    var justNumbers = true;
    var justLetters = true;

    phoneValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && phoneValue.length == 10){
        phone.classList.add('validation');
    }else if(phoneValue.length <= 0){
        phone.classList.add('negation');
        alertPhone.innerText = 'Field is required';
    }else{
        phone.classList.add('negation');
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
    var letterS = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var adressValue = adress.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    adressValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letterS.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && !justNumbers && !justLetters && adressValue.length >= 5 && adressValue.indexOf(' ') != -1){
        adress.classList.add('validation');
    }else if(adressValue.length == 0){
        adress.classList.add('negation');
        alertAdress.innerText = 'Field is required';
    }else{
        adress.classList.add('negation');
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
    }else if(cityValue.length == 0){
        city.classList.add('negation');
        alertCity.innerText = 'Field is required';
    }else{
        city.classList.add('negation');
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
    var zipCodeValue = zipCode.value;
    var justNumbers = true;
    var justLetters = true;

    zipCodeValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (justNumbers && !justLetters && zipCodeValue.length>=4 && zipCodeValue.length<=5){
        zipCode.classList.add('validation');
    }else if(zipCodeValue.length <= 0){
        zipCode.classList.add('negation');
        alertZipCode.innerText = 'Field is required';
    }else{
        zipCode.classList.add('negation');
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
    }else if(mailInput.length == 0){
        mail.classList.add('negation');
        alertMail.innerText = 'Field is required';
    }else{
        mail.classList.remove('validation');
        mail.classList.add('negation');
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
    }else if(passValue.length <= 0){
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

//REPEAT PASSWORD VALIDATION

rePassword.addEventListener('blur', function(){
    var passValue = password.value;
    var rePassValue = rePassword.value;
    var isAlphanumeric = true;
    var justNumbers = true;
    var justLetters = true;

    rePassValue.split('').forEach(function(letter){
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) justNumbers = false;
        if (letters.indexOf(letter) == -1) justLetters = false;
    });
    if (isAlphanumeric && !justNumbers && !justLetters && rePassValue.length >= 8 && rePassValue === passValue){
        rePassword.classList.add('validation');
    }else if(rePassValue.length == 0){
        rePassword.classList.add('negation');
        alertRePass.innerText = 'Field is required';
    }else if(rePassValue != passValue){
        rePassword.classList.add('negation');
        alertRePass.innerText = 'Password do not match';
    }else{
        rePassword.classList.add('negation');
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
    var isOk = 0; 

    document.getElementById('overlay').style.display = 'block';

    if(nameValue.length == 0 && surnameValue.length == 0 && dniValue.length == 0 && dobValue.length == 0
        && phoneValue.length == 0 && adressValue.length == 0 && cityValue.length == 0 && zipCodeValue.length == 0
        && mailValue.length == 0 && passValue.length == 0 && rePassValue.length == 0){
            nameChecked.innerText = 'Fields are empty';
    };

    if(nameForm.classList.contains('validation')){
        isOk += 1;
    }else if(nameForm.classList.contains('negation')){
        nameChecked.innerText = 'Name: Incorrect name format';
    };

    if(surname.classList.contains('validation')){
        isOk += 1;
    }else if(surname.classList.contains('negation')){
        surnameChecked.innerText = 'Surname: Incorrect surname format';
    };

    if(dni.classList.contains('validation')){
        isOk += 1;
    }else if(dni.classList.contains('negation')){
        dniChecked.innerText = 'DNI: Incorrect DNI format';
    };

    if(dob.classList.contains('validation')){
        isOk += 1;
    }else if(dob.classList.contains('negation')){
        dobChecked.innerText = 'Date of birth: Incorrect date format';
    };

    if(phone.classList.contains('validation')){
        isOk += 1;
    }else if(phone.classList.contains('negation')){
        phoneChecked.innerText = 'Phone: Incorrect phone format';
    };

    if(adress.classList.contains('validation')){
        isOk += 1;
    }else if(adress.classList.contains('negation')){
        adressChecked.innerText = 'Adress: Incorrect adress format';
    };

    if(city.classList.contains('validation')){
        isOk += 1;
    }else if(city.classList.contains('negation')){
        cityChecked.innerText = 'City: Incorrect city format';
    };

    if(zipCode.classList.contains('validation')){
        isOk += 1;
    }else if(zipCode.classList.contains('negation')){
        zipCodeChecked.innerText = 'Zip code: Incorrect zip code format';
    };

    if(mail.classList.contains('validation')){
        isOk += 1;
    }else if(mail.classList.contains('negation')){
        mailChecked.innerText = 'Mail: Incorrect mail format';
    };

    if(password.classList.contains('validation')){
        isOk += 1;
    }else if(password.classList.contains('negation')){
        passChecked.innerText = 'Password: Incorrect password format';
    };

    if(rePassword.classList.contains('validation')){
        isOk += 1;
    }else if(rePassword.classList.contains('negation')){
        rePassChecked.innerText = 'Repeat password: Incorrect password format';
    };

    if(isOk==11){
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

        url += '?name=' + nameForm.value + '&lastName=' + surname.value + '&dni=' + dni.value + '&dob=' + dob.value + '&phone=' + phone.value + '&address=' + adress.value + '&city=' + city.value + '&zip=' + zipCode.value + '&email=' + mail.value + '&password=' + password.value;

        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                console.log(jsonResponse);
                document.getElementById('signup-checked').innerText = jsonResponse.msg;
                var newUser = {
                    Name: jsonResponse.data.name,
                    LastName: jsonResponse.data.lastName,
                    Dni: jsonResponse.data.dni,
                    Dob: jsonResponse.data.dob,
                    Phone: jsonResponse.data.phone,
                    Address: jsonResponse.data.address,
                    City: jsonResponse.data.city,
                    ZipCode: jsonResponse.data.zip,
                    Mail: jsonResponse.data.email,
                    Password: jsonResponse.data.password,
                }
                var newUserJson = JSON.stringify(newUser);
                localStorage.setItem('user:', newUserJson);

                nameChecked.innerText = 'Name: ' + newUser.Name;
                surnameChecked.innerText = 'Last name: ' + newUser.LastName;
                dniChecked.innerText = 'DNI: ' + newUser.Dni;
                dobChecked.innerText = 'Date of birth: ' + newUser.Dob;
                phoneChecked.innerText = 'Phone: ' + newUser.Phone;
                adressChecked.innerText = 'Address: ' + newUser.Address;
                cityChecked.innerText = 'City: ' + newUser.City;
                zipCodeChecked.innerText = 'Zip: ' + newUser.ZipCode;
                mailChecked.innerText = 'Mail: ' + newUser.Mail;
                passChecked.innerText = 'Password: ' + newUser.Password;
            })
    }else{
        document.getElementById('signup-checked').innerText = 'Can not create new user';
    }
});

button2.addEventListener('click', function(){
    document.getElementById('overlay').style.display = 'none';
});

window.onload = function(){
    console.log('aparezco')
    if(localStorage.length > 0){
        var newUserOnLoad = JSON.parse(localStorage.getItem('user:'));
        console.log(newUserOnLoad);
        nameForm.value = newUserOnLoad.Name;
        surname.value = newUserOnLoad.LastName;
        dni.value = newUserOnLoad.Dni;
        dob.value = newUserOnLoad.Dob;
        phone.value = newUserOnLoad.Phone;
        adress.value = newUserOnLoad.Address;
        city.value = newUserOnLoad.City;
        zipCode.value = newUserOnLoad.ZipCode;
        mail.value = newUserOnLoad.Mail;
        password.value = newUserOnLoad.Password;
        rePassword.value = newUserOnLoad.Password;
    }
};