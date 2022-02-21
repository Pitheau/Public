<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login and Registration</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>

	<div class = "container mt-5 ">
		<div class = "row">
		<h1 class= "text-primary">Welcome!</h1>
		<h5>Join out growing community.</h5>
		
		</div>
		<div class = "row mt-4">
			<div class= "col-4 ">
			<h3> Registration</h3>
				<form:form action="/register" method="post" modelAttribute="newUser">
				    <p>
				        <label>User Name:</label>
				        <form:errors path="name" class="text-danger"/>
				        <form:input path="name" class ="form-control"/>
				    </p>
				    <p>
				        <label>Email</label>
				        <form:errors path="email" class="text-danger"/>
				        <form:input path="email" class ="form-control"/>
				    </p>
				    <p>
				        <label>Password:</label>
				        <form:errors path="password" class="text-danger"/>
				        <form:password path="password" class ="form-control"/>
				    </p>
				    <p>
				        <label>Confirm PW</label>
				        <form:errors path="confirm" class="text-danger"/>     
				        <form:password path="confirm" class ="form-control"/>
				    </p>    
				    <input type="submit" value="Submit"/>
				</form:form>    
			</div>
			<div class= "col-4">
			<h3> Login</h3>
			<form:form action="/login" method="post" modelAttribute="newLogin">
				    <p>
				        <label>Email</label>
				        <form:errors path="email" class="text-danger"/>
				        <form:input path="email" class ="form-control"/>
				    </p>
				    <p>
				        <label>Password:</label>
				        <form:errors path="password" class="text-danger" />
				        <form:password path="password" class ="form-control"/>
				    </p>
				    <input type="submit" value="Submit"/>
				</form:form>    
			</div>
		
		</div>
	
	</div>


	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>