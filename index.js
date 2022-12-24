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
        basePrice: 60,
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

let cart = {};

const orders = {};

let ordersCount = 0;

const ordersDiv = document.getElementById("orders");

function renderOrders() {
    const orderContent = [];
    Object.values(orders).forEach(function(order) {
        const element = document.createElement('div');
        element.classList.add('order');

        const elementId = document.createElement('div');
        elementId.classList.add('order-id');
        elementId.innerText = 'Заказ: ' + order.orderId;
        element.append(elementId);
        
        const elementDate = document.createElement('div');
        elementDate.classList.add('order-date');
        elementDate.innerText = order.orderDate.toLocaleString();
        element.append(elementDate);
        
        if(order.firstName.length > 0 || order.lastName.length > 0) {
            const elementClient = document.createElement('div');
            elementClient.classList.add('order-client');
            elementClient.innerText = order.firstName + ' ' + order.lastName;
            element.append(elementClient);
        }

        if(order.email.length > 0) {
            const elementClientEmail = document.createElement('div');
            elementClientEmail.classList.add('order-client-email');
            elementClientEmail.innerText = order.email;
            element.append(elementClientEmail);
        }

        const cartContent = [];
        let total = 0;
        Object.values(order.cart).forEach(function(cartItem) {
            const cartElement = document.createElement('div');
            cartElement.classList.add('cart-item');
    
            const cartElementName = document.createElement('div');
            cartElementName.classList.add('cart-item__name');
            cartElementName.innerText = cartItem.name + ' (' + productsQuality[cartItem.quality].name + ')';
            cartElement.append(cartElementName);
    
            const cartElementCount = document.createElement('div');
            cartElementCount.classList.add('cart-item__count');
            cartElementCount.innerText = cartItem.count;
            cartElement.append(cartElementCount);
    
            const cartElementPrice = document.createElement('div');
            cartElementPrice.classList.add('cart-item__price');
            const subtotal = (products[cartItem.name].basePrice * productsQuality[cartItem.quality].percent / 100) * cartItem.count;
            cartElementPrice.innerHTML = subtotal.toFixed(1) + '&nbsp;&#321;';
            cartElement.append(cartElementPrice);
    
            total = total + subtotal;
    
            cartContent.push(cartElement);
        });
    
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('cart-total');
        totalDiv.innerHTML = 'Итого: ' + Math.floor(total.toFixed(1)) + '&nbsp;&#321;';
        cartContent.push(totalDiv);

        const orderCart = document.createElement('div');
        orderCart.classList.add('order-cart');
        orderCart.replaceChildren(...cartContent);
        element.append(orderCart);

        orderContent.push(element);
    });

    ordersDiv.replaceChildren(...orderContent);

};

const cartDiv = document.getElementById('cart');

function decrementCartItemCount(event) {
    const cartItemKey = event.target.parentNode.parentNode.id;
    const cartItemCount = cart[cartItemKey].count;
    if(cartItemCount > 1) {
        cart[cartItemKey].count -=1;
    } else {
        delete cart[cartItemKey];
    }
    renderCart();
}

function incrementCartItemCount(event) {
    const cartItemKey = event.target.parentNode.parentNode.id;
    cart[cartItemKey].count +=1;
    renderCart();
}

function renderCart() {
    const cartContent = [];
    let total = 0;
    Object.entries(cart).forEach(function([cartItemKey, cartItem]) {
        const element = document.createElement('div');
        element.classList.add('cart-item');
        element.setAttribute('id', cartItemKey);

        const elementName = document.createElement('div');
        elementName.classList.add('cart-item__name');
        elementName.innerText = cartItem.name + ' (' + productsQuality[cartItem.quality].name + ')';
        element.append(elementName);

        const elementCount = document.createElement('div');
        elementCount.classList.add('cart-item__count');
        element.append(elementCount);
        
        const elementCountButtonMinus = document.createElement('button');
        elementCountButtonMinus.classList.add('cart-item__count-button-minus');
        elementCountButtonMinus.innerText = '-';
        elementCountButtonMinus.setAttribute('type', 'button');
        elementCountButtonMinus.addEventListener('click', decrementCartItemCount);
        elementCount.append(elementCountButtonMinus);

        const elementCountText = document.createElement('div');
        elementCountText.classList.add('cart-item__count-text');
        elementCountText.innerText = cartItem.count;
        elementCount.append(elementCountText);

        const elementCountButtonPlus = document.createElement('button');
        elementCountButtonPlus.classList.add('cart-item__count-button-plus');
        elementCountButtonPlus.innerText = '+';
        elementCountButtonPlus.setAttribute('type', 'button');
        elementCountButtonPlus.addEventListener('click', incrementCartItemCount);
        elementCount.append(elementCountButtonPlus);

        const elementPrice = document.createElement('div');
        elementPrice.classList.add('cart-item__price');
        const subtotal = (products[cartItem.name].basePrice * productsQuality[cartItem.quality].percent / 100) * cartItem.count;
        elementPrice.innerHTML = subtotal.toFixed(1) + '&nbsp;&#321;';
        element.append(elementPrice);

        total = total + subtotal;

        cartContent.push(element);
    });

    if(Object.keys(cart).length > 0) {
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('cart-total');
        totalDiv.innerHTML = 'Итого: ' + Math.floor(total.toFixed(1)) + '&nbsp;&#321;';
        cartContent.push(totalDiv);
    
        const placeOrderButton = document.createElement('button');
        placeOrderButton.classList.add('button', 'place-order-button');
        placeOrderButton.innerText = 'Оформить';
        placeOrderButton.setAttribute('type', 'button');
        placeOrderButton.addEventListener('click', openModal);
        cartContent.push(placeOrderButton);
    }

    cartDiv.replaceChildren(...cartContent);
};

function placeOrder(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    ordersCount = ordersCount + 1;
    const orderId = ordersCount;
    const order = {
        orderId: orderId,
        orderDate: new Date(),
        firstName: formEntries.firstName,
        lastName: formEntries.lastName,
        email: formEntries.email,
        cart: {
            ...cart
        }
    };
    orders[orderId] = order;
    cart = {};
    renderCart();
    closeModal();
    clearFormInputs();
    renderOrders();
};

function clearFormInputs() {
    const placeOrderForm = document.querySelector("#placeOrderForm");
    const inputs = placeOrderForm.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.value = "";
    })
};

const modalCloseButton = document.querySelector(".modal-close-button");
modalCloseButton.addEventListener('click', closeModal);

const modalCancelOrderButton = document.querySelector("#modalCancelOrderButton");
modalCancelOrderButton.addEventListener('click', closeModal);

const placeOrderForm = document.querySelector("#placeOrderForm");
placeOrderForm.addEventListener('submit', placeOrder);

function openModal() {
    const modalDiv = document.querySelector(".modal");
    modalDiv.classList.remove("modal_closed");
    modalDiv.classList.add("modal_opened");
};

function closeModal() {
    const modalDiv = document.querySelector(".modal");
    modalDiv.classList.remove("modal_opened");
    modalDiv.classList.add("modal_closed");
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
    const price = ((products[name].basePrice * productsQuality[quality].percent) / 100).toFixed(1);
    priceDiv.innerHTML = price  + '&nbsp;&#321;';
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
    priceDiv.innerHTML = element.basePrice + '&nbsp;&#321;';
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

    productParentDiv.append(qualityDiv);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.innerText = 'В корзину';
    addToCartButton.setAttribute('type', 'button');
    addToCartButton.addEventListener('click', addToCart);
    productParentDiv.append(addToCartButton);

    products_container.append(productParentDiv);
});




