function TSFunctions(){
    type EditHandler = (id: string) => void
    const editTask: EditHandler = (id) => {
        console.log ("Редактируем ", id)
    }
    editTask("task-5")
    editTask(10) // ошибка из-з ограничения переменной id значением string во второй строке

    type User = {
        name: string
    }
    const user: User = {
         name: "Alex"
    }
    console.log(user.email)

    let value: unknown = "typescript"
    console.log(value.toUpperCase())
    if (typeof value === "string") {
        console.log(value.toUpperCase())
    }

    type Task = {
        id: string
        title: string
    }
    let selectedTask: Task | null = null
    selectedTask = {
        id: "task-1",
        title: "Изучить TypeScript"
    }  
    selectedTask = true

    return(
        <>
        <h1>Функции:</h1>
        <h2>Имя: {user.name}</h2>
        </>
    )
}
export default TSFunctions