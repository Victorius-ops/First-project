// Readonly types
type User = {
    readonly id: number
    name: string
}

const user: User = {
    id: 1,
    name: "Alex"
}
user.name = "Max"
user.id = 2

// Union Types
let testid: string | number = 123

testid = 5
testid = 'asd'
testid = true

// Literal Types

// "todo" | "doing" | "done"

type Status = 
    | "todo"
    | "doing"
    | "done"
    | "banana"

let test_status: Status = "todo"
test_status = "done"
test_status = "banana"


// Task type
type TaskColumn =
    |"todo" 
    | "done" 
    | "banana"

// type alias
type Task = {
    id: number
    title: string
    column: TaskColumn
    order: number | string
}
const task: Task = {
    id: 1,
    title: "Сделать header",
    column: "todo",
    order: 0
}

// interface
interface User1 {
    name: string 
    age: number
}

const user1: User1 = {
    name: "alex",
    age: 15
}

function multiply(a: number, b: number): number {
    return a * b
}

let a = multiply(5, 2)
multiply(5, "2")

function logMessage(message: string): void {
    console.log(message)
}
logMessage("asdasd")

function greet(name: string, age?: number): string {
    if (age === undefined) {
        return `Привет, ${name}`
    } 
    return `Привет, ${name}, тебе ${age} лет`
}
greet("Gosha")

type DeleteHandler = (id: number) => void

// (id: string) => void 
const deleteTask: DeleteHandler = (id) => {
    console.log("Удалён: ", id)
}

const c = "asd"

const d: () => number = () => {
    return 500
}


// any - для этого значения не проверяй нормально, что со мной делают
let data: any = 10
data = "hello"
data = {}
data.foo.bat.baz()

// unknown

let value: unknown = 123123

if (typeof value === "string") {
    console.log(value.toUpperCase())
}

// null & undefined

type User2 = {
    name: string
}

let currentUser: User2 | null = null 

currentUser = {
    name: "Alex"
}
