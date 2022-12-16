const products = {
    'Мясо монстра': {
        name: 'Мясо монстра',
        basePrice: 12,
        quality: 'good',
        hint: 'Не похоже на еду',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/0/06/%D0%9C%D1%8F%D1%81%D0%BE_%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0.png/revision/latest?cb=20130621024257&path-prefix=ru',
    },
    'Срезанная трава': {
        name: 'Срезанная трава',
        basePrice: 5,
        quality: 'good',
        hint: 'Срезанная трава, твори-созидай что хочешь!',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/d/df/%D0%A2%D1%80%D0%B0%D0%B2%D0%B0_%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5.png/revision/latest?cb=20220216154527&path-prefix=ru',
    },
    'Ветка': {
        name: 'Ветка',
        basePrice: 6,
        quality: 'good',
        hint: 'Кучка маленьких веточек. Сгодятся для растопки, между прочим',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/2/2d/%D0%92%D0%B5%D1%82%D0%BA%D0%B8.png/revision/latest?cb=20130517112635&path-prefix=ru',
    },
    'Камень': {
        name: 'Камень',
        basePrice: 3,
        quality: 'good',
        hint: 'Это камень. Чего тут непонятного?',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/c/c0/%D0%9A%D0%B0%D0%BC%D0%BD%D0%B8.png/revision/latest?cb=20121221191016&path-prefix=ru',
    },
    'Золотой самородок': {
        name: 'Золотой самородок',
        basePrice: 60,
        quality: 'good',
        hint: 'Небольшой кусок золота. Атомный номер 79',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/2/26/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%81%D0%B0%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA.png/revision/latest?cb=20121221190147&path-prefix=ru',
    },
    'Паутина': {
        name: 'Паутина',
        basePrice: 17,
        quality: 'good',
        hint: 'Произведено лучшими ткачихами гигантских пауков',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/e/e3/%D0%9F%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D0%B0.png/revision/latest?cb=20130316201238&path-prefix=ru',
    },
    'Срезанный камыш': {
        name: 'Срезанный камыш',
        basePrice: 13,
        quality: 'good',
        hint: 'Срезанный камыш, готовый к обработке',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/3/3b/%D0%A1%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%BC%D1%8B%D1%88.png/revision/latest?cb=20130410011412&path-prefix=ru',
    },
    'Топливо ужаса': {
        name: 'Топливо ужаса',
        basePrice: 33,
        quality: 'good',
        hint: 'Безумная штука!',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/5/5f/%D0%A2%D0%BE%D0%BF%D0%BB%D0%B8%D0%B2%D0%BE_%D1%83%D0%B6%D0%B0%D1%81%D0%B0.png/revision/latest?cb=20130520103028&path-prefix=ru',
    },
    'Лампочка': {
        name: 'Лампочка',
        basePrice: 5,
        quality: 'good',
        hint: 'Она медленно угасает',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/1/1e/%D0%9B%D0%B0%D0%BC%D0%BF%D0%BE%D1%87%D0%BA%D0%B0.png/revision/latest?cb=20130522170120&path-prefix=ru',
    },
    'Соты': {
        name: 'Соты',
        basePrice: 18,
        quality: 'good',
        hint: 'Раньше в них жили пчёлы',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/8/86/%D0%A1%D0%BE%D1%82%D1%8B.png/revision/latest?cb=20130410014543&path-prefix=ru',
    },
    'Кремень': {
        name: 'Кремень',
        basePrice: 3,
        quality: 'good',
        hint: 'Это очень острый камень',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/b/bd/%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D1%8C.png/revision/latest?cb=20121226110342&path-prefix=ru',
    },
    'Бревно': {
        name: 'Бревно',
        basePrice: 7,
        quality: 'good',
        hint: 'Оно большое, оно тяжёлое и оно деревянное',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/d/da/%D0%91%D1%80%D0%B5%D0%B2%D0%BD%D0%BE.png/revision/latest?cb=20130410004628&path-prefix=ru',
    },
    'Шестеренка': {
        name: 'Шестеренка',
        basePrice: 23,
        quality: 'good',
        hint: 'Винтики и шестерёнки',
        image: 'https://static.wikia.nocookie.net/dont-starve/images/0/08/%D0%A8%D0%B5%D1%81%D1%82%D0%B5%D1%80%D1%91%D0%BD%D0%BA%D0%B8.png/revision/latest?cb=20200525082731&path-prefix=ru',
    },
};

