import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name, String dayPeriod) {
        return String.format(" Hello %s, %s. Lovly to have you here.", dayPeriod, name);
    }
    
    public String dateAnnouncement() {
        return String.format(" Is is currently %s", new Date());
    }
    
    public String respondBeforeAlexis(String phrase) {
        if(phrase.indexOf("Alexis") > -1){
            return "Shes's incompete. Let me help";
        }
        if(phrase.indexOf("Alfred") > -1){
            return " How may I help";
        }
        return "That is a night for me.";
    }
    
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

