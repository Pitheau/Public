<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hopper's Receipt</title>
</head>
<body>
    <h1>Customer Name: ${ name }</h1>
    <h3> Item name: ${ itemname }</h3>
	<h3>Price: ${ price }</h3>
	<h3> Description: ${ description }</h3>
	<h3> Vendor: ${ vendor }</h3>


</body>
</html>