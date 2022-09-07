let basket = {
    "Leather wallet" : {
        "unit" : 1100,
        "GST%" : 18,
        "quentity" : 1
    },
    "Umbrella" : {
        "unit" : 900,
        "GST%" : 12,
        "quentity" : 2
    },
    "Cigarette" : {
        "unit" : 200,
        "GST%" : 28,
        "quentity" : 3
    },
    "Honey" : {
        "unit" : 100,
        "GST%" : 0,
        "quentity" : 4
    }
}

let letherTotal = basket["Leather wallet"].quentity * basket["Leather wallet"].unit;
let UmbrellaTotal = basket["Umbrella"].quentity * basket["Umbrella"].unit;
let CigaretteTotal = basket["Cigarette"].quentity * basket["Cigarette"].unit;
let HoneyTotal = basket["Honey"].quentity * basket["Honey"].unit;

let calcLeaterGST = letherTotal + (letherTotal * basket["Leather wallet"]["GST%"]);
let calcUmbrellaGST = letherTotal + (letherTotal * basket["Umbrella"]["GST%"]);
let calcCigaetGST = letherTotal + (letherTotal * basket["Cigarette"]["GST%"]);
let calcHoneyGST = letherTotal + (letherTotal * basket["Honey"]["GST%"]);

document.write("Leather Total with GST: " + calcLeaterGST + "<br />")
document.write("Umbrella Total with GST : " + calcUmbrellaGST + "<br />")
document.write("Cigarette Total with GST : " + calcCigaetGST + "<br />")