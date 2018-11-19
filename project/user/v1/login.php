<?php
	header("Access-Control-Allow-Origin:http://localhost:2333");
	//连接数据库服务
	mysql_connect("localhost:3306", "root", "");
	//选择数据库
	mysql_select_db("1807");
	//设置编码
	mysql_query("set charset 'utf8'");
	mysql_query("set character set 'utf8'");

	$username = $_POST["uName"];
	$password = $_POST["uPwd"];

	$sql = "select * from users where name='$username' and password='$password'";
	//echo $sql;

	$res = mysql_query($sql);
	
	$row = mysql_fetch_array($res);
	


      if($row){
      	echo '{"code": 1}';
      }else{
      	echo '{"code": 0}';
      }


?>