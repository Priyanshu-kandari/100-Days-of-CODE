//zomato
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

// ---------------------
// 1️⃣ PAYMENT
// ---------------------
function paymentStatus(sampleorderDetail){
    return new Promise((resolve) => {
        console.log(`order cost: ${sampleorderDetail.cost}`);

        setTimeout(() => {
            console.log("Payment done");
            // Add payment confirmation details
            resolve({
                ...sampleorderDetail,
                paymentId: "PAY_" + Math.random().toString(36).substr(2, 9),
                paymentStatus: "SUCCESS",
                paymentTime: new Date().toLocaleTimeString()
            });
        }, 3000);
    });
}


// ---------------------
// 2️⃣ FOOD PREPARATION
// ---------------------
function foodStatus(orderData){
    return new Promise((resolve) => {
        console.log(`Preparation of ${orderData.food}`);

        setTimeout(() => {
            console.log("Your order is prepared");
            // Add preparation details
            resolve({
                ...orderData,
                preparationTime: "15 mins",
                chef: "Chef Ramesh",
                kitchenStatus: "READY_FOR_PICKUP"
            });
        }, 3000);
    });
}


// ---------------------
// 3️⃣ PICKUP
// ---------------------
function pickOrder(orderData){
    return new Promise((resolve) => {
        console.log(`Rider is on his way to pick from ${orderData.restaurant_location}`);

        setTimeout(() => {
            console.log("Rider has picked your order");
            // Add rider details
            resolve({
                ...orderData,
                riderName: "Rahul",
                riderPhone: "9876543210",
                vehicleNumber: "DL-01-AB-1234",
                pickupTime: new Date().toLocaleTimeString()
            });
        }, 3000);
    });
}


// ---------------------
// 4️⃣ DELIVERY
// ---------------------
function deliverOrder(orderData){
    return new Promise((resolve) => {
        console.log(`Rider ${orderData.riderName} is reaching ${orderData.customer_location}`);

        setTimeout(() => {
            console.log("Order delivered");
            // Add delivery confirmation
            resolve({
                orderId: orderData.orderId,
                customer_name: orderData.customer_name,
                deliveryStatus: "DELIVERED",
                deliveryTime: new Date().toLocaleTimeString(),
                riderName: orderData.riderName,
                otp: "1234"
            });
        }, 3000);
    });
}


// ---------------------
// 🚀 ASYNC/AWAIT VERSION
// ---------------------

async function processOrder(order) {
    try {
        console.log("🛒 Order placed\n");
        
        const paymentData = await paymentStatus(order);
        console.log(`✅ Payment ID: ${paymentData.paymentId}\n`);
        
        const preparationData = await foodStatus(paymentData);
        console.log(`👨‍🍳 Prepared by: ${preparationData.chef} in ${preparationData.preparationTime}\n`);
        
        const pickupData = await pickOrder(preparationData);
        console.log(`🏍️ Rider: ${pickupData.riderName} (${pickupData.vehicleNumber})\n`);
        
        const deliveryData = await deliverOrder(pickupData);
        console.log(`📦 Delivered to ${deliveryData.customer_name} at ${deliveryData.deliveryTime}`);
        console.log(`🔐 OTP verified: ${deliveryData.otp}\n`);
        
        console.log("✔ All steps completed - Enjoy your meal! 🍕");
        
        return deliveryData;
        
    } catch (error) {
        console.error("❌ Error processing order:", error);
    }
}

// Call the async function
processOrder(orderDetail);