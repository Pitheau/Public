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
//      bcyrpt

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
spring.datasource.url=jdbc:mysql://localhost:3306/<<YOUR_SCHEMA>>
spring.datasource.username=root
spring.datasource.password=CPAPitheau70$
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.mvc.hiddenmethod.filter.enabled=true
//  In src-main
//      create a webapp file if not present.
//          create a "WEB-INF" folder inside of webapp. This will house the jsp files
//              create the jsp files you need for webpages here like index.jsp



//  Create Controller Folder in src/main/java/com.conradpitheau."Project Name"
        // right click, new package,  name = com.conradpitheau."Project Name".controller

        // Create controller for each page. Command + shift + o to import into page
            // @RestController for everything but website(json, strint etc..)
            // @Controller for website




// Create Repositories.  In project src/main/java/ create a repositories package. 
//In that package create an interface called<<Project>>repository and extend it to includ CrudRepository<"Name of class", Long>
// example below is for a Book project with Book as the class
@Repository
public interface BookRepository extends CrudRepository<Book, Long>{
    // this method retrieves all the books from the database
    List<Book> findAll();
    // this method finds books with descriptions containing the search string
    List<Book> findByDescriptionContaining(String search);
    // this method counts how many titles contain a certain string
    Long countByTitleContaining(String search);
    // this method deletes a book that starts with a specific title
    Long deleteByTitleStartingWith(String search);
}

// Create Services.  In project src/main/java/ create a services package. 
//  In that package create a Class <ProjectnameService> and insert below.
// Below if for a Book project
@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }

// Create Models.  In project src/main/java/ create a models package. 
//  In that package create a Class.
// Below is for a Book project REMBER GETTERS and SETTERS!!!!!!
@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 5, max = 200)
    private String title;
    @NotNull
    @Size(min = 5, max = 200)
    private String description;
    @NotNull
    @Size(min = 3, max = 40)
    private String language;
    @NotNull
    @Min(100)
    private Integer numberOfPages;
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    public Book() {
    }
    public Book(String title, String desc, String lang, int pages) {
        this.title = title;
        this.description = desc;
        this.language = lang;
        this.numberOfPages = pages;
    }
    
    // other getters and setters removed for brevity
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

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