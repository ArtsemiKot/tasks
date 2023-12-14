// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().


class Product {
    product = [{ title: 'car', price: 10 },
    { title: 'bike', price: 20 },
    { title: 'airplane', price: 30 }
    ];

    displayProductInfo() {
        const result = this.product.filter((el) => {
            if (el.price > 10) {
                return true;
            }
        });
        return result
    }
}

const product = new Product();
console.log(product.displayProductInfo());
