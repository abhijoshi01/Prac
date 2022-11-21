<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experiment-9</title>
<script src="/Exp9.js"> 
</script>
</head>
<body>
<h1 id="head1" onmouseover="changeColor1()" onmouseout="changeColor2()"> 
Experiment-9</h1>
<h2> JavaScript program to change background color of Webpage On mouse over event</h2>
<p>We are using mousever Event to Change the Background Color</p>
</body>
</html>






js------
function changeColor1() {
document.body.style.backgroundColor = "red";
}
function changeColor2() {
document.body.style.backgroundColor = "yellow";
}