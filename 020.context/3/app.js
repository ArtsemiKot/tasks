// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru.. by False в противном случае

let email = 'a.kot@a1.by';
function checkEmail(em) {
    let obj = {};
    obj.email = em;
    em.includes('@') && (em.includes('.com') || em.includes('.ru') || em.includes('.by')) ? obj.active = true : obj.active = false;
    return obj;
}

let result = checkEmail(email)
console.log(result);