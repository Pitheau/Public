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
<title>Save Travels</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>
	<div class = "container mt-3">
		<h1>Expenses</h1>
		
		<table class = "table">
			<thead>
				<tr>
					<td> Expense </td>
					<td> Vendor </td>
					<td> Amount </td>
					<td> Description </td>
					<td> Edit </td>
					<td> Delete </td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var = "expense" items="${expenses }">
					<tr>
						<td>${expense.name }</td>
						<td>${expense.vendor }</td>
						<td>${expense.amount }</td>
						<td>${expense.description }</td>
						<td><a href ="/expense/${expense.id}/edit">edit</a></td>
						<td>
							<form action="/expense/${expense.id}" method="post">
    							<input type="hidden" name="_method" value="delete">
    							<input type="submit" value="Delete">
							</form>
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<div class = " mt-5">
			<h1>Create an expense</h1>
			
			<form:form action="/expense/new" method="POST" modelAttribute="expense">
			    <p>
			        <form:label path="name">Expense Name</form:label>
			        <form:errors path="name"/>
			        <form:input type = "text" path="name"/>
			    </p>
			    <p>
			        <form:label path="vendor">Vendor</form:label>
			        <form:errors path="vendor"/>
			        <form:input type= "text" path="vendor"/>
			    </p>
			    <p>
			        <form:label path="amount">Amount</form:label>
			        <form:errors path="amount"/>
			        <form:input type = "number" path="amount"/>
			    </p>
			    <p>
			        <form:label path="description">Description</form:label>
			        <form:errors path="description"/>     
			        <form:input path="description"/>
			    </p>    
			    <input type="submit" value="Submit"/>
			</form:form>  
		</div>
	</div>   
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>