const productsQuality = {
    'good': {
        name: 'Хороший',
        percent: 100,
    },
    'medium': {
        name: 'Средний',
        percent: 70,
    },
    'low': {
        name: 'Плохой',
        percent: 30,
    },
};

const cart = {
};

const cartDiv = document.getElementById('cart');
function renderCart() {
    const cartContent = [];
    let total = 0;
    Object.entries(cart).forEach(function(item){
        const [key, cartItem] = item;
        const element = document.createElement('div');
        element.classList.add('cart-item');

        const elementName = document.createElement('div');
        elementName.classList.add('cart-item__name');
        elementName.innerText = cartItem.name + ' (' + productsQuality[cartItem.quality].name + ')';
        element.append(elementName);

        const elementCount = document.createElement('div');
        elementCount.classList.add('cart-item__count');
        elementCount.innerText = cartItem.count;
        element.append(elementCount);

        const elementPrice = document.createElement('div');
        elementPrice.classList.add('cart-item__price');
        const subtotal = (products[cartItem.name].basePrice * productsQuality[cartItem.quality].percent / 100) * cartItem.count;
        elementPrice.innerHTML = subtotal.toFixed(2) + ' ' + '&#321;';
        element.append(elementPrice);

        total = total + subtotal;

        cartContent.push(element);
    });
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = 'Итого: ' + total.toFixed(2) + ' ' + '&#321;';
    cartContent.push(totalDiv);

    cartDiv.replaceChildren(...cartContent);
};

function addToCart(event) {
    const button = event.target;
    const name = button.parentNode.querySelector('.product-name').innerText;
    const quality = button.parentNode.querySelector('.product-quality__select').value;
    const productKey = name + '_' + quality;
    const productInCart = cart[productKey];
    if (productInCart !== undefined) {
        cart[productKey].count += 1;
    }
    else {
        cart[productKey] = {
            count: 1, 
            quality: quality,
            name: name,
        };
    } 
    button.parentNode.querySelector('.product-quality__select').value = Object.keys(productsQuality)[0];
    renderCart();
};

function changePrice(event) {
    const select = event.target;
    const quality = select.value;
    const priceDiv = select.parentNode.parentNode.querySelector('.product-price');
    const name = select.parentNode.parentNode.querySelector('.product-name').innerText; 
    const price = ((products[name].basePrice * productsQuality[quality].percent) / 100).toFixed(2);
    priceDiv.innerHTML = price  + ' &#321;';
};

const products_container = document.getElementById('productsContainer');
Object.values(products).forEach(element => {
   
    const productParentDiv = document.createElement("div");
    productParentDiv.classList.add('product');

    const imageDiv = document.createElement("div");
    imageDiv.style.backgroundImage = `url(${element.image})`;
    imageDiv.classList.add('product-image');
    imageDiv.setAttribute('title', element.hint);
    productParentDiv.append(imageDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add('product-name');
    nameDiv.innerHTML = element.name;
    productParentDiv.append(nameDiv);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add('product-price');
    priceDiv.innerHTML = element.basePrice + ' &#321;';
    productParentDiv.append(priceDiv);

    const qualityDiv = document.createElement("div");
    qualityDiv.classList.add('product-quality');
    const qualitySelect = document.createElement("select");
    qualitySelect.classList.add('product-quality__select');
    qualitySelect.addEventListener('change', changePrice);
    Object.entries(productsQuality).forEach(function(qualityItem) {
        const [qualityKey, qualityValue] = qualityItem;
        const option = document.createElement("option");
        option.setAttribute('value', qualityKey);
        option.innerText = qualityValue.name;
        qualitySelect.append(option);
    });
    
    qualityDiv.append(qualitySelect);

    //qualityDiv.innerHTML = 'Состояние: ' + element.quality;
    productParentDiv.append(qualityDiv);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.innerText = 'Добавить в корзину';
    addToCartButton.setAttribute('type', 'button');
    addToCartButton.addEventListener('click', addToCart);
    productParentDiv.append(addToCartButton);

    products_container.append(productParentDiv);
});



