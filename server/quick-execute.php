<?php

$method = $_GET['method'];

// Building the shell command
if($_GET['method'] == "execute" && $_GET['shell']){
	$command = $_GET['shell'];
}

else if($_GET['method'] == "open" && $_GET['path'] ){
	$command = "explorer.exe"." ".$_GET['path'];
}

else{
	echo "**************  Execution Failed  *******************";
	exit();
}

$output = shell_exec($command);
echo "Executing:<br/>".$command;

//Script to close new tab
echo "<script>window.close();</script>"; 

?>