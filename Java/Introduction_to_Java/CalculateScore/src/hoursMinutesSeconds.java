public class hoursMinutesSeconds {

    public static void main(String[] args) {

        System.out.println(timeToHoursMinsSeconds(-5));

        System.out.println(timeToHoursMinsSeconds(5));

        System.out.println(timeToHoursMinsSeconds(65));

        System.out.println(timeToHoursMinsSeconds(5000));

        System.out.println(timeToHoursMinsSeconds(65,400));
    }

    public static String timeToHoursMinsSeconds(int hours,int seconds)
    {
        return timeToHoursMinsSeconds(seconds + (hours * 3600));
    }

    public static String timeToHoursMinsSeconds(int seconds)
    {
        int hours = 0, minutes = 0;

        String theHours = "h", theMinutes = "m", theSeconds = "s";
        //No minutes ; no hours
        if (seconds <= 0)
        {
            return ("No valid time duration was inputted for conversion...");
        }

        else if ((0 < seconds) && (seconds < 60))
        {

            return String.format("%02d%s%02d%s%02d%s", hours, theHours, minutes, theMinutes, seconds, theSeconds);

        }

        else if ((59 < seconds) && (seconds < 35999))
        {
            minutes = seconds / 60;
            seconds = seconds % 60;
            if (minutes >= 60)
            {
                hours = minutes / 60;
                minutes = minutes % 60;
            }

            return String.format("%02d%s%02d%s%02d%s", hours, theHours, minutes, theMinutes, seconds, theSeconds);

        }
        else
        {
            return ("The number of seconds provided exceeded the limit (359999)...");
        }

    }


}
