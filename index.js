const myNames = ["Guadalupe", "Ollie", "Aki"]
const myEvent = 'surprise'

function writeCards(names, events) {
    const cart = []
    for (let i = 0; i < names.length; i++) {
    cart.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`) ;
    }
return cart
}

writeCards(["Guadalupe", "Olli", "Aki"], 'surprise') 







function countDown()  {
    let countDown = 0;
    while (countDown < 11) { 
        console.log(countDown++);
    }; 

}
