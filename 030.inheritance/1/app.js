// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран.

class Employee {
    nameofEmployee;
    numofEmployee;
    getnameofEmployee() {
        return this.nameofEmployee;
    }
    getnumofEmployee() {
        return this.numofEmployee;
    }
    setnameofEmployee(nameofEmployee) {
        this.nameofEmployee = nameofEmployee;
    }
    setnumofEmployee(numofEmployee) {
        this.numofEmployee = numofEmployee;
    }
}

class ProductionWorker extends Employee {
    numofChange;
    rateofChange;
    getnumofChange() {
        return this.numofChange;
    }
    getrateofChange() {
        return this.rateofChange;
    }
    setnumofChange(numofChange) {
        this.numofChange = numofChange;
    }
    setrateofChange(rateofChange) {
        this.rateofChange = rateofChange;
    }
}

const productionWorker = new ProductionWorker();
productionWorker.setnameofEmployee('Artsemi');
productionWorker.setnumofEmployee(25)
productionWorker.setnumofChange(2)
productionWorker.setrateofChange(100)
console.log(productionWorker.getnameofEmployee());
console.log(productionWorker.getnumofEmployee());
console.log(productionWorker.getnumofChange());
console.log(productionWorker.getrateofChange());