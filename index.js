const menu = [
    {
        id:1,
        title: 'Avo Toast',
        category:'breakfast',
        price:15,
        img: './images/avo.jpg',
        desc:`Guacamole with Lemon, Sunflower Seed, Pickled Red Onion,
         Arugula Microgreen,
         Fresh Pepper, on Thick-Cut Housemade Sourdough`
    },
    {
        id:2,
        title: 'Vegetarian',
        category:'breakfast',
        price:9.99,
        img: './images/vegetarian.jpg',
        desc:`Egg, Potato, Cheese, Whole Wheat Tortilla
        `
    },
    {
        id:3,
        title: 'Deluxe',
        category:'breakfast',
        price:6.99,
        img: './images/deluxe.jpg',

        desc:`Lettuce, Tomato, Onion, Cucumber, Avocado, Cream Cheese`
    },
    {
        id:4,
        title: 'ham',
        category:'breakfast',
        price:10.99,
        img: './images/ham.jpg',

        desc:`Ham, Egg, Potato, Cheese, Whole Wheat Tortilla`
    },
    {
        id:5,
        title: 'Flip',
        category:'Smoothies',
        price:15,
        img: './images/flip.jpg',
        desc:`Flavors: Vanilla, Chocolate, Carob or Mocha Whey Protein, Non-Fat Milk, Ice Milk`
    },
    {
        id:6,
        title: 'Lox',
        category:'breakfast',
        price:9.99,
        img: './images/lux.jpg',
        desc:`SB Fish Market Lox, Tomato, Onion, Caper, Cream Cheese`
    },
    {
        id:7,
        title: 'Yogurt Bowl',
        category:'breakfast',
        price:6.99,
        img: './images/youghurt.jpg',
        desc:`Straus Yogurt, Ocean Ranch GF Granola, Strawberry, Banana, Blueberry`
    },
    {
        id:8,
        title: 'Ceaser',
        category:'Fresh-salad',
        price:7.99,
        img: './images/caeser.jpg',
        desc:`Baby Gem, Parmesan, Sourdough Croutons`
    },
    {
        id:9,
        title: 'Arugula',
        category:'Fresh-salad',
        price:9.99,
        img: './images/argula.jpg',
        desc:`Parmesan, Tomato, Red Onion, Lemon Vinaigrette`
    },
    {
        id:10,
        title: 'Mixed Greens',
        category:'Fresh-salad',
        price:9.99,
        img: './images/green.jpg',
        desc:`Tomato, Onion, Cucumber, Avo, Sunflower Seed, ACV Dressing`
    },
    {
        id:11,
        title: 'Kauai Breeze',
        category:'Smoothies',
        price:7.99,
        img: './images/k.jpg',
        desc:`Banana, Strawberry, Pineapple Juice`
    },
    {
        id:12,
        title: 'Monkey Madness',
        category:'Smoothies',
        price:6.99,
        img: './images/monkey-madness.jpg',
        desc:`Banana, PB, Non-Fat Milk, Whey Protein, Ice Milk`
    },
    {
        id:13,
        title: 'Lemon Ginger',
        category:'Smoothies',
        price:9.99,
        img: './images/lemon-ginger.jpg',
        desc:`Mango, Banana, Ginger, Lemon, Pineapple Juice`
    },
    {
        id:14,
        title: 'Strawberry Date',
        category:'Smoothies',
        price:9.99,
        img: './images/strawberry.jpg',
        desc:`Banana, Strawberry, Date, Collagen, Almond Milk`
    },
    {
        id:15,
        title: 'Mint Chip',
        category:'Smoothies',
        price:8.99,
        img: './images/mint-chip.jpg',
        desc:`Vanilla, Mint, MCT Oil, Date Butter, Spinach, Cocoa Nibs, Coconut Milk`
    },
    {
        id:16,
        title: 'Hawaiian Special',
        category:'Smoothies',
        price:6.99,
        img: './images/hawai.jpg',
        desc:`Mango, Pineapple, Strawberry, Coconut Manna, Whey Protein, Coconut Water`
    },
    {
        id:17,
        title: 'Pina Colada',
        category:'Smoothies',
        price:9.99,
        img: './images/pini-cola.jpg',
        desc:`Pineapple, Banana, Coconut Manna, Ginger, Vanilla, Lime, Collagen, Coconut Milk`
    },
    {
        id:18,
        title: 'Mango Tango',
        category:'Smoothies',
        price:6.99,
        img: './images/mango.jpg',
        desc:`Mango, Banana, Pineapple, Mango Juice`
    },
    {
        id:19,
        title: 'Carrot Cake',
        category:'Smoothies',
        price:9.99,
        img: './images/carrot.jpg',
        desc:`Banana, Vanilla, Flax Oil, Cinnamon, Honey, Almond Butter, Almond Milk, Carrot Juice`
    },
    {
        id:20,
        title: 'Scones',
        category:'Baked-Goods',
        price:21.99,
        img: './images/scones.jpg',
        desc:`Ingredients: Baking powder, baking soda, organic butter, organic eggs, organic all purpose flour, organic milk, organic sugar, sea salt & organic seasonal fruit`
    },
    {
        id:21,
        title: 'Whole Wheat Muffins',
        category:'Baked-Goods',
        price:29.00,
        img: './images/wheat.jpg',
        desc:`Ingredients: Organic whole wheat flour, organic all purpose flour, organic bananas, organic eggs, organic non-gmo canola oil, organic cane sugar, baking powder, baking soda, sea salt, organic almond milk & organic almonds.`
    },
    {
        id:22,
        title: 'Whole Wheat Rosemary/Rolls',
        category:'Baked-Goods',
        price:1.99,
        img: './images/rosemerry.jpg',
        desc:`Ingredients: organic whole wheat flour, organic all purpose flour, sea salt, yeast, filtered water, organic rosemary.`
    },
    {
        id:23,
        title: 'Carpinteria Sourdough/Loaf',
        category:'Baked-Goods',
        price:5.99,
        img: './images/carpitinna.jpg',
        desc:`SB Fish Market Lox, Tomato, Onion, Caper, Cream Cheese`
    },
    {
        id:24,
        title: 'Garlic Bread/loaf',
        category:'Baked-Goods',
        price:4.99,
        img: './images/galic.jpg',
        desc:`Ingredients: organic whole wheat flour, organic all purpose flour, sea salt, yeast, filtered water, organic rosemary & organic garlic.`
    },
    {
        id:25,
        title: 'Blue',
        category:'Acial-Bowls',
        price:8.99,
        img: './images/blue.jpg',
        desc:`Pomegranate Juice, Strawberry, Blueberry, Banana, Acai`
    },
    {
        id:26,
        title: 'Pitaya',
        category:'Acial-Bowls',
        price:9.99,
        img: './images/pitaya.jpg',
        desc:`Almond Milk, Pitaya, Banana, Mango, Pineapple, Chia Seed`
    },
    {
        id:27,
        title: 'Tropical',
        category:'Acial-Bowls',
        price:9.99,
        img: './images/tropical.jpg',
        desc:`Pineapple Juice, Strawberry, Banana, Mango, Acai`
    },
    {
        id:28,
        title: 'Green',
        category:'Acial-Bowls',
        price:9.99,
        img: './images/green.jpg',
        desc:`Apple Juice, Kale, Strawberry, Banana, Blueberry, Acai`
    },
    {
        id:29,
        title: 'Tuna',
        category:'Sandwich',
        price:12.99,
        img: './images/tuna.jpg',
        desc:`Safe Catch Tuna Salad, (Sweet Relish, Stone Ground Mustard, Mayo, Lemon, Red Onion) Mayo, Mustard, Toma to, Romaine, Pickled Red Onion on Housemade Sourdough`
    },
    {
        id:30,
        title: 'Roast Beef',
        category:'Sandwich',
        price:12.99,
        img: './images/beef.jpg',
        desc:`Romaine, Pepperoncini, Provolone, Chipotle Mayo, Yellow Mustard, on Housemade Italian Roll
        `
    },
    {
        id:31,
        title: 'Avocado',
        category:'Sandwich',
        price:12.99,
        img: './images/avocado.jpg',
        desc:`Lettuce, Tomato, Onion, Cucumber, Swiss Cheese, Vegenaise, Housemade Pesto on Housemade Sourdough`
    },
    {
        id:32,
        title: 'Italian Cut',
        category:'Sandwich',
        price:12.99,
        img: './images/italian-cut.jpg',
        desc:`Salami, Ham, Provolone, Pepperoncini, Tomato, Romaine, Italian Vinaigrette, on Housemade Italian Roll`
    },
]
//get the selector of the parentelement
const menuCard = document.querySelector('.menu-card');
//buttons
const btnContainer = document.querySelector('.btn-container')


//add event listener to the windom,since we want the menu-items to display o loading the page
window.addEventListener('DOMContentLoaded',displayMenu)

//function
function displayMenu(){
    displayMenuItems(menu) 
    displayMenuBtns();
}
function displayMenuBtns(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }else{

        }
        return values;
    },['all']) 
    const categoryBtn = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');
    btnContainer.innerHTML = categoryBtn;
    const filterBtn = document.querySelectorAll('.filter-btn');
    //loop through the buttons and add event listener
    filterBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.target.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        })
        if(category === "all"){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }
    })   
})
}
function displayMenuItems(menuItems){
    let foodMenu = menuItems.map(function(item){
        return `<div class="menu col-6">
               <div class="food-img">
                   <img src="${item.img}" alt="${item.title}" class="food-image">
               </div>
               <div class="menu-info">
                   <div class="menu-title">
                       <h4>${item.title}</h4>
                       <h4>${item.price}</h4>
                   </div>
                   <div>
                       <p class="food-text">
                       ${item.desc}
                       </p>
                   </div>
               </div>
           </div>`
       });
       foodMenu = foodMenu.join('');
           menuCard.innerHTML = foodMenu; 
}