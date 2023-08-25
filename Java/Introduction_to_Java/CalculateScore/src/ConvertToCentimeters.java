public class ConvertToCentimeters {

    public static void main(String[] args) {
        int feet = 5, inches = 5;
        System.out.println(feet + " ft " + inches + " \" --> " + convertToCentimeters(feet,inches) + " centimeters");
        System.out.println(convertToCentimeters(84) + " centimeters");
    }

  

    public static double convertToCentimeters(int feet, int inches)
    {
        return convertToCentimeters(((feet * 12) + inches));
    }

  
    
    public static double convertToCentimeters(int inches)
    {
        return (((double)(inches)) * 2.54);
    }



}
