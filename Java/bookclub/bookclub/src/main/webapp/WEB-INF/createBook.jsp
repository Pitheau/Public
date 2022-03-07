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
<title>Create Book</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>
<div class = "container mt-5 ">
		<div class = "row">
		<div class = "col-8">
			<h1 class= "text-primary">Add a Book to Your Shelf</h1>		
		</div>
		<div class = "col-4">
			<a href="/show">Back to the shelves </a>	
		</div>
		</div>
		<div class = "row mt-4">
			<div class= "col-6 ">			
				<form:form action="/book/new" method="post" modelAttribute="book">
					<form:hidden path="user" value="${userId}" />
					<p>
				        <label>Title:</label>
				        <form:errors path="title" class="text-danger"/>
				        <form:input path="title" class ="form-control"/>
				    </p>
				    <p>
				        <label>Author</label>
				        <form:errors path="author" class="text-danger"/>
				        <form:input path="author" class ="form-control"/>
				    </p>
				    <p>
				        <label>Thoughts</label>
				        <form:errors path="thoughts" class="text-danger"/>
				        <form:textarea path="thoughts" class ="form-control"/>
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