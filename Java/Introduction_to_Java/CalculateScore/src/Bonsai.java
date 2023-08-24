public class Bonsai {
    public static void main(String[] args)
    {
        long number_of_bonsai = 5;
        String year = "2023";
        double lowest_temperature = 3d;
        number_of_bonsai += weather(year,12.00,34.00,lowest_temperature);
        if (number_of_bonsai > 0)
        {
            System.out.println("Number of bonsai grown this year :" +
                    weather(year,12.00,34.00,lowest_temperature));

            System.out.println("Total number of bonsai: " + number_of_bonsai);
        }
        else
        {
            System.out.println("All bonsai died...");
        }

    }
    public static long weather(String year,double rainfall, double sunlight, double lowest_temperature)
    {
        /*long change_in_bonsai_number = lowest_temperature >= -5d
                                        ? Math.round(((sunlight + rainfall) * 7.2d)
                                        - (3.4d * lowest_temperature))
                                        :
                                        -(Math.round(lowest_temperature * .45d));


         expressions are too long, thus going for if/ else*/

        long change_in_bonsai_number = 0l;

        if (lowest_temperature >= -5d)
        {

            change_in_bonsai_number = Math.round(((sunlight + rainfall) * 7.2d)
                                           - (3.4d * lowest_temperature));
        }
        else
        {

            change_in_bonsai_number = -(Math.round(lowest_temperature * .45d));
        }


        return change_in_bonsai_number;
    }

}
