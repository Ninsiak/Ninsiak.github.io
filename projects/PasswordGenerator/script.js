function generatePassword() {
    var length = document.getElementById("minPass").value;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    if (length < 6) {
    	alert("Minimum password length are 6 characters");
    } else if (length > 32 ) {
    	alert("Maximum password length are 32 characters");
    } else{
    	return retVal;
    }    
}

$("#btnGen").click(function(){
    myForm.password.value = generatePassword();
});