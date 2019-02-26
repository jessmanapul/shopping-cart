var data = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

for (var i = 0; i < data.length; i++) {

    var productBox = createElem('div', 'product', data[i].product);
    content.appendChild(productBox);

    var descBox = createElem('div', 'description', data[i].description);
    productBox.appendChild(descBox);

    var priceBox = createElem('div', 'price', data[i].price);
    productBox.appendChild(priceBox);
}



function createElem(elem, classLabel, data) {
    var elemBox = document.createElement(elem);
    elemBox.className = classLabel;
    elemBox.innerHTML = data;
    return elemBox;
}
