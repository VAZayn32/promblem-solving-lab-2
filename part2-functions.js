function dogToHumanYears(dogAge) {
    if (dogage <=0) {
        return "Invalid dog age";
    }else if (dogage === 1) {
        return 15; // first year is equivalent to 15 human years 
    } else if (dogage =1){
        return 15; // first year is equivalent to 15 human years
    }else {
        return 15+9 +  (dogage -2) * 5; // each additional year is equivalentvto 5 human years {
        } 
    }

console.log(dogtoghumanyears(10)); //15
console.log(dogtohumanyears(2)); //24
console.log(dogtohumanyears(5)); //39

function calculateTip(total, percentage) {
    let tip = (total /100) * percentage;
    return tip.toFixed(2); // round to 2 decimal places

}
console.log(calculatetip(100, 15)); // 15.00