
public class User {
    protected Integer id;
    protected int pin;
    
    
    //Constructor
    
    public User(Integer id) {
    	this.id = id;
    
    
    // getter and setter
    
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
    
	public Integer getId() {
		return id;
	}
	}
	public void setId(Integer id) {
		this.id = id;
	}
    // TO DO: Getters and setters
	// Implement a constructor that takes an ID
}