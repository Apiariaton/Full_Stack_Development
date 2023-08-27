public class Expansion {
    public static void main(String[] args) {

        printPrimeTable(50);


        /*
        for (int i = 0; i < 30; i += (int)(Expansion()))
        {
            if (i % 2 == 0) {
                System.out.println("-");
            }
            if (i % 3 == 0) {
            System.out.println(">");
            }

        }
        */

    }
public static long Expansion()
{
   return Math.round((Math.random() * 3));
}


public static boolean isPrime(int wholeNumber) {

        for (int i = 2; i < wholeNumber;i++)
        {
            if (wholeNumber % i == 0)
            {
                return false;
            }
        }
        return true;
}


public static void printPrimeTable(int maxNumber)
{
    System.out.println("No. | Prime?");
    for (int i = 0; i < maxNumber;i++)
    {
        System.out.println(isPrime(i) ? i + "   Y" : i + "   N");
    }

}


}
