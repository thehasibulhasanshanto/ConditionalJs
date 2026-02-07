const price = 30000

if (price >= 25000){
    // discount 10% 
    const discountPirce = price * 10 /100
    const payAmount = price - discountPirce
    // console.log('After discount price ' + payAmount)
}else if (price >= 10000){
    //discount 5%
    const discountPrice = price * 5 / 100
    const payAmount = price - discountPrice
    // console.log('After discount price ' + payAmount + ' Taka')
}
else{
    // console.log('You have to pay full amount ' + price + ' Taka')
}

const age = 12
const foodPrice = 1000

if (age >= 65){
    //discount 50%
    const discountPirce = foodPrice * 50 /100
    const payAmount = foodPrice - discountPirce
    // console.log(payAmount)
}else if (age <= 12){
    // console.log('You will get free food')
}
else{
    // console.log('You will pay full amount ' + foodPrice + ' Taka')
}

const mark = 32

if (mark >= 0 || mark < 32){
    console.log('Your grade is Fail')
}else if (mark <= 39){
    console.log('Your grade is D')
}else if (mark <= 49){
    console.log('Your grade is C')
}else if (mark <= 59){
    console.log('Your grade is B')
}else if (mark <= 69){
    console.log('Your grade is B+')
}else if (mark <= 79){
    console.log('Your grade is A')
}else if (mark > 100){
    console.log('Invalid Result')
}
