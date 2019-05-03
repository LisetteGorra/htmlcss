var fruits1 = ["apples","peaches"];
console.log(fruits1);

fruits1[1]="Pineapples";
console.log(fruits1);

fruits1.push("pumpkins");
console.log(fruits1);

fruits1.pop();
console.log(fruits1);

var fruits2 = ["kiwis", "oranges"];
fruits2.push("sumo oranges");
fruits2.push("grapes");
fruits2.shift();
fruits2[2] = "eggplants";
console.log(fruits2);
var allfruits = fruits1.concat(fruits2);
console.log(allfruits);

var fruitprices = [1, 1.5, 2, 2.5, 3 ,4];

var fruitsSold = [4, 10, 2, 6, 4, 16];


for (var i = 0; i < allfruits.length; i++) {
  
    console.log("The total sales for", fruitsSold[i], allfruits[i], "is",fruitprices[i]*fruitsSold[i]);
}

