function productCategories(categories){

    const counts=categories.reduce((acc,category)=>{acc[category]=(acc[category]|| 0)+1;
        return acc;
    },{});

    const sorted = Object.entries(counts)

.sort((a,b)=> b[1]-a[1])
.map(item=> item[0]);
return{
    counts,
    sorted
};

}

const input= ["electronics", 
    "clothing", "electronics", "toys", "clothing", "toys", "toys"]

    console.log(productCategories(input))