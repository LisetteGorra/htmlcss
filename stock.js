var company = ["Zix Corporation ","Mercer International Inc.","Mercer International Inc.","China Internet Nationwide Financial Services Inc."];
var stockSymbol = ["ZIXI", "MERC", "GEOS", "MELI", "CIFS"];

var sharePrices = [11.08, 17.40, 15.33, 578.94, 2.71];

var stockVolume = [6962846, 1421683, 135534, 2119134, 554787];

for ( var i = 0; i < sharePrices.length; i++){
    var totalSold = stockVolume[i]*sharePrices[i];

console.log(stockVolume[i], "shares of", stockSymbol[i], "traded yesterday at a price of ", sharePrices[i], "for a total of", totalSold.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
}