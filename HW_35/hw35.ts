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


interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean,
}
    const users:IUser[]= [
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
    ]
    



  //1
    const userNames = users.map(users => users.name).join(', ');
console.log(userNames);



//2
function getUsersCars(users: Array<IUser>):number {
    let i = 0;
    users.map(({cars}) => cars ? cars.map(() => i++) : [])
    return i
}
console.log(getUsersCars(users));





//3
function getEducatedUsers(users: Array<IUser>):string {
    let arrUsers: string[] = [];
    users.map(({name, hasEducation}) => hasEducation ? arrUsers.push(name) : [])
    let educatedUsers: string = arrUsers.join(', ');
    return educatedUsers
}
console.log(getEducatedUsers(users));



//4
function getUsersWithAnimals(users: Array<IUser>): string {
    let arrUsers: string[] = [];
    users.map(({name, animals}) => animals ? arrUsers.push(name) : [])
    let usersWithAnimals: string = arrUsers.join(', ');
    return usersWithAnimals
}
console.log(getUsersWithAnimals(users));



//5
function getCarName(users: Array<IUser>):string {
    let arrUsers: string[] = [];
    users.map((users) => {
        if (users.cars) {
            for(let i = 0; i<users.cars.length; i++){
                arrUsers.push(users.cars[i]);
            }
        }
    })
    let carName = arrUsers.join(', ');
    return carName
}
console.log(getCarName(users));