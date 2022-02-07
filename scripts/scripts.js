

// Objects
const listing1 = {
    image: "./images/bicycle.jpg",
    alt: "White bicycle",
    name: "Bike",
    price: "$100.00",
    condition: "New",
    description: "Very nice new bike. Rides awesomely."
}


const listing2 = {
    image: "./images/basketball.png",
    alt: "Basketball with white background",
    name: "Basketball",
    price: "$20.00",
    condition: "Used",
    description: "Very fun basketball."
}


const listing3 = {
    image: "./images/football.jpg",
    alt: "American football in the grass",
    name: "Football",
    price: "$20.00",
    condition: "Used",
    description: "Football that will not let you down."
}


const listing4 = {
    image: "./images/xbox-one.jpg",
    alt: "Xbox One Videogaming Console",
    name: "Xbox One",
    price: "$200.00",
    condition: "New",
    description: "Brand new Xbox One. Super smooth and will keep you occupied for hours."
}


const listing5 = {
    image: "./images/hockey-net.jpg",
    alt: "Hockey net in the snow",
    name: "Hockey net",
    price: "$120.00",
    condition: "Used",
    description: "Very good condition, only used a few times."
}


// Display html templates
function display() {
    let listingOne = `<img src=${listing1.image} alt=${listing1.alt}` +
    `<h3>${listing1.name}</h3>` + 
    `<p class="price">${listing1.price}</p>` + 
    `<p>${listing1.condition}</p>` + 
    `<p>${listing1.description}</p>`;


    document.getElementById("obj1").innerHTML = listingOne;


    let listingTwo = `<img src=${listing2.image} alt=${listing2.alt}` +
    `<h3>${listing2.name}</h3>` + 
    `<p class="price">${listing2.price}</p>` + 
    `<p>${listing2.condition}</p>` + 
    `<p>${listing2.description}</p>`;


    document.getElementById("obj2").innerHTML = listingTwo;


    let listingThree = `<img src=${listing3.image} alt=${listing3.alt}` +
    `<h3>${listing3.name}</h3>` + 
    `<p class="price">${listing3.price}</p>` + 
    `<p>${listing3.condition}</p>` + 
    `<p>${listing3.description}</p>`;


    document.getElementById("obj3").innerHTML = listingThree;


    let listingFour = `<img src=${listing4.image} alt=${listing4.alt}` +
    `<h3>${listing4.name}</h3>` + 
    `<p class="price">${listing4.price}</p>` + 
    `<p>${listing4.condition}</p>` + 
    `<p>${listing4.description}</p>`;


    document.getElementById("obj4").innerHTML = listingFour;


    let listingFive = `<img src=${listing5.image} alt=${listing5.alt}` +
    `<h3>${listing5.name}</h3>` + 
    `<p class="price">${listing5.price}</p>` + 
    `<p>${listing5.condition}</p>` + 
    `<p>${listing5.description}</p>`;


    document.getElementById("obj5").innerHTML = listingFive;
}


