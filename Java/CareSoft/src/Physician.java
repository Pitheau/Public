import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPPACompliantUser {
	
	
//... imports class definition...
	private ArrayList<String> patientNotes;
    
    public Physician(Integer id) {
		super(id);
	}
    public void assignPin() {
    	if(pin <= 9999 && pin>= 1000) {
    		this.pin = pin;
    	}else {
    		System.out.println("Pin must be four numbers.");
    	}
    }
    

	
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		return false;
	}

	//  Setters & Getters

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}


	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
	

}
