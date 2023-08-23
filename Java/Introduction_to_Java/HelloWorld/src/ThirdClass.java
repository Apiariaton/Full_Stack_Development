public class ThirdClass {
    public static void main(String[] args) {
        double FirstVariable = 2d;
        double SecondVariable = 3d;
        double ThirdValue = (((FirstVariable + SecondVariable) * 100d) % 40d);
        System.out.println(ThirdValue);
        System.out.println(FirstVariable);
        System.out.println(SecondVariable);

        boolean RemainderForThirdValue = (ThirdValue == (0d)) ? true : false;
        if (RemainderForThirdValue == true) {
            System.out.println("Remainder is... " + ThirdValue);
        } else {
            System.out.println("No remainder for this expression...");
        }
    }
}
