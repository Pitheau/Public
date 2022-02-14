<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

</head>
<body>
	<div class = "container mt-5">
		<div class = "row">
			<div class = "col-4 offset-4 justify-content-center">
				<h1>Send an Omikuji</h1>
				<form action ="/processform" method = "POST">
						<div><label class = "mt-3"> Pick any number from 5 to 25.</label>					
						<select id = "luckynumber" name ="luckynumber" >
						<%for (int i = 5; i <= 25; i++){ %>
						<option value ="<%= i %>"><%= i %> </option>
						<%} %>
						</select>
					</div>
					<div>
						<label class = "mt-3"> Enter the name of any city.</label>
						<input type = "text" name= "city">					
					</div>
					<div>
						<label class = "mt-3"> Enter the name of any real person.</label>
						<input type = "text" name = "person">
					</div>
					<div>
						<label class = "mt-3" > Enter professional endeavor or hobby:</label>
						<input type = "text" name = "profession">
					</div>
					<div>
						<label class = "mt-3"> Enter any type of living thing.</label>
						<input type = "text" name = "livingThing">
					</div>
					<div>
						<label class = "mt-3"> Say something nice to someone:</label>
						<textarea name = "niceToSomeone" rows = 5 cols = 25></textarea>
					</div>
					
					<p> Send and show a friend<p>
					<button>Send</button>
				 </form>
			</div>
		</div>
	</div>




<script type="text/javascript" src="/js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>