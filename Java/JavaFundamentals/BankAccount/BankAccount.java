class BankAccount{
    private double checking;
    private double savings;
    private static int numAccounts = 0;
    private static int totalAmount;

        //Constructor
        public BankAccount(){
            numAccounts++;
        }



        //Getter and Setter
        public int getChecking(){
            return checking;
        }
        public int getSavings(){
            return savings;
        }
        public int setChecking(int sum){
            this.checking += sum;
            this.totalAmount += sum;
        }
        public int setSavings(int sum){
            this.savings += sum;
            this.totalAmount += sum;
        }
        public int takeChecking(int sum){
            if(sum > checking){
                System.out.println("You have insufficient amount for withdraw")
                return
            }
            this.checking -= sum;
            this.totalAmount -= sum;
        }
        public int takeSavings(int sum){
            if(sum > checking){
                System.out.println("You have insufficient amount for withdraw")
                return
            }
            this.savings -= sum;
            this.total -= sum;
        }
    }
}