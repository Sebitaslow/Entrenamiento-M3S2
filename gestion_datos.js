const products = {
    product1: { id: 1, name: "Graphic target", price: 3500000},
    product2: { id: 2, name: "Motherboard", price: 1800000},
    product3: { id: 3, name: "Prosesor", price: 2100000}
}
console.log("Product Object", products)

const setProducts = new Set(Object.values(products).map(product => product.nombre));
console.log("Set of unique products", setProducts);

const mapProducts = new Map([
    ["Graphics", "Graphic target"],
    ["prosecution", "Motherboard"],
    ["prosecution", "Prosesor"]
]);
console.log("Product and category map",mapProducts);

for (const id in products){
    console.log (`Products ID: ${id}, Details:`, products[id])
}

for (const product of setProducts){
    console.log("Unique product:", product);  
}

mapProducts.forEach ((product, category) =>{
    console.log(`Category: ${category}, Product : ${product}`)
});

console.log("Complete data management tests:");
console.log("Product list (Object):", products);
console.log("Unique product list (Set):", setProducts);
console.log("Categories and products (Map):", mapProducts);
