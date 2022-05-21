"using strict;"
//Alinando Lennemann

//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
    //add objects here
    {item: "Monitor", price: 120.99},
    {item: "Keyboard", price: 56.99},
    {item: "Mouse", price: 34.99},
    {item: "Speakers", price: 54.99}
];

//declare any global variables
let grandtotal = 0;
let itemNumber = 0;

//display the inventory in a table on the webpage

var tableHTML = "<table>" +
                "<caption>Products</caption>" + 
                "<tr><th>Item</th><th>Price</th></tr>";

for (var n = 0; n < inventory.length; n++) {
    tableHTML += "<tr><td>" + inventory[n].item +
                "</td><td>" + inventory[n].price +
                "</td></tr>";
}

tableHTML += "</table>";
document.getElementById("inventory").innerHTML = tableHTML;

//function to run when add is clicked
function addItem(){
    let useritem = document.getElementById("item").value;
    let userPrice = findPrice(useritem);
    let quantity = document.getElementById("quantity").value;

    if (userPrice == -1 ||
        useritem.length == 0 ||
        quantity.length ==0) {
        window.alert("Inputs invalid");
        
    }
    else {
        itemNumber += 1;

        console.log("itemNumber is " + itemNumber);
        console.log("useritem is " + useritem);
        console.log("userprice is " + userPrice);
        console.log("quantity is " + quantity);

        let totalItemPrice = quantity * userPrice;
        console.log("totalItemPrice is " + totalItemPrice);

        grandtotal = grandtotal + totalItemPrice;
        console.log("grandtotal is " + grandtotal);

        document.getElementById("total").innerHTML = "Total Price ($): " + grandtotal.toFixed(2);

        if (quantity == 1) {
            document.getElementById("reciept").value += quantity + " " + 
                                                        useritem + " at " + 
                                                        userPrice + "$ each = " + 
                                                        totalItemPrice.toFixed(2) + "$" + "\r\n";
        }
        else {
            document.getElementById("reciept").value += parseFloat(quantity) + " " + 
                                                        useritem + "s at " + 
                                                        userPrice + "$ each = " + 
                                                        totalItemPrice.toFixed(2) + "$" + "\r\n";
        }
    }
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
}

//function to run when clear is clicked
function newOrder(){
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("reciept").value = "";
    document.getElementById("total").innerHTML = "Total Price ($): ";
    grandtotal = 0;
    console.log(grandtotal);
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
