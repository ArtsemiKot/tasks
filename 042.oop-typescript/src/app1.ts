// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)

abstract class Shape {
    abstract calculateArea();
};

class Rectangle extends Shape {
    width: number;
    heigth: number;
    calculateArea(): number {
        return this.heigth * this.width
    }
}

const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.heigth = 20;
console.log(rectangle.calculateArea());