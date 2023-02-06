const objTs = {
    width: 100,
    height: 200
}

const areaTs = objTs.height * objTs.width;

console.log(areaTs);

/* areaTs() */

/* console.log(objTs.radius) */

const greet = (name: string, date: number) => {
    console.log(`Hello ${name}, today is ${date}!`)
};

greet("Jonas", 5)