console.log(" time to begin  .");
var student = {
    //      age:number;
    //     skills:string;
    //  name:string;
    // }=
    //{
    name: 'sehrish',
    age: 25,
    skills: ['web development', 'Graphic Designer']
};
console.log(student.skills);
// const names:string[]=[];
// names.push("sehr");
// const names: readonly string[]=['sehr'];
// names.push('asad'); //Property 'push' does not exist on type 'readonly string[]'.....
// console.log(names[1]);
// const number=[1,2,3,4]; // inferred to type number[]
// number.push(5); 
// console.log(number);
// const car: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 3000;
//   console.log(car);
var myActivities;
myActivities = ["sports", 1];
console.log(myActivities);
for (var _i = 0, _a = student.skills; _i < _a.length; _i++) {
    var skill = _a[_i];
    console.log(skill.toUpperCase());
}
