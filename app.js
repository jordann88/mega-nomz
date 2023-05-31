const recipes_array = [
    {
        name: "Chicken Broccoli “Rice” Casserole",
        image: "/images/chicken-broccoli-casserole.jpg", 
        description: "A cheesy, comfort-food delight that's versatile to make and perfect for meal-prepping",
        source: "Paleo Running Momma",
        sourceURL: "https://www.paleorunningmomma.com/paleo-chicken-broccoli-rice-casserole-whole30/",
        ingredients: [
            "ghee or butter",
            "onion",
            "garlic",
            "arrowroot starch",
            "broth",
            "coconut milk",
            "mustard",
            "nutritional yeast",
            "salt",
            "black pepper",
            "cauliflower rice",
            "chicken",
            "broccoli",
            "oil",
            "bacon"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "American",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "casserole",
        temperature: "hot",
        bulk: true
    },
    {
        name: "Shishitos with Peanut Dipping Sauce",
        image: "/images/shishitos.jpg",
        description: "Mild, crispy peppers with a spicy soy peanut dipping sauce",
        source: "Agritopia Farm",
        sourceURL: "https://agritopiafarm.com/recipes/2020/11/2/shishitos-with-peanut-dipping-sauce",
        ingredients: [
            "shishito peppers",
            "nut butter",
            "soy sauce",
            "vinegar",
            "hot sauce"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "snack",
        mealType: "finger food",
        temperature: "hot",
        bulk: false
    },
    {
        name: "Thai basil chicken and eggplant",
        image: "/images/thai-chicken-eggplant.jpg",
        description: "This recipe was my eggplant awakening",
        source: "The Woks of Life",
        sourceURL: "https://thewoksoflife.com/japanese-eggplant-chicken-thai-basil-stir-fry/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "Thai",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "stirfry",
        temperature: "hot",
        bulk: true
    },
    {
        name: "Berry Crisp",
        image: "/images/berry-crisp.jpg",
        description: "Berry medley with a crispy topping",
        source: "Minimalist Baker",
        sourceURL: "https://minimalistbaker.com/grain-free-berry-crisp/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "dessert",
        mealType: "bowl vs. salad vs. stirfry",
        temperature: "hot vs. cold",
        bulk: false
    },
    {
        name: "Sea Salt Caramel Coconut Ice Cream",
        image: "/images/coconut-cashew-icecream.jpg",
        description: "The easiest, most decadent ice cream that you can make without an ice cream maker",
        source: "Minimalist Baker",
        sourceURL: "https://minimalistbaker.com/sea-salt-caramel-coconut-ice-cream/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "dessert",
        mealType: "bowl vs. salad vs. stirfry",
        temperature: "cold",
        bulk: "is this good to make in bulk?"
    },
    {
        name: "Crispy Buffalo Chicken Salad",
        image: "/images/buffalo-chicken-salad.jpg",
        description: "Spicy, crispy chicken tossed in a refreshing bed of veggies",
        source: "Paleo Running Momma",
        sourceURL: "https://www.paleorunningmomma.com/crispy-buffalo-chicken-salad-paleo-whole30-keto/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "salad",
        temperature: "hot vs. cold",
        bulk: "is this good to make in bulk?"
    }
]

let htmlCode = ``;


recipes_array.forEach(function(singleRecipe) {
    console.log(singleRecipe)

    htmlCode = htmlCode +
    `
    <article>
        <div class="card">
            <h4>${singleRecipe.name}</h4>
            <img src="${singleRecipe.image}">
            <p>${singleRecipe.description}</p>
            <p>Recipe from <a href="${singleRecipe.sourceURL}">${singleRecipe.source}</a></p>
        </div>
    </article>
    `;
});


const recipeCards = document.querySelector(".recipe-card-grid");
recipeCards.innerHTML = htmlCode;



// dynamic javascript cards from: https://codesandbox.io/s/dynamic-javascript-cards-4fmf8?file=/src/index.js:2368-2398