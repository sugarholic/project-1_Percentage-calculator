function calculateShop() {

    //input with data
    var amount = 0;
    var discount = 0;
    var final = 0;
    amount = Number(document.calculateShop.amount.value);
    discount = Number(document.calculateShop.discount.value);
    final = Number(document.calculateShop.final.value);

    //validation
    if (amount==="") {
        window.alert("Please enter an amount");
        return;
    }

    if(discount==="") {
        window.alert("Please enter the discount");
        return;
    }

    if(discount<0) {
        window.alert("Please enter a positive number");
        return;
    }

    //calculation
    final = amount - (amount*discount/100);

    document.calculateShop.discount.value = discount.toFixed(2);
    document.calculateShop.final.value = final.toFixed(2);
    document.calculateShop.amount.value = amount.toFixed(2);

}


document.getElementById("calculate").onclick = function(){calculateShop();};