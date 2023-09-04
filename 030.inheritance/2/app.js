// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer

class Person {
    name;
    adress;
    phone;
    getname() {
        return this.name;
    }
    getadress() {
        return this.adress;
    }
    getphone() {
        return this.phone;
    }
    setname(name) {
        this.name = this.name;
    }
    setadress(adress) {
        this.adress = this.adress;
    }
    setphone(phone) {
        this.phone = phone;
    }
}

class Customer extends Person {
    bool;
    numCustomer;
    getbool() {
        return this.bool;
    }
    getnumCustomert() {
        return this.numCustomer;
    }
    setboolen(bool) {
        this.bool = bool;
    }
    setnumCustomer(numCustomer) {
        this.numCustomer = numCustomer;
    }
}

const customer = new Customer();
customer.setname('Artsemi');
customer.setadress('Minsk');
customer.setphone('375447596882');
customer.setboolen(true);
customer.setnumCustomer(1);

const name_ = customer.getname();
const adress = customer.getname();
const phone = customer.getadress();
const bool = customer.bool();
const client = customer.numCustomer();
console.log(name_, adress, phone, bool, client);