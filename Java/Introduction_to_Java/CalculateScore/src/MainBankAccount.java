public class MainBankAccount {



    public static void main(String[] args) {

    BankAccount tomsNewBankAccount = new BankAccount();
    System.out.println("\n Customer Name :" + tomsNewBankAccount.getCustomerName() +
                       "\n Customer Email :" + tomsNewBankAccount.getCustomerEmail() +
                       "\n Customer Phone Number :" + tomsNewBankAccount.getCustomerPhoneNumber() +
                       "\n Customer Account Number :" + tomsNewBankAccount.getAccountNumber() +
                       "\n Customer Account Balance : £" + tomsNewBankAccount.getAccountBalance()
    );

    BankAccount bobsNewBankAccount = new BankAccount(654321,400.00,"Bob McIllroy", "bob@gmail.com",0112345543);

        System.out.println("\n Customer Name :" + bobsNewBankAccount.getCustomerName() +
                "\n Customer Email :" + bobsNewBankAccount.getCustomerEmail() +
                "\n Customer Phone Number :" + bobsNewBankAccount.getCustomerPhoneNumber() +
                "\n Customer Account Number :" + bobsNewBankAccount.getAccountNumber() +
                "\n Customer Account Balance : £" + bobsNewBankAccount.getAccountBalance()
        );
        
    BankAccount marysNewBankAccount = new BankAccount("Mary","mary@gmail.com",1000000);

        System.out.println("\n Customer Name :" + marysNewBankAccount.getCustomerName() +
                "\n Customer Email :" + marysNewBankAccount.getCustomerEmail() +
                "\n Customer Phone Number :" + marysNewBankAccount.getCustomerPhoneNumber() +
                "\n Customer Account Number :" + marysNewBankAccount.getAccountNumber() +
                "\n Customer Account Balance : £" + marysNewBankAccount.getAccountBalance()
        );
    
    
    tomsNewBankAccount.setCustomerName("Tom Nosmot");
    tomsNewBankAccount.setAccountNumber(12345678);
    tomsNewBankAccount.setCustomerEmail("tom_nos@gmail.com");
    tomsNewBankAccount.setCustomerPhoneNumber(0773456321);
    tomsNewBankAccount.depositMoniesToAccount(10000.00);
    tomsNewBankAccount.withdrawMoniesFromAccount(1800.00);

    System.out.println("\n Customer Name :" + tomsNewBankAccount.getCustomerName() +
            "\n Customer Email :" + tomsNewBankAccount.getCustomerEmail() +
            "\n Customer Phone Number :" + tomsNewBankAccount.getCustomerPhoneNumber() +
            "\n Customer Account Number :" + tomsNewBankAccount.getAccountNumber() +
            "\n Customer Account Balance : £" + tomsNewBankAccount.getAccountBalance()
    );


    }



}
