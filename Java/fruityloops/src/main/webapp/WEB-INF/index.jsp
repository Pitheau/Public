<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<title>Fruit Store</title>
</head>
<body>
	<div class = "container">
		<div class = "row col-6 offset-2">
			<h1>Fruit Store</h1>
		</div>
		<div class = "row col-6 offset-2">
			<table>
				<thead>
					<tr>
						<td> Name <td>
						<td> Price <td>
					<tr>
				<thead>
				<tbody>
					<c:forEach var ="fruit" items="${fruits }">
						<tr>
							<td> ${fruit.getName()} <td>
							<td> ${fruit.getPrice()}<td>
						<tr>
					</c:forEach>
				</tbody>
			</table>
		</div>	
		
		
	</div>

	
	
	
	
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>