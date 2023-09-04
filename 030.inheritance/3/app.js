// Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
    name;
    surname;
    getFullName() {
        return `${this.name} ${this.surname}`
    }
    setname(name) {
        this.name = name;

    }
    setsurname(surname) {
        this.surname = surname;
    }
}

class Singer extends Worker {
    years;
    birth;
    style;
    getMoreInfo() {
        return `${this.years} ${this.birth} ${this.style}`
    }
    setyears(years) {
        this.years = years;
    }
    setbirth(birth) {
        this.birth = birth;
    }
    setstyle(style) {
        this.style = style;
    }
}

const singer = new Singer();
singer.setname('Artsemi');
singer.setsurname('Kot');
singer.setyears('25 years');
singer.setbirth('22.01.1998');
singer.setstyle('HipHop');
console.log(singer.getFullName());
console.log(singer.getMoreInfo());

