// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать[
// { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
// { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
// { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
// { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
// { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]

const str = 'developer@mail.ru';
function checkpass(str) {
    try {
        if (!str.includes('@')) throw new Error('Неверная почта')
        return true
    } catch (error) {
        return error.message;
    }
}
const result = checkpass(str);
console.log(result);