console.log("hello")

//* string, bollean, number ///
const a: string = "hello"

//* Array- only fixed type , dynamic size
const arr1: Array<number> = [1,2,3,4,5]
const arr: number[] = [1,2,3,4,5]
arr.push(6)
console.log(arr1)
console.log(arr)

//* Tuple- fixed size , fixed type
const tup: [number, string, number] = [1, "hello", 3]
console.log(tup)



//* functions (void , never, (number, bollean , string))
// void - return nothing 
function greet(name: string):void {
  console.log(name)
}
greet("raj")
//never - function which never ends (infinte)
function err(find:string): never {
  throw new Error("did't find anything")
}
// console.log(err("hello"))
// (number, bollean , string) - return these datatype
function intro(name: string):string {
  return name
}
console.log(intro("my name is raj"))

//* Object

type USER = {name: string, age: number, isMale: boolean}
const user: USER = {
  name: "raj",
  age: 20,
  isMale: true
}
function greetings(data: USER):void{
  console.log("hello "+ data.name + "\nyour age is, "+data.age)
}
greetings(user)

//* imp datatypes - (any) , (unknown)
//any
const r: any = 5
console.log(r+5)
console.log(r.toUpperCase()) // it can give error
//unkown
const u: unknown = 10
if(typeof u === "number") // without this unkown datatype will not work 
console.log(u+5)