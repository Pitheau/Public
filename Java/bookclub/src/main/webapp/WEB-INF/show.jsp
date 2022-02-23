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
<title>Logged-in User</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>
	<div class = "container mt-5 ">
		<div class = "row">
				<div class = "col-8">
					<h1 class= "text-primary">Welcome, <c:out value ="${user.name}"></c:out> </h1>
					<h5> Books from everyone's shelves:</h5>
				</div>
				<div class = "col-4">
					<div>
						<a href="/logout">Logout</a>
					</div>
					<div>
						<a href="/book/new"> + Add a book to my shelf!</a>
					</div>
				</div>
			</div>
			<div class = "row mt-5">
			<table class ="table table-striped">
				<thead>
				        <tr>
				            <th>ID</th>
				            <th>Title</th>
				            <th>Author</th>
				            <th>Posted By</th>
				        </tr>
				 </thead>
				 <tbody>
				     <c:forEach var="book" items="${books }">
			         	<tr>
			         		<td><c:out value = "${book.id }"></c:out></td>
			         		<td><a href="/book/${book.id}"> <c:out value ="${book.title}"/></a></td>
			         		<td><c:out value = "${book.author}"></c:out></td>
			         		<td><c:out value = "${book.getUser().name}"></c:out></td>
			      		</tr>
			         </c:forEach>
			  	</tbody>
			  </table>		
		</div>
	</div>
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>