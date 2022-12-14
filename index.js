
const products = {
    'Мясо монстра': {
        name: 'Мясо монстра',
        price: 12,
        quality: 'good',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/0/06/%D0%9C%D1%8F%D1%81%D0%BE_%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0.png/revision/latest?cb=20130621024257&path-prefix=ru',
    },
    'Трава': {
        name: 'Трава',
        price: 5,
        quality: 'good',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/d/df/%D0%A2%D1%80%D0%B0%D0%B2%D0%B0_%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5.png/revision/latest?cb=20220216154527&path-prefix=ru',
    },
    'Ветка': {
        name: 'Ветка',
        price: 7,
        quality: 'good',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/2/2d/%D0%92%D0%B5%D1%82%D0%BA%D0%B8.png/revision/latest?cb=20130517112635&path-prefix=ru',
    },
    'Камень': {
        name: 'Камень',
        price: 5,
        quality: 'good',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/c/c0/%D0%9A%D0%B0%D0%BC%D0%BD%D0%B8.png/revision/latest?cb=20121221191016&path-prefix=ru',
    },
    'Золото': {
        name: 'Золото',
        price: 500,
        quality: 'good',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/2/26/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%81%D0%B0%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA.png/revision/latest?cb=20121221190147&path-prefix=ru',
    },
};

const products_container = document.getElementById('productsContainer');
Object.values(products).forEach(element => {
   
    const productParentDiv = document.createElement("div");
    productParentDiv.classList.add('product');

    const imageDiv = document.createElement("div");
    imageDiv.style.backgroundImage = `url(${element.image})`;
    imageDiv.classList.add('product-image');
    productParentDiv.append(imageDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add('product-name');
    nameDiv.innerHTML = element.name;
    productParentDiv.append(nameDiv);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add('product-price');
    priceDiv.innerHTML = element.price + ' &#8381;';
    productParentDiv.append(priceDiv);

    const qualityDiv = document.createElement("div");
    qualityDiv.classList.add('product-quality');
    qualityDiv.innerHTML = 'Состояние: ' + element.quality;
    productParentDiv.append(qualityDiv);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.innerText = 'Добавить в корзину';
    addToCartButton.setAttribute('type', 'button');
    productParentDiv.append(addToCartButton);

    products_container.append(productParentDiv);
});