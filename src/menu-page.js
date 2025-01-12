export default function menuPage() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = '';

    createDish(
        'Sunny Risotto', 
        'Creamy risotto with chicken, sun-dried tomatoes, and a hint of lemon.',
    'https://images.pexels.com/photos/6544227/pexels-photo-6544227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    createDish(
        'Golden Pasta',
        'Delicate spaghetti with saffron, garlic, and a touch of parmesan.',
        'https://images.pexels.com/photos/4518682/pexels-photo-4518682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    createDish(
        'Ocean Breeze Salad',
        'Fresh shrimp, avocado, and arugula with a citrus dressing.',
        'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );

    function createDish(name, description, imageURL) {
        const dishesContainer = document.createElement('div');
        dishesContainer.classList.add('menu-dish-container');
    
        const dishName = document.createElement('h2');
        dishName.classList.add('menu-dish-name');
        dishName.textContent = name;
    
        const dishDescription = document.createElement('p');
        dishDescription.classList.add('menu-dish-description');
        dishDescription.textContent = description;
    
        const dishImage = document.createElement('img');
        dishImage.src = imageURL;
        dishImage.alt = `${name} image`;
        dishImage.classList.add('menu-dish-image');
    
        dishesContainer.append(dishName, dishDescription, dishImage);
    
        mainContent.appendChild(dishesContainer);
    }
}