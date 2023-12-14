// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

interface iFruit {
    id: number;
    title: string;
    price: number
};

abstract class Fruit {
    abstract array: iFruit[]
}

class Apple extends Fruit {
    array: iFruit[] = [{
        id: 1, title: 'apple', price: 10
    },
    {
        id: 2, title: 'applepie', price: 20
    }];
    getAppleinfo(): iFruit[] {
        return this.array.filter((el: iFruit) => el.title == 'apple');
    }
}

const apple = new Apple();
console.log(apple.getAppleinfo());
