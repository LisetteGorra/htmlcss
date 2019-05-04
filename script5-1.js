            //array
var theForce = ["franco","cuban"];
console.log(theForce);

theForce[1]="Figaro";
console.log(theForce);
theForce.push("rope");
console.log(theForce);
theForce.pop();
console.log(theForce);
var theJustice = ["box","cuban"];
console.log(theJustice);
theJustice.push("neet");
theJustice.unshift("Ruby");
console.log(theJustice);
theJustice.shift();
console.log(theJustice);
theJustice[2]="Element";
console.log(theJustice);
var theSuperior =theForce.concat(theJustice);
console.log(theSuperior);
var chaChing =[100, 1000, 5000, 10000, 50000];
console.log(chaChing);
chaChing[1]=500;
console.log(chaChing);
var thePot =[20, 30, 40, 70, 100];
console.log(thePot);
thePot[3]=200;
console.log(thePot);

 for (var i=0; i<chaChing.length; i++){
 console.log(chaChing[i]*thePot[i]);

}