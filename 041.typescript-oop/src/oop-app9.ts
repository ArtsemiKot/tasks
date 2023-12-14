// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

class CircleC {
    r: number;
    getCircumference(): number {
        return this.r * 2 * 3.14
    }
};

const circleC = new CircleC();
circleC.r = 10;
console.log(circleC.getCircumference());
