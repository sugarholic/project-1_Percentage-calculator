function calculateTip() {

    //inputs with data
    var amount = document.getElementById("amount").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("share").value;

    //validate
    if (amount==="" || service == 0){
        window.alert("Please enter an amount and your experience");
        return;
    }

    if (amount < 0) {
        window.alert("Please enter a positive number");
        return;
    }

    //validate number of people sharing
    if(people ==="" || people <=1){
        people = 1;

        document.getElementById("each").style.display = "alone";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //math calculation
    var total = (amount*service) / people;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    //display tip total
    document.getElementById("total").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//button 
document.getElementById("calculate").onclick = function(){calculateTip();};