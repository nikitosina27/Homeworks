/*function makeOptional<T> (obj:T):Partial<T> {
    return obj
}
    const newObj:{name:string, age: number} = {
        name: 'Sasha',
        age: 21
    }
makeOptional(newObj)
  */
/*С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

  1. Создать строку из имен пользователей через запятую
  2. Посчитать общее количество машин у пользователей
  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
*/
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
//1
var userNames = users.map(function (users) { return users.name; }).join(', ');
console.log(userNames);
//2
function getUsersCars(users) {
    var i = 0;
    users.map(function (_a) {
        var cars = _a.cars;
        return cars ? cars.map(function () { return i++; }) : [];
    });
    return i;
}
console.log(getUsersCars(users));
//3
function getEducatedUsers(users) {
    var arrUsers = [];
    users.map(function (_a) {
        var name = _a.name, hasEducation = _a.hasEducation;
        return hasEducation ? arrUsers.push(name) : [];
    });
    var educatedUsers = arrUsers.join(', ');
    return educatedUsers;
}
console.log(getEducatedUsers(users));
//4
function getUsersWithAnimals(users) {
    var arrUsers = [];
    users.map(function (_a) {
        var name = _a.name, animals = _a.animals;
        return animals ? arrUsers.push(name) : [];
    });
    var usersWithAnimals = arrUsers.join(', ');
    return usersWithAnimals;
}
console.log(getUsersWithAnimals(users));
//5
function getCarName(users) {
    var arrUsers = [];
    users.map(function (users) {
        if (users.cars) {
            for (var i = 0; i < users.cars.length; i++) {
                arrUsers.push(users.cars[i]);
            }
        }
    });
    var carName = arrUsers.join(', ');
    return carName;
}
console.log(getCarName(users));
