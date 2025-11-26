//zomato
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function paymentstatus(sampleorderDetail,fn){
    console.log(`ordercost : ${sampleorderDetail.cost} `);
    setTimeout(()=>{console.log("payment done");
    fn(sampleorderDetail)
    },3000)
}

function foodstatus(sampleorderDetail,fn){
    console.log(`preparation of ${sampleorderDetail.food}`);
    setTimeout(()=>{console.log("your order is prepared");
    fn(sampleorderDetail)},3000)
}


function Pickorder(sampleorderDetail,fn){
    console.log(`Rider is on his way to pick from ${sampleorderDetail.restaurant_location}`);
    setTimeout(()=>{console.log(`Rider has picked your order`);
fn(sampleorderDetail)},3000)
}

function deliverorder(sampleorderDetail){
    console.log(`rider is reaching ${sampleorderDetail.customer_location}`);
    setTimeout(()=>{
        console.log("order delivered"),3000
    })
}


paymentstatus(orderDetail,()=>{
    foodstatus(orderDetail,()=>{
        Pickorder(orderDetail,()=>{
            deliverorder(orderDetail)
        })
    })
}) 