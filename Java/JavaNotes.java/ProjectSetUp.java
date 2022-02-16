// 
//  Set_up:  New/Spring Starter Project
//     Name: "Project Name""
//     Type: Maven
//     Packaging: War
//     Java Version: 8
//     Despription: "description of project"
//     Group: "com.conradpitheau."Project Name"
//     Package: "com.conradpitheau."Project Name"

//  Next screen: New Spring Starter Project Dependencies
//     Select:
//      Spring Web
//      Spring Boot DevTools
//      JPA
//      MySQL

//  Add dependencies in pom.xml
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mindrot</groupId>
            <artifactId>jbcrypt</artifactId>
            <version>0.4</version>
        </dependency>
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>webjars-locator</artifactId>
            <version>0.30</version>
        </dependency>
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>bootstrap</artifactId>
            <version>5.0.1</version>
        </dependency>
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>3.6.0</version>
        </dependency>



//  In src/main/resources/applications.properties add:
spring.mvc.view.prefix=/WEB-INF/
spring.datasource.url=jdbc:mysql://localhost:3306/<<YOUR_SCHEMA>>?serverTimezone=UTC
spring.datasource.username=<<root>>
spring.datasource.password=<<CPAPitheau70$>>
spring.jpa.hibernate.ddl-auto=update
//  In src-main
//      create a webapp file if not present.
//          create a "WEB-INF" folder inside webapp. This will house the jsp files
//              create the jsp files you need for webpages here like index.jsp

//  JSTL Tag Library
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

//  Add css and js files
//      in src/main/resources/static,  
//          Create a css folder with a style.css file
//          Create a js folder with a app.js file
// css and bootsrtap link under title
<link rel="stylesheet" type="text/css" href="/css/style.css">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

// js, bootstrap link at end of body
<script type="text/javascript" src="/js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

//  Create Controller Folder in src/main/java/com.conradpitheau."Project Name"
        // right click, new package,  name = com.conradpitheau."Project Name".controller

        // Create controller for each page. Command + shift + o to import into page
            // @RestController for everything but website(json, strint etc..)
            // @Controller for website
