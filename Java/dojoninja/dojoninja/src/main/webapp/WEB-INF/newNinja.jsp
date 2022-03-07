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
<title>New Ninja</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>

	<div class = "container mt-5 ">
	
		<h1> Create a New Ninja</h1>
	
		<div class ="row mt-5">
			<form:form action="/ninja/new/{dojo.id}" method ="POST" modelAttribute="ninja">
				<div class ="col-form-label-lg">
					<form:label path="dojo"> Dojo:</form:label>
			        <form:select path="dojo">
			        	<c:forEach var="dojo" items="${dojos }">
			        		<option value = "${dojo.id }">${dojo.name}</option>
			        	</c:forEach>
			        </form:select>
		    	</div>
				<div  class ="col-form-label-lg">
			        <form:label path="firstName"> First Name:</form:label>
			        <form:errors path="firstName"/>
			        <form:input path="firstName"/>
		    	</div>
		    	<div class = "col-form-label-lg">
			        <form:label path="lastName">Last Name:</form:label>
			        <form:errors path="lastName"/>
			        <form:input path="lastName"/>
		    	</div>
		    	<div class = "col-form-label-lg">
			        <form:label path="age">Age:</form:label>
			        <form:errors path="age" type="number"/>
			        <form:input path="age"/>
		    	</div>
		    <button class="btn btn-primary">Create</button>
			</form:form>
		</div>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>