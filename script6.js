var cars1 = ["Lexus", "Honda", "Acura"];
var cars2 = ["Camaro","Audi","Yukon"];

cars1[1]="BMW";
console.log(cars1);
cars2[1]="Skyline";
console.log(cars2);
cars1.push("Lambo");
cars2.push("Nissan");
console.log(cars1, cars2);
cars1.unshift("Cadillac");
cars2.unshift("Honda");
console.log(cars1, cars2);
cars1.pop();
cars2.pop();
console.log(cars1, cars2);
cars2[2]="Lambo";
console.log(cars2);

var totalCars = cars1.concat(cars2);
console.log(totalCars);

var carsSold = [5,6,3,8,9,3,10,14];
var prices = [50000, 64000, 65774, 76000, 78000];
prices.push(87000, 92000, 100500);
console.log(prices);

for (var i = 0; i < totalCars.length; i++){
    console.log("The", totalCars[i], "sold", carsSold[i], "times, for a total of", (prices[i]*carsSold[i]).toLocaleString('en-US', {style: 'currency', currency: 'USD'}), "at", prices[i].toLocaleString('en-US', {style: 'currency', currency: 'USD'}), "each!");
}








