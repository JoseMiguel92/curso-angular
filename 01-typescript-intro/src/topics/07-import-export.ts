
import { Product, taxCalculation } from './06-functions-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 250
    }
];

const [total, tax] = taxCalculation({ tax: 0.15, products: shoppingCart });





