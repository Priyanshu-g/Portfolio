<?php
	$SelectedId = $_REQUEST['ID'];
	
	$link = mysqli_connect('caffeine', 'pghosh', 'pZGmJM1PtoZ1C9a45sEzICNb');
	if (!$link){
		$output = 'Unable to connect to the database server ';
		echo $output;
	}


	if (!mysqli_set_charset($link, 'utf8')){
		$output = 'Unable to set database connection encoding ';
		echo $output;
	}


	if (!mysqli_select_db($link, 'pghosh')){
		$output = 'Unable to locate the deskassignment database ';
		echo $output;
	}

	$sql = "DELETE FROM orders WHERE ID=". $SelectedId;
	if ($link->query($sql) === TRUE) {
	} else {
		echo "Error: " . $sql . "<br>" . $link->error;
	}
?>