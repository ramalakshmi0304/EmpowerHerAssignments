function createCounter(){
let count=0;
return{
    increment:function(){
        count++
        console.log("current count", count);
    },

    decrement:function(){
        count--;
        console.log("current count", count);
    },

    getCount:function(){
        console.log("Current count:", count);
        return count;
    }
}

}


const counter1= createCounter()
counter1.increment();
counter1.increment();
counter1.decrement();

// Create another independent counter
const counter2 = createCounter();
counter2.increment(); 
counter2.getCount();  


counter1.getCount(); 