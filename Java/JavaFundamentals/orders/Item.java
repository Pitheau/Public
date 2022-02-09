public class Item{

    private String name;
    private double price;
    

    //CONSTRUCTOR
    public Item(){
    }

    public Item (String name, double price){
        this.name = name;
        this.price = price;
    }


    //METHODS


    //Getter
    public String getName(){
        return this.name;
    }
    public double getPrice(){
        return this.price;
    }

    //Setter
    public void setName(String name){
        this.name = name;
    }
    public void setPrice(double price){
        this.price = price;
    }

    

}