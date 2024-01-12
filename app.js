// KREDİ FAİZ UYGULAMASI

let creditOptions = Number(prompt("1-50.000 TL - 12 Month \n 2-50.000 TL - 24 Month \n 3-100.000 TL - 12 Month \n 4- 100.000 TL - 24 Month"));

if (creditOptions == 1) {
    let creditTotal = 50000;
    let month = 12;
    let interestRate = 1.99;
    let interestTotal = (creditTotal / 100) * (interestRate) * month;
    let totalPay = creditTotal + interestTotal;
    let monthlyTotalPay = totalPay / month;
    console.log("Interest Rate :" + interestRate);
    console.log("Total Amount to be Paid :" + totalPay);
    console.log("Monthly Total Amount to be Paid:" + monthlyTotalPay);

} else if (creditOptions == 2) {
    let creditTotal = 50000;
    let month = 24;
} else if (creditOptions == 3) {
    let creditTotal = 100000;
    let month = 12;
    let interestRate = 2.19;
    let interestTotal = (creditTotal / 100) * (interestRate) * month;
    let totalPay = creditTotal + interestTotal;
    let monthlyTotalPay = totalPay / month;
   console.log("Interest Rate :" + interestRate);
    console.log("Total Amount to be Paid :" + totalPay);
    console.log("Monthly Total Amount to be Paid:" + monthlyTotalPay);

} else if (creditOptions == 4) {
    let creditTotal = 100000;
    let month = 24;
} else {
    alert("Incorrect entry! Please try again...");
}

