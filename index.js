const products = {
    'Мясо монстра': {
        name: 'Мясо монстра',
        basePrice: 12,
        quality: 'good',
        hint: 'Не похоже на еду',
        image: 'image/мясо_монстра.webp',
    },
    'Срезанная трава': {
        name: 'Срезанная трава',
        basePrice: 5,
        quality: 'good',
        hint: 'Срезанная трава, твори-созидай что хочешь!',
        image: 'image/трава.webp',
    },
    'Ветка': {
        name: 'Ветка',
        basePrice: 6,
        quality: 'good',
        hint: 'Кучка маленьких веточек. Сгодятся для растопки, между прочим',
        image: 'image/ветка.webp',
    },
    'Камень': {
        name: 'Камень',
        basePrice: 3,
        quality: 'good',
        hint: 'Это камень. Чего тут непонятного?',
        image: 'image/камень.webp',
    },
    'Золотой самородок': {
        name: 'Золотой самородок',
        basePrice: 600,
        quality: 'good',
        hint: 'Небольшой кусок золота. Атомный номер 79',
        image: 'image/золото.webp',
    },
    'Паутина': {
        name: 'Паутина',
        basePrice: 17,
        quality: 'good',
        hint: 'Произведено лучшими ткачихами гигантских пауков',
        image: 'image/паутина.webp',
    },
    'Срезанный камыш': {
        name: 'Срезанный камыш',
        basePrice: 13,
        quality: 'good',
        hint: 'Срезанный камыш, готовый к обработке',
        image: 'image/камыш.webp',
    },
    'Топливо ужаса': {
        name: 'Топливо ужаса',
        basePrice: 33,
        quality: 'good',
        hint: 'Безумная штука!',
        image: 'image/топливо_ужаса.webp',
    },
    'Лампочка': {
        name: 'Лампочка',
        basePrice: 5,
        quality: 'good',
        hint: 'Она медленно угасает',
        image: 'image/лампочка.webp',
    },
    'Соты': {
        name: 'Соты',
        basePrice: 18,
        quality: 'good',
        hint: 'Раньше в них жили пчёлы',
        image: 'image/соты.webp',
    },
    'Кремень': {
        name: 'Кремень',
        basePrice: 3,
        quality: 'good',
        hint: 'Это очень острый камень',
        image: 'image/кремень.webp',
    },
    'Бревно': {
        name: 'Бревно',
        basePrice: 7,
        quality: 'good',
        hint: 'Оно большое, оно тяжёлое и оно деревянное',
        image: 'image/бревно.webp',
    },
    'Шестеренка': {
        name: 'Шестеренка',
        basePrice: 23,
        quality: 'good',
        hint: 'Винтики и шестерёнки',
        image: 'image/шестеренка.webp',
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



