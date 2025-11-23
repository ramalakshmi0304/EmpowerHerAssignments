function createBankAccount(){
let balance=0;
let transactionHistory=[];

return{
deposit:function(amount){
balance+=amount;
transactionHistory.push(`Deposited:${amount}`);
console.log(`Deposited:${amount}`)

},
withdraw:function(amount){
    if (amount<=balance){
        balance-=amount;
        transactionHistory.push(`Withdrawn:${amount}`);
        console.log(`Withdrawn: ${amount}`);
    }
},

getBalance:function(){
    return balance;
},

getTransactionHistory: function(){
    return[...transactionHistory];
}


};

}

const account2 = createBankAccount();
account2.deposit(1000);            
account2.withdraw(300);         
account2.withdraw(800);             
console.log(account2.getBalance()); 
console.log(account2.getTransactionHistory());