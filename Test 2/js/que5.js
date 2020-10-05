var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var namePopup = document.getElementById("namePopup");
var emailPopup = document.getElementById("emailPopup");
var userPhone = document.getElementById("userPhone");
var phonePopup = document.getElementById("phonePopup");
var userMessage = document.getElementById("userMessage");
var messagePopup = document.getElementById("messagePopup");
var usersList;

function addUser() {
    if (userName.value == '') {
        namePopup.style.display = "block";
    } else {
        namePopup.style.display = "none";
    };

    var user =
    {
        name: userName.value,
        userEmail: validEmail,
        userPhone: validPhone,
        userMessage: validMessage
    };
    usersList.push(user);
}

var validEmail;
function emailValidation (anyEmail) {
    var regex1 = /^[\w-\.]+@((gmail|yahoo|microsoft)+\.com)$/
    if (regex1.test(anyEmail) == true) {
        emailPopup.style.display = "none";
        validEmail = anyEmail;
    } else {
        emailPopup.style.display = "block";
        validEmail = anyEmail;
    }
}
userEmail.addEventListener ("keyup", function(){
    emailValidation (userEmail.value)
})

var validPhone;
function phoneValidation (anyPhone) {
    var regex2 = /^(002)?01[0125][0-9]{8}$/
    if (regex2.test(anyPhone) == true) {
        phonePopup.style.display = "none";
        validPhone = anyPhone;
    } else {
        phonePopup.style.display = "block";
        validPhone = anyPhone;
    }
}
userPhone.addEventListener ("keyup", function(){
    phoneValidation (userPhone.value)
});

var validMessage;
function messageValidation (message) {
    letters = 30 - message.length
    console.log(letters);

    if (letters >= 0 && letters <= 30) 
    {
        messagePopup.innerHTML = `${letters} letters remaining`;
        messagePopup.style.display = "block";
    }
    else {
        messagePopup.innerHTML = `finished!`;
        messagePopup.style.display = "block";
    }
    validMessage = message;
};
userMessage.addEventListener ("keyup", function(){
    messageValidation (userMessage.value)
});