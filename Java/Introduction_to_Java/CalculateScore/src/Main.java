public class Main {


    public static void main(String[] args) {
        int switchValue = 3;

        switch (switchValue) {
            case 1:
                System.out.println("Value was 1");
                break;
            case 2:
                System.out.println("Value was 2");
                break;
            case 3:
            case 4:
            case 5:
                System.out.println("Value was a 3, 4, 5");
                System.out.println("Value was actually a " + switchValue);
                break;
            default:
                System.out.println("Value is neither 1 nor 2");
                break;
        }

        //Enhanced switch statement - fall through, the execution of code if break statements are not included, does not happen
        switch (switchValue) {
            case 1 -> System.out.println("Value was 1");
            case 2 -> System.out.println("Value was 2");
            case 3, 4, 5 -> {
                System.out.println("Value was a 3, 4, 5");
                System.out.println("Value was actually a " + switchValue);
            }
            default -> System.out.println("Value is neither 1 nor 2");
        }

        String month = "jAnUaRy";
        System.out.println(month.toLowerCase() + " is in the " + getQuarter(month));
        System.out.println(month.toLowerCase() + " is in the " + getSeason(month));
        printDayOfWeek(1);

        getItem(2);

        /*
        if (value == 1)
        {
            System.out.println("Value is 1");
        }
        else if (value == 2)
        {
            System.out.println("Value is 2");
        }
        else {
            System.out.println("Value is 3");
        }

       */
    }

    public static String getQuarter(String month) {
        month = month.toLowerCase();
        switch (month) {
            case "january":
            case "february":
            case "march":
                return "First Quarter";
            case "april":
            case "may":
            case "june":
                return "Second Quarter";
            case "july":
            case "august":
            case "september":
                return "Third Quarter";
            case "october":
            case "november":
            case "december":
                return "Fourth Quarter";
        }
        return "NULL";
    }

    public static String getSeason(String month) {
        month = month.toLowerCase();
        return switch (month) {
            case "december", "january", "february" -> "Winter";

            case "march", "april", "may" -> "Second Quarter";

            case "june", "july", "august" -> "Third Quarter";

            case "september", "october", "november" -> "Fourth Quarter";

            default -> {
                String badResponse = month + " is bad";
                yield badResponse;
            }};
        }

        public static void printDayOfWeek(int day) {
            String dayOfTheWeek = switch (day) {
                case 0 -> "Sunday";
                case 1 -> "Monday";
                case 2 -> "Tuesday";
                case 3 -> "Wednesday";
                case 4 -> "Thursday";
                case 5 -> "Friday";
                case 6 -> "Saturday";
                default -> {
                    yield "No day exists for this number";
                }
            };
            System.out.println("Day: " + day + "Day of the week:" + dayOfTheWeek);
        }


        public static void getItem(int number)
        {
            String myItem = "";
            switch (number) {
                case 0:
                    myItem = "Rock";
                    break;
                case 1:
                    myItem = "Paper";
                    break;
                case 2:
                    myItem = "Scissors";
                    break;
                default:
                    myItem = "Not an item...";
            }

            System.out.println(myItem);
        }






        }








