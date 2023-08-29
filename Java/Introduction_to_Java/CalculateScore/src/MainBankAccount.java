public class MainBankAccount {



    public static void main(String[] args) {

    BankAccount tomsNewBankAccount = new BankAccount();
    System.out.println("\n Customer Name :" + tomsNewBankAccount.getCustomerName() +
                       "\n Customer Email :" + tomsNewBankAccount.getCustomerEmail() +
                       "\n Customer Phone Number :" + tomsNewBankAccount.getCustomerPhoneNumber() +
                       "\n Customer Account Number :" + tomsNewBankAccount.getAccountNumber() +
                       "\n Customer Account Balance : £" + tomsNewBankAccount.getAccountBalance()
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
