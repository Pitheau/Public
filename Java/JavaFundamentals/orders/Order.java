import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();

    //Constructor
    public Order(){
        this.name = "Guest"
        this.ready= false;
    }

    public Order(String name){
        this.name = name;
        this.ready = false;
    }

    // ORDER METHODS


    //GETTER
    public  String getName(){
        return this.name;
    }
    public  boolean getReady(){
        return this.ready
    }
    public ArrayLIst<Items> getItems(){
        return items;
    }

    //SETTER
    public void setName(String name){
        this.name = name;
    }
    public void setReady(boolean ready){
        this.ready = ready;
    }
    public void setItems (ArrayList<Items> items){
        this.items = items;
    }
    public String getStatusMessage(){
        if(this.ready == true) {
            return "Order is ready.";
        }else{
            return " Your order is almost ready.";
        }
    Public double getORderTotal(){
        double total  = 0.0
        for (Item i: this.items){
            total += i.getPrice();
        }
        return total;
    }
    public void display(){
        System.out.println("Customer Name:" + this.name);
        for(Item i: this.items){
            System.out.println(i.getName() + "$" + i.getPrice());
        }
        System.out.println("Total: $" + this.getOrderTotal();)
    }

    }
}