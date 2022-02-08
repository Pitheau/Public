import java.util.ArrayList;

public class TestOrders{
    public static void main(String[] args) {

        Item item1 = new Item();
        item1.name = "mocha";
        item1.price = 4.50;

        Item item2 = new Item();
        item2.name = "latte";
        item2.price = 5.50;

        Item item3 = new Item();
        item3.name = "drip coffee";
        item3.price = 2.50;

        Item item4 = new Item();
        item4.name = "capuccino";
        item4.price = 4.00;

        Order order1 = new Order();
        System.out.println(order1.total);
        order1.name = "Chindhuri";
        
        Order order2 = new Order();
        order2.name = "Jimmy";
        

        Order order3 = new Order();
        order3.name = "Noah";

        Order order4 = new Order();
        order4.name = "Sam";

        order2.items.add(item1);
        order2.total += item1.price;

        order3.items.add(item4);
        order3.total += item4.price;

        order1.ready = true;

        order4.items.add(item2);
        order4.items.add(item2);
        order4.total += (item3.price + item3.price);



        System.out.printf("Name : %s", order1.name);
        System.out.printf("Total : %s", order1.total);
        System.out.printf("Ready : %s", order1.ready);

        System.out.printf("Name : %s", order2.name);
        System.out.printf("Total : %s", order2.total);
        System.out.printf("Ready : %s", order2.ready);

        System.out.printf("Name : %s", order3.name);
        System.out.printf("Total : %s", order3.total);
        System.out.printf("Ready : %s", order3.ready);

        System.out.printf("Name : %s", order4.name);
        System.out.printf("Total : %s", order4.total);
        System.out.printf("Ready : %s", order4.ready);
    }
}