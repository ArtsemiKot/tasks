// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {
    isEmail(email) {
      try {
        if (!/^[a-zA-Z0-9_\.\-]+@[a-z0-9]+\.[a-z]{1,3}$/g.test(email))
          throw new Error("Введена неправильно электронная почта");
        return true;
      } catch (error) {
        return error.message;
      }
    }
}
  const validator = new Validator();
  const email = "a.kot@a1.by";
  console.log(validator.isEmail(email));