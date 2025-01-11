import restaurantImg from "/images/restaurant-image.jpg"

export default function homePage() {
    const contentDiv = document.getElementById('content');
    
    const restaurantImage = document.createElement('img');
    restaurantImage.id = 'restaurant-image';
    restaurantImage.src = restaurantImg;
    restaurantImage.alt = 'restaurant-image';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Smak Sfery';

    const para = document.createElement('p');
    para.textContent = 'Nowoczesna restauracja łącząca różnorodne smaki z całego świata w wyjątkowej atmosferze. Oferujemy unikalne połączenia kuchni fusion, tworząc kulinarną podróż bez granic. Przyjdź, by odkryć, jak smakują miejsca, o których marzysz!';

    contentDiv.innerHTML = '';
    contentDiv.append(restaurantImage, h1, para);
}