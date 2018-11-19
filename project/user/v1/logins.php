<?php
$name = $_GET["name"];
	$password = $_GET["password"];
	//查询数据库，得到资源长度是否大于0
	//echo '{"code": 1, "name": '.$name.', "password": '.$password.'}';
	$arr = array('code' => 1, 'name' => $name, 'password' => $password);
	echo json_encode($arr);
?>