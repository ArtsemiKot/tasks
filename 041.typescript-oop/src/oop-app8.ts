// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

class CircleR {
    r: number;
    getArea(): number {
        return this.r ** 2 * 3.14
    }
};

const circleR = new CircleR();
circleR.r = 10;
console.log(circleR.getArea());
