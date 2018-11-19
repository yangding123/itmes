<?php
	header("Access-Control-Allow-Origin:http://localhost:2333");
	mysql_connect("localhost:3306", "root", "");
	//选择数据库
	mysql_select_db("1807");
	//设置编码
	mysql_query("set charset 'utf8'");
	mysql_query("set character set 'utf8'");

	//获取前端传递过来的数据拼接sql
	$username = $_POST["u_phone"];
//	$email = $_POST["email"];
//	$qq = $_POST["qq"];
	$password = $_POST["u_pwd"];

	$sql = "insert into users (name,password) values ('$username','$password')";
	//echo $sql;

	$isSuc = mysql_query($sql);
//echo $isSuc;
	if ($isSuc) {
		echo '{"code" : 1}';
	}else{
		echo '{"code" : 0}';
	}

	mysql_close();
//	$row = mysql_fetch_array($res);
//	
//
//
//    if($row){
//    	echo '{"code": 1}';
//    }else{
//    	echo '{"code": 0}';
//    }


	
?>