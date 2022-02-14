<!-- Tag Library JSP -->

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" type="text/css" href="/css/style.css">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- // js, bootstrap link at end of body -->
<script type="text/javascript" src="/js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<!-- Inserting a for loop into your jsp -->
    <% for(int i = 0; i < 5; i++) { %>
        <h1><%= i %></h1>
    <% } %>

<!-- Insert Date -->
    <%= new Date() %>

<!-- JSTL make sure you have Tab Library -->
<!-- C:out to insert values to display in body of HTML -->
    h1>Two plus two is: <h1>
    <h2><c:out value="${2+2}"/></h2>

    <!-- C:out tag to pull information from the controller -->
    <h2><c:out value="${fruit}"/></h2>

    <!-- Route in controller looks like this -->
    <!-- "fruit" is the key and banana is the value given -->
        @RequestMapping("/")
        public String index(Model model){
            model.addAttribute("fruit","banana" );
            return "index.jsp";
        }

    <!-- For loop using <c:forEach> </c:forEach> surronds the <p><c:out><c:out></p> -->
        <c:forEach var="oneDojo" items="${dojosFromMyController}">
            <p><c:out value="${oneDojo}"></c:out></p>
        </c:forEach>

        <!-- Controller   -->
        <!-- substantiate ArrayList of String Object naming it dojos -->
        <!-- use dojo.add(""); to put items in array-->
        <!-- model.addAttribute("name to use in in JSP", ArrayList Name) -->
        @RequestMapping("/dojos")
        public String index(Model model) {
            ArrayList<String> dojos = new ArrayList<String>;
            dojos.add("Burbank");
            dojos.add("Chicago");
            dojos.add("Bellevue");
            model.addAttribute("dojosFromMyController", dojos);
            return "index.jsp";
        }