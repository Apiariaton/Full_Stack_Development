public class SecondClass {
    public static void main(String[] args)
    {

        System.out.println("Hello, Michael");
        System.out.println("How are you?");
        boolean Red = true;
        if (!Red)
        {
            System.out.println("Object is not red...");
        }
        else {
            System.out.println("Object is red...");
        }
        String John_Personality = "friendly";
        boolean Worth_Spending_Time_With = John_Personality == "friendly" ? true : false;
        System.out.println(Worth_Spending_Time_With);
        String Gregory_Porter = "Alive";
        Gregory_Porter.toLowerCase();
        int alive = Gregory_Porter == "Alive" ? 1 : 0;
        int Alive = alive;
        if (Alive == 1)
        {
            System.out.println("Gregory Porter is alive");
        }
        else
        {
            System.out.println("Nope");
        }
        boolean I_Like_Donuts = true;
        boolean Do_Not_Offer_Me_A_Donut = !I_Like_Donuts;
        System.out.println(Do_Not_Offer_Me_A_Donut);



    }
}
