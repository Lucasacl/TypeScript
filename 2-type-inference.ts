type User = {
    name: string;
    age: number | string;
    email?: string;
}
const user: User = {
    name: "João",
    age: 28
}

user.age= "banana";

user.age = 50;

const formatUser = (newUser: User): boolean =>{
    newUser.name = "Maria";
    /* newUser.age = false; */
    newUser.age = 50;
    newUser.email = "maria@fakeemail.com"

    /* return newUser; */
    return false;
}

console.log(formatUser(user))