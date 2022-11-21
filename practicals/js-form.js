<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<script src="/Exp10a.js"></script>
</head>
<body>
<h1>Experiment-10</h1>
<h2>Form Validation Example</h2>
<br>
<h1>Sign Up Form</h1>
<form name="myForm" action="/thankyou.html" onsubmit="return validate()" >
<label for="fname"> First name</label>
<input type="text" id="fname" name="fname" placeholder="Enter First Name" required>
<label for="lname">Last Name</label>
<input type="text" id="lname" name="lname" placeholder="Enter Last Name" >
<br>
<br>
<label for="usremail">Email</label>
<input type="email" id="usremail" name="usremail" placeholder="Enter Email here" >
<label for="usrpassword">Password</label>
<input type="password" id="usrpassword" name="usrpassword" placeholder="Enter Password" >
<br>
<br>
<p>Gender ?</p>
<label for="male"> Male</label>
<input type="radio" id="male" name="option">
<label for="female"> Female </label>
<input type="radio" id="female" name="option">
<p></p>
<label for="usrmobile">Mobile Number</label>
<input type="text" id="usrmobile" name="usrmobile" placeholder="Mobile Number" required>
<p></p>
<input type="submit" name="" id="" value="submit">
</form>
</body>
</html>







js-----
function validate() {
var firstName = document.myForm.fname.value;
var lastName = document.myForm.lname.value;
var userpassword = document.myForm.usrpassword.value;
var usrmobile = document.myForm.usrmobile.value;
console.log(firstName);
console.log(lastName);
console.log(userpassword);
console.log(usrmobile);
if (firstName == null || firstName == "" || firstName.length<3 ) {
alert("First Name can't be blank or Less than 3 Charecter");
document.myForm.fname.focus();
return false;
}
if (lastName == null || lastName == "") {
alert("Last Name can't be blank");
document.myForm.lname.focus();
return false;
}
if (userpassword.length < 6) {
alert("Password must be at least 6 characters long.");
document.myForm.usrpassword.focus();
return false;
}
if (isNaN(usrmobile)) {
alert("Enter Numeric value only");
document.myForm.usrmobile.focus();
return false;
}
return true;
}
