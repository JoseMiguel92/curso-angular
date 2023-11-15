
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.50
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({ products, tax }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { products, tax } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })
    return [total, total * tax];
}

const shoppingCart = [phone, tablet]

const tax = 0.15
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total', total);
console.log('Total+Tax', taxTotal);

