public class BankAccount {

    private int accountNumber = 0;
    private double accountBalance = 0;
    private String customerName = "_";

    private String customerEmail = "_";

    private long customerPhoneNumber = 0;



    public BankAccount(){
        this(9876543,0.00d,"Default","Default",000000000);
        System.out.println("Empty constructor called");

    }


    public BankAccount(int accountNumber, double accountBalance, String customerName, String customerEmail, long customerPhoneNumber)
    {
        System.out.println("Bank Account Constructor with parameters called...");
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
        this.customerEmail = customerEmail;
        this.customerName = customerName;
        this.customerPhoneNumber = customerPhoneNumber;
    }

    public BankAccount(String customerName, String customerEmail, long customerPhoneNumber) {
        this(9999999,100.00,customerName,customerEmail,customerPhoneNumber);
//        this.customerName = customerName;
//        this.customerEmail = customerEmail;
//        this.customerPhoneNumber = customerPhoneNumber;
    }

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
