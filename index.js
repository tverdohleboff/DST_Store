
const a = [
    {   
        name: 'Мясо монстра',
        price: 10,
        quality: 'good',
    },
    {
        name: 'Трава',
        price: 5,
        quality: 'good',
    },
    {
        name: 'Ветка',
        price: 7,
        quality: 'good',
    },
    {
        name: 'Камень',
        price: 4,
        quality: 'good',
    }
];
const b = {
    'Мясо монстра': {
        name: 'Мясо монстра',
        price: 10,
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
        price: 4,
        quality: 'good',
    },
};

console.log('a', a);
console.log('b', b);

let Stone_Price_Arr = a.find(item => item.name === 'Камень').price;
console.log('Stone_Price_Arr', Stone_Price_Arr);
console.log('Stone_Price_Arr2', a[3].price);

let Stone_Price_Obj = b['Камень'].price;
console.log('Stone_Price_Obj', Stone_Price_Obj);
console.log('Array From Obj', Object.values(b));
console.log('Keys Array Obj', Object.keys(b));

let Obj_from_A = {};
a.forEach(item => {
    Obj_from_A[item.name] = item;
})
console.log('Obj from Arr', Obj_from_A);