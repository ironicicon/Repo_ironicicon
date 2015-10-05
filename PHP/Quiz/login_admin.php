<?php
session_start();
if(isset($_POST['formm']))
{
include('dbcon.php');
$Uname=$_POST['Uname'];
$pass=$_POST['Pass'];
$sql="select * from Login_admin where Uname='".$Uname."' and Pass='".$pass."'";
$result=mysql_query($sql);
//echo $sql;
$count=mysql_num_rows($result);
if($count==1)//match found
{
	header('Location: adminPanel.php');
	$_SESSION['AdUname']=$Uname;
}
else
{
	echo "login failed";
}
}
?>
<html>
<head>
<title>Login Page</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://getbootstrap.com/dist/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
<style type="text/css">
body
{
font-family: Calibri;
background-size: 80% 90%;
background-repeat: no-repeat;
background-position:center;
}
#header
{
background-color: white;
top:0px;
left:3%;
width:100%;
height:26%;
font-family: Arial;
border-bottom:1px solid #000;
}
#footer
{
position: absolute;
background-color: white;
top:90%;
left:0 px;
width:100%;
height:10%;
font-family: Arial;
border-top:1px solid #000;
}
#questions
{
border:1px solid #ddd;
}
#odd
{
tr bgcolor: brown;
}
#even
{
tr: white;
}
#box
{
margin-left: 20%;
margin-top: 1%;
width : 80%;
height: 90%;
}
#questImg
{
position: absolute;
top:2%;
right:1%;
}
#req
{
font-family: calibri;
}
</style>
</head>
<body class="container">
<div class="row col-lg-12" style="margin-top:10px;">
<h1 class="page-header" align="left">Leadership Resilience Profile <b>ADMIN</b> Login Page</h1>
</div>
<div class="row">
	<form action="login_admin.php" method="post">
	<div class="col-md-8" style="margin-top:5px;" style="margin-top:5px;">
		<div class="col-md-3" style="text-align:right;">Username</div>
		<div class="col-md-6"><input type="Text" name="Uname" required/></div>
	</div>
	<div class="col-md-8" style="margin-top:5px;" style="margin-top:5px;">
		<div class="col-md-3" style="text-align:right;">Password</div>
		<div class="col-md-6"><input type="Password" name="Pass" required/></div>
	</div>
	<div class="col-md-8" style="margin-top:5px;" style="margin-top:5px;"><div class="col-md-6">
	<button class="btn btn-primary" type="submit" value="">Login</button></div></div>
	<input type="hidden" name="formm" value="true"/>
	</form>
</div>
</body>
</html>

