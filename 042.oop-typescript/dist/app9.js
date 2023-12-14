// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку
class Validation {
    email;
    data;
    path;
    constructor(email, data, path) {
        this.email = email;
        this.data = data;
        this.path = path;
    }
    isValidEmail() {
        try {
            if (!/^[a-zA-z0-9\_\-\.]+@[a-z]+\.+[a-z]{2,5}$/gm.test(this.email)) {
                throw new Error("email is not correct");
            }
            else {
                console.log(true);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    ;
    isValidDate() {
        try {
            if (!/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}/gm.test(this.data)) {
                throw new Error("data is not correct");
            }
            else {
                console.log(true);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    ;
    isValidPath() {
        try {
            if (!/^[A-z{[1}\:\/\/[a-zA-z]+\//g.test(this.path)) {
                throw new Error("path is not correct");
            }
            else {
                console.log(true);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    ;
}
;
const validation = new Validation('kot@mail.ru', '14.12.2023', 'C://admin/');
validation.isValidEmail();
validation.isValidDate();
validation.isValidPath();
