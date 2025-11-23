function createBankAccount(){

    let balance =0
    return{
        deposit:function(amount){

            balance+=amount;
            console.log(`Deposited=${amount}`)
        },

        withdraw:function(amount){
if(amount<=balance){
    balance-=amount;
    console.log(`withdrawn:${amount}`);
}else{
    console.log("Insufficient balance");
}

},

getBalance:function(){
    return balance;
}

        }
    };


const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
console.log(account.getBalance());