const arr = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
];

function GetAllData() {
    return arr;
}
function GetDataById(id) {
    const newArr = arr.filter((el) => el.id == id);
    return newArr;
}

function CreateData(name, age) {
    const newObj = {
        name: name,
        age: age
    }
    arr.push(newObj);
    return arr;
}

function UpdateData(id, name, age) {
    const filtered = arr.filter((el) => el.id != id)
    if (filtered.length == arr.length) return 'Такого id нет'
    const newObj = {
        id: id,
        name: name,
        age: age
    };
    filtered.push(newObj)
    return filtered;
}
function DeleteData(id) {
    const new_arr = arr.filter((el) => el.id != id)
    return new_arr;
}
module.exports = { GetAllData, GetDataById, CreateData, UpdateData, DeleteData};