<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show you Omikuji</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

</head>
<body>
	<div class = "container mt-5">
		<div class = "row">
			<div class = "col-6 offset-3 bg-{blue}">
				<h1>Here's Your Omikuji</h1>
				
				<h1 class= "mt-5">  In ${luckynumber} years, you will live in ${city} with ${person } as your room-mate,
						selling ${profession } for a living.  The next time your see a ${livingThing }, you will have good luck.
						Also, ${niceToSomeone }.
				</h1>
			</div>
		</div>
	</div>


<script type="text/javascript" src="/js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>