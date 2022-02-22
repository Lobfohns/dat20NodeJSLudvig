// Why don't we like for loops in Javascript
// Overly verbose
// Error Prone
// Not functional

const smartPhones = [
    {brand: "Samsung", price: 4500 },
    {brand: "iPhone", price: 7200 },
    {brand: "Sony Experia", price: 3800 }
];

const discountedPhones = smartPhones.map( discount => {
    discount.price -= 500
    return discount;
})
console.log(smartPhones, discountedPhones);

const cheapPhones = smartPhones.filter(cheapPhone => cheapPhone.price <= 4000);
console.log(cheapPhones);

