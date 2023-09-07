// Реализовать следующие классы Круг, Треугольник и Квадрат, которые наследуются от Figure. Каждый экземпляр 
// класса должен содержать свойства Площадь и Имя. Вывести всю информацию о фигурах в консоль. 
// Площадь должна рассчитываться по математическим формулам.Класс Figureсодержит 
// поля: pi= 3.14, r= radius, a= side, h= height, а также сеттеры для данных полей. 
// Дочерние классы содержать геттеры на получение площади

class Figure {
    pi = 3.14;
    r;
    a;
    h;
    S_circle;
    S_triangle;
    S_square;
    setr(r) {
        this.r = r;
    }
    seta(a) {
        this.a = a;
    }
    seth(h) {
        this.h = h;
    }
    setS_circle(S_circle) {
        this.S_circle = S_circle;
    }
    setS_triangle(S_triangle) {
        this.S_triangle = S_triangle;
    }
    setS_square(S_square) {
        this.S_square = S_square;
    }
}

class Circle extends Figure {
    getCircle() {
        return `${this.S_circle} = ${this.pi * this.r ** 2}`;
    }
}

class Triangle extends Figure {
    getTriangle() {
        return `${this.S_triangle} = ${(this.a * this.h) / 2}`;
    }
}

class Square extends Figure {
    getSquare() {
        return `${this.S_square} = ${this.a * this.a}`;
    }
}

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();
circle.setr(2);
circle.setS_circle('S круга');
triangle.seta(5);
triangle.seth(2);
triangle.setS_triangle('S треугольника');
square.seta(10);
square.setS_square('S квадрата');
console.log(circle.getCircle());
console.log(triangle.getTriangle());
console.log(square.getSquare());