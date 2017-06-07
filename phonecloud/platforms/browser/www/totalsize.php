<?php
ob_start();
session_start();
require('db_connect.php');	// database connect script.

	$username = $_SESSION['UserName'];
	$email = $_SESSION['Email'];
	
define ('UPLOAD_DIR', '/home/alxkrrgn/public_html/UsersFolders/');
$dir = UPLOAD_DIR.$username;
$total = foldersize($dir);
$kilo = number_format($total / 1024, 2) . ' KB';
$mega = number_format($total / 1048576, 2) . ' MB';
$giga = number_format($total / 1073741824, 2) . ' GB';

	if ($total < 5368709120) { $I5GBflag = 1; }
	
	if ($total >= 5368709120) { $IOver5GB = 1; } else { $IOver5GB = 0; }
	
	if ($total >= 5368709120 && $total < 7516192768) { $I7GBflag = 1; } else { $I7GBflag = 0; }
	
	if ($total >= 7516192768 && $total < 26843545600) { $I25GBflag = 1; } else { $I25GBflag = 0; }
	
	if ($total >= 26843545600 && $total < 53687091200) { $I50GBflag = 1; } else { $I50GBflag = 0; }
	
	if ($total >= 53687091200 && $total < 80530636800) { $I75GBflag = 1; } else { $I75GBflag = 0; }
	
	if ($total >= 53687091200) { $IOver50GB = 1; } else { $IOver50GB = 0; }
	
	if ($total >= 80530636800 && $total < 107374182400) { $I100GBflag = 1; } else { $I100GBflag = 0; }
	
	if ($total >= 107374182400) { $IOver100GB = 1; } else { $IOver100GB = 0; }
	
	if ($total >= 107374182400 && $total < 214748364800) { $I200GBflag = 1; } else { $I200GBflag = 0; }
	
	if ($total >= 214748364800 && $total < 536870912000) { $I500GBflag = 1; } else { $I500GBflag = 0; }
	
	if ($total >= 536870912000) { $IOver500GB = 1; } else { $IOver500GB = 0; }

	if ($total >= 536870912000 && $total < 1073741824000) { $I1TBflag = 1; } else { $I1TBflag = 0; }
	
	if ($total >= 1073741824000 && $total < 2147483648000) { $I2TBflag = 1; } else { $I2TBflag = 0; }
	
	if ($total >= 1073741824000) { $IOver1TB = 1; } else { $IOver1TB = 0; }
	
	if ($total >= 2147483648000) { $IOver2TB = 1; } else { $IOver2TB = 0; }
	
	$insertGB = mysql_query("UPDATE UsersProfile SET 5GBflag='$I5GBflag',7GBflag='$I7GBflag',25GBflag='$I25GBflag',
	50GBflag='$I50GBflag',75GBflag='$I75GBflag',100GBflag='$I100GBflag',200GBflag='$I200GBflag',500GBflag='$I500GBflag',
	1TBflag='$I1TBflag',2TBflag='$I2TBflag',Over5GB='$IOver5GB',Over50GB='$IOver50GB',Over100GB='$IOver100GB',
	Over500GB='$IOver500GB',Over1TB='$IOver1TB',Over2TB='$IOver2TB' WHERE Email='$email' AND UserName='$username' ")or die(mysql_error());

$updatesize = mysql_query("UPDATE UsersProfile SET AccSize='$total' WHERE Email='$email' AND UserName='$username'"); 

ob_end_flush();
?>