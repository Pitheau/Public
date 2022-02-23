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
<title>Show One</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>

	<div class = "container mt-5 ">
		<div class = "row mt-4">
		<div class = "col-8 mt-4">
			<h1><c:out value ="${book.getTitle() }"></c:out></h1>		
		</div>
		<div class = "col-4 mt-4">
			<a href="/show">Back to the shelves </a>	
		</div>
		</div>
		<div class = "row mt-4">
			<div class= "col-8 ">			
				<h4>
					<span class ="text-primary"><c:out value ="${book.getUser().name}" /></span> read 
					<span class="text-success"><c:out value = "${book.getTitle()}"/></span> by 
					<span class="text-info"><c:out value = "${book.getAuthor()}"/></span>
				</h4>
			</div>
			<div>
				<h3 class = "mt-4">Here are <c:out value ="${book.getUser().name }"></c:out>'s thoughts:</h3>
			</div>
			<div class = "row mt-4">
				<hr class=  "mt-4">
					<div class = "mt-4 mb-5">
					<p class ="text-center"> " <c:out value ="${book.thoughts }"></c:out> "<p>
					</div>
				<hr>
			</div>
		</div>
	</div>
		


	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>