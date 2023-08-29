public class BankAccount {

    private int accountNumber = 0;
    private double accountBalance = 0;
    private String customerName = "_";

    private String customerEmail = "_";

    private long customerPhoneNumber = 0;

    //Getters
    public int getAccountNumber()
    {
        return accountNumber;
    }

    public double getAccountBalance()
    {
        return accountBalance;
    }

    public String getCustomerName(){
        return customerName;
    }

    public String getCustomerEmail()
    {
        return customerEmail;
    }

    public long getCustomerPhoneNumber()
    {
        return customerPhoneNumber;
    }

    //Setters
    public void setAccountNumber(int accountNumber)
    {
        this.accountNumber = accountNumber;
    }

    public void setCustomerName(String customerName)
    {
        this.customerName = customerName;
    }

    public void setCustomerPhoneNumber(long customerPhoneNumber)
    {
        this.customerPhoneNumber = customerPhoneNumber;
    }

    public void setCustomerEmail(String customerEmail)
    {
        this.customerEmail = customerEmail;
    }

    public void depositMoniesToAccount(double sum){
        this.accountBalance += sum;
        System.out.println(sum + " deposited. New balance : £" + this.accountBalance);
    }

    public void withdrawMoniesFromAccount(double sum){
        if (sum <= this.accountBalance) {
            this.accountBalance -= sum;
            System.out.println(sum + " withdrawn. New balance: £" + this.accountBalance);
        }

        else
        {
            System.out.println("An amount was requested to be withdrawn " +
                                "that exceeded the account holder's " +
                                 "account balance...");
        }

    }




}
