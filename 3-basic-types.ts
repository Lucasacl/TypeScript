type UserModel = {
  name: string;
  age: number | string;
  email?: string;
};

const number: number = 10;

const string: string = "10";

const boolean: boolean = false;

const lights: boolean[] = [false, false];

const users: UserModel[] = [];

/* users.push(10); */

lights.push(true);

const names: string[] | UserModel[] = ["maria", "jonas"];

type Data = {
  lights: boolean[];
  names:string[];
};

const object: Data = {
    lights: [false, true],
    names:["maria", "jonas"],
    /* animals: */
}
type UserData =  {
    user: UserModel;
}

const News = ({user}: UserData) => {
    return console.log(user);
}