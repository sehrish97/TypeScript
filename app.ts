console.log(" time to begin  .");
let role:[number, string];
role=[1,'sehr'];
role.push(2,"tyty")
console.log(role);
let Student:{name:string,age:number,skills:string[]}={
    name:'sehrish',
    age:25,
    skills:['webdevelopment','SEO']
}
console.log(Student);
// console.log(student.skills);
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

// let myActivities :any[];
// myActivities=["sports",1];
// console.log(myActivities);
// for (const skill of student.skills){
//     console.log(skill.toUpperCase());
// }