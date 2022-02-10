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
        public double getChecking(){
            return this.checking;
        }
        public double getSavings(){
            return this.savings;
        }
        public double getAllAccounts(){
            return (this.savings + this.checking);
        }
        public void setChecking(double number){
            this.checking += number;
            this.totalAmount += number;
        }
        public void setSavings(double num){
            this.savings += num;
            this.totalAmount += num;
        }
        public void takeChecking(double num){
            if(num > checking){
                System.out.println("You have insufficient amount for withdraw");
            }
            else{
            this.checking -= num;
            this.totalAmount -= num;
            }
        }
        public void takeSavings(double num){
            if(num > savings){
                System.out.println("You have insufficient amount for withdraw");
            }
            else{
            this.savings -= num;
            this.totalAmount -= num;
            }
        }
    }