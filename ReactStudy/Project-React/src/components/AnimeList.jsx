import { Query, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { getAnimeMovies } from "../api/AnimeApi"
import { map } from "zod"
import { useDraggable, useDroppable, DragDropProvider } from "@dnd-kit/react"
import TaskColumn from "./DND/TaskColumn"

function AnimeList() {

    const [page, setPage] = useState(1)

    const [tasks, setTasks] = useState([
        { id: "1", title: "Сделать Header", column: "todo", order: 0 },
        { id: "2", title: "Сделать карточку", column: "doing", order: 0 },
        { id: "3", title: "Настроить API", column: "done", order: 0 },
        { id: "4", title: "Настроить Связь", column: "done", order: 0 },
    ])

    const todoTasks = tasks.filter((task) => task.column === "todo")
    const doingTasks = tasks.filter((task) => task.column === "doing")
    const doneTasks = tasks.filter((task) => task.column === "done")

    function moveToDoing(taskId) {
        setTasks((currentTasks) => {
            const arrayTasks = currentTasks.map((task) => {
                if(task.id === taskId) {
                    return {
                        ...task,
                        column: "doing"
                    }
                }
                return task
            })
            return arrayTasks
        })
    }
    
    // function moveToDo(taskId) {
    //     setTasks((currentTasks) => {
    //         const arrayTasks = currentTasks.map((task) => {
    //             if(task.id === taskId) {
    //                 return {
    //                     ...task,
    //                     column: "todo"
    //                 }
    //             }
    //             return task
    //         })
    //         return arrayTasks
    //     })
    // }

    // function moveDone(taskId) {
    //     setTasks((currentTasks) => {
    //         const arrayTasks = currentTasks.map((task) => {
    //             if(task.id === taskId) {
    //                 return {
    //                     ...task,
    //                     column: "done"
    //                 }
    //             }
    //             return task
    //         })
    //         return arrayTasks
    //     })
    // }

    function handleDragEnd(event) {
        if (event.canceled) {
            return
        }

        const { source, target } = event.operation

        if (!source || !target) {
            return
        }

        const taskId = source.id
        const newColumn = target.id

        console.log("Перетащили:", taskId)
        console.log("В колонку:", newColumn)

        setTasks((currentTasks) => {
            const new_array = currentTasks.map((task) => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        column: newColumn
                    }
                }
                return task
            })
            return new_array
        })


    }
     const [AnimeSucces, setAnimeSucces] = useState(false)
    const Anime = useQuery({
        queryKey: ['animes', {page, limit: 10}],
        queryFn: () => getAnimeMovies({page, limit: 10}),
        staleTime: 30 * 1000
    })
    if(Anime.isSuccess == false) {
        console.log("Loading Api`s page " + page)
    }  else if(Anime.isError == true) {
        console.log("Lost connection to API")
    }
    else if (Anime.isSuccess == true ) { 
        console.log("Anime tier")
        console.log(Anime?.data?.data)
        let AnimeArray = Anime.data.data
        let AnimeTitle = AnimeArray.map(AT => {
            let attributes = AT.attributes
            console.log(attributes.canonicalTitle)
            return attributes.canonicalTitle
        })
    }
   
    function showAnime() {
        setAnimeSucces(!AnimeSucces)
        console.log(AnimeSucces)
    }
    function DemoCard() {
        const { ref } = useDraggable({
            id: "task-1"
        })

        return (
            <div ref={ref}>
                Task 1
            </div>
        )
    }

    function DoingZone() {
        const { ref, isDropTarget } = useDroppable({
            id: "doing"
        })
        return (
            <div 
            ref={ref}
            className={isDropTarget ? "column active" : "column"}
            >
                Doing
            </div>
        )
    }

    return(
        <>
        <div className="tasks">
            {/* {
                Object.entries(user.address).map(([key, value]) => (
                    <p key={key}>
                        {key}: {value}
                    </p>
                ))
            } */}
            <button onClick={showAnime}>Показать аниме</button>
            {
            AnimeSucces ? Anime.data.data.map(Animka => {
                return (<><div className="AnimeApi" key={Animka.id}>
                <h3>Название Аниме: {Animka.attributes.canonicalTitle}</h3>
                <h3>{Animka.attributes.status}</h3>
                <h4>{Animka.attributes.synopsis}</h4>
                </div> </>)
              })  :
              (<p>Список аниме скрыт</p>)
            }
            <button onClick={() => moveToDoing("1")}>Нажать Тест</button>
            <DragDropProvider onDragEnd={handleDragEnd}>
                <div className="tasks_main">
                    <TaskColumn 
                        id="todo"
                        title="TODO"
                        tasks={todoTasks}
                    />

                    <TaskColumn 
                        id="doing"
                        title="DOING"
                        tasks={doingTasks}
                    />

                    <TaskColumn 
                        id="done"
                        title="DONE"
                        tasks={doneTasks}
                    />
                </div>
            </DragDropProvider>
        </div>
        <button 
        disabled = {page === 1}
        onClick={() => setPage(page - 1)}>
        Назад 
        </button>
        {page}
        <button onClick={() => setPage(page + 1)}>
        Вперёд 
        </button>
        </>
    )
}
export default AnimeList