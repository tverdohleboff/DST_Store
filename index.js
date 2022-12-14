
const products = {
    'Мясо монстра': {
        name: 'Мясо монстра',
        price: 12,
        quality: 'good',
    },
    'Трава': {
        name: 'Трава',
        price: 5,
        quality: 'good',
    },
    'Ветка': {
        name: 'Ветка',
        price: 7,
        quality: 'good',
    },
    'Камень': {
        name: 'Камень',
        price: 5,
        quality: 'good',
    },
};

const products_container = document.getElementById('products_container');
Object.values(products).forEach(element => {
   
    let div = document.createElement("div");
    div.innerHTML=element.name + "/" + element.price + "/" + element.quality;
    products_container.append(div);

});