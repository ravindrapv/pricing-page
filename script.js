const button = document.querySelector(".toggle-selector");

button.addEventListener("click", togglePaymentPlan);

function togglePaymentPlan() {
    
    let monthPayment = document.getElementsByTagName("h3");
    console.log(monthPayment, "month");
    let annualPayment = document.getElementsByTagName("h4");

    console.log(annualPayment, "annual");

    let monthValueLength = Array(monthPayment.length).fill(0)

    monthValueLength.forEach((ele, index) => {
        if (monthPayment[index].style.display === "none") {
            monthPayment[index].style.display = "block";
            annualPayment[index].style.display = "none";
            button.style.justifyContent = "flex-end"
        } else {
            monthPayment[index].style.display = "none";
            annualPayment[index].style.display = "block";
            button.style.justifyContent = "flex-start"
        }

    })


}


