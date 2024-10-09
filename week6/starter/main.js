//Week 6: Guided Pratice
// Variables
// 1. Create a Categories Array
//display different categories 
const categories = ['All', 'T-shirt', 'Hoodies'];

/**
 * Displays the list of categories as HTML list items on the page
 * 
 */

//2. Display Categories Dynamically
//Steps: 
// Create a function to display the categories | function

 function displayCategories() {
    // Retrieve the HTML element where the categories will be displayed | getElementById
    const $categories = document.getElementById(`categories`);
 }
    // Create an empty list (array) to store the category elements | const, array
    const htmlTemplate = [];

    // Loop through each item in the categories array | forEach
        // Create an HTML list item for each category | template literal, push
        // first call the array that I want to use
        // =>: move the keyword function 
        categories.forEach(category => {htmlTemplate.   
            push(`
                <li class="nav-item">
                <a href="#" class="nav-link btn 
                btn-light btn-sm rounded-0 mx-1"> $
                {category}</a>
                </li>`)}); 

            //these anomynus function will hold 1 category in the categories array
            function (category) {htmlTemplate.push(`<li>${categories}</li>`)} 
            
    // Combine the list of category elements into a single string | join
    // Insert the HTML into the categories element | innerHTML
    //reassign html into the $categories 
    $categories.innerHTML = htmlTemplate.join('')

//3. Refactor with map()
// Create a function to display the categories | function
function displayCategories(){
    // Retrieve the HTML element where the categories will be displayed | getElementById
    const $categories = documnent.getElementbyId(`categories`);
    // Create a new array (list) by mapping over each category and save it in a variable | map
        // Create an HTML list item for each category | template literal
        //map allows to transform information, this is the final result of this transformation
        //the anymynous is the keywrod fucnction 
        const htmlTemplate = categories.map (category => `<li>
            class = "nav-item">
            <a href="#" class="nav-link btn btn-light bt-sm rounded-0 mx-1">$(category)
            </a>
            </li>`) 
    // Combine the list of category elements into a single string | join
    // Insert the combined HTML into the categories element | innerHTML
    $categories.innerHTML = categories 
}



/** 
 * Adds a product to the cart and updates the cart display.
 * @param {string} product - The name of the product to be added.
*/

// 4. Add Products to the Cart
// Initialize an empty cart array | let
    let cart = [];
// Create a function to add a product to the cart. Receive the product as a parameter | function
    function addToCart(product){
    // Add the product to the cart array | push
    cart.push(product);
    displayCart(); 

//create a function to add a product to the cart. receuve the product as a parameter \ function
function displayCart(){
    document.getElementbyId('cart').innerHTML = cart.map( item => `<li>${item}</li>`).join('')
}


    // Display the product
        // Create an array by mapping over each item in the cart | map
            // Create an HTML list item for each product | template literal
            cart.map(item => `<li>${item}</li>`).join('')
        // Combine the mapped list of HTML items into a single string | join
      
    // Insert the combined HTML into the element with the ID 'cart' | getElementById, innerHTML
    }
// 5. Refactor with map()

// 6. Refactor Using JavaScript Methods to Create HTML Elements
function displayCart(){
    //display the product 
    //retrieve the cart element from DOM | GetElementById 
    const $cart = document.getElementById('cart');
    //Clear the exsiting cart items | innerHTML = ''
    $Ccart.innerHTML = '';
    //loop through each item in the cart array | forEach 
    
}

/**
 * Updates the cart display on the webpage by generating a list of
 * the products currently in the cart.
 */
// 7. Create the function to display the cart


/**
 * Removes a product from the cart by filtering out the selected product,
 * and updates the cart display.
 * @param {string} product - The name of the product to be removed.
 */
// 8. Remove a Product from the Cart


// 9. Refactor Using filter()