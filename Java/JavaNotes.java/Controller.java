



// Annotation   Mac: Command + shift + o to import all depencencies
@Controller // to server up .jsp
@RestController

@RequestMapping("/greeting") Placed above class will add /greeting to all routes
// Routes inside of the Class
@GetMapping("/"){
    public String home()
    return "home.jsp"
}

    @RequestMapping("/")
    public String hello() {
            return "Hello World!";
    }

@RequestMapping("/greeting")
    public String index(){
      return "Hello user!";
    }
    // you can be explicit about the request as well
    @RequestMapping(value="/greeting/hello", method=RequestMethod.GET)
    public String hello(){
      return "Hello world! What route did you use to access me?";
    }
    @RequestMapping("/greeting/goodbye")
    public String world(){
      return "Goodbye world!";
    }

//  Query Parameters

@RequestMapping("/")
    public String index(@RequestParam(value="q") String searchQuery) {
        return "You searched for: " + searchQuery;
    }


// Path Variables
   @RequestMapping("/m/{track}/{module}/{lesson}")
    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
    }

//  <!-- Controller   -->
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
        // in jsp file
        <!-- For loop using <c:forEach> </c:forEach> surronds the <p><c:out><c:out></p> -->
        <c:forEach var="oneDojo" items="${dojosFromMyController}">
            <p><c:out value="${oneDojo}"></c:out></p>
        </c:forEach>

// <!-- For loop Route in controller looks like this -->
//     <!-- "fruit" is the key and banana is the value given -->
        @RequestMapping("/")
        public String index(Model model){
            model.addAttribute("fruit","banana" );
            return "index.jsp";
        }
          <!-- For loop using <c:forEach> </c:forEach> surronds the <p><c:out><c:out></p> -->
        <c:forEach var="oneDojo" items="${dojosFromMyController}">
            <p><c:out value="${oneDojo}"></c:out></p>
        </c:forEach>

// Using session 
//             Creating upon first going to "index.jsp" still passing data
        public String index(HttpSession session) {
            if(session.getAttribute("count")==null){
                session.setAttribute("count", 1);
        }else{
            Integer tempCount = (Integer) session.getAttribute("count");
            session.setAttribute("count", tempCount + 1 )
        }
            
                return "index.jsp";
	    }

//              Gathering and sending it when going to "showCount.jst"       
        public String showCount(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("count");
		model.addAttribute("countToShow", currentCount);
		return "showCount.jsp";
	}



