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
            return this.checking;
        }
        public int getSavings(){
            return this.savings;
        }
        public int getAllAccounts(){
            return (this.savings + this.checking);
        }
        public int setChecking(int num){
            this.checking += num;
            this.totalAmount += num;
        }
        public int setSavings(int num){
            this.savings += num;
            this.totalAmount += num;
        }
        public int takeChecking(int sum){
            if(sum > checking){
                System.out.println("You have insufficient amount for withdraw");
                return
            }
            else{
            this.checking -= sum;
            this.totalAmount -= sum;
            }
        }
        public int takeSavings(int sum){
            if(sum > savings){
                System.out.println("You have insufficient amount for withdraw");
                return
            }
            else{
            this.savings -= sum;
            this.totalAmount -= sum;
            }
        }
    }