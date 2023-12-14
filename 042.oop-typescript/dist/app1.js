// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class Shape {
}
;
class Rectangle extends Shape {
    width;
    heigth;
    calculateArea() {
        return this.heigth * this.width;
    }
}
const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.heigth = 20;
console.log(rectangle.calculateArea());
