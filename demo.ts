let message: string="Message" //cannot change type afterwards but is possible to reassign value
message="New Message"
console.log(message)



//Premitive Types string, number, boolean, null, undefinedm symbol, bigint

let num: number=42
let isActive: boolean=true
let nullVariable: null=null
let notDefinedValue: undefined=undefined
let bigintValue: bigint=9007199254741991n
let symbolValue: symbol=Symbol("unique")

let anyValue: any="Could be anything"
anyValue=100 //no error

let unknownValue: unknown="Could be anything"
// unknownValue = unknownValue=100 //eror

//Arrays
let numArray: number[]=[1,2,3,4];
//tuples
let tupleValue: [string, number]=["Age",30];

let id : string | number;
id="Nipuana"
console.log(10)
id=30
// id=true //error

let id1 : string | number | boolean;
id1="Nipuana"
console.log(10)
id1=30
id1=true //no error because of pipe


//Function 
function add(num1:number,num2:number):number{
 let sum:number=num1+num2
 return sum
}
let result:number=add(5,10)
console.log(result)


const info= (name:string | number): void =>{
    console.log(name)
}

info("wow")
info(123)

//objects
let userDetail: {name:string,age:number} = {
    name: "Nipuana",
    age:24
    // isActive:true //error
}

console.log(userDetail)


//Type interface
interface User {
    name:string,
    age:number,
    isActive?:boolean //optional
}

let user1: User={
    name:"wow",
    age:32,
    isActive:false
}
console.log(user1)


//Time alias

type Point={
    x:number,
    y:number,
    disc?:string
}
let point1 :Point={
    x:10,
    y:20,
    disc:"20 space"
}
console.log(point1)

//Generics
// Specify the placeholder 
function identity<T>(arg:T):T{
    return arg
}

let output1=identity<string>("Hello")
let output2=identity<number>(100)
console.log(output1,output2)

//ENUMS
enum Role{
    Admin,
    User,
    Guest
}
let userRole: Role=Role.Admin;
console.log(userRole)//index -0
console.log(Role[userRole])//value=Admin


interface UserDetail{
    id:number
    name:string
    role:Role
}

let user2:Partial<UserDetail>={
 role: Role.User
}
console.log(user2)

let user3:Readonly<UserDetail>={
    id:1,
    name:"Nipuana",
    role: Role.Admin
}
//user3.name="New Name" //error
console.log(user3)