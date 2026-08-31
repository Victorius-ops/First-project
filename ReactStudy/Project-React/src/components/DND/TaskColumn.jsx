import { useDroppable } from "@dnd-kit/react"
import TaskCard from "./TaskCard"

function TaskColumn({id, title, tasks}) {
    const {ref, isDropTarget} = useDroppable({
        id: id
    })

    return (
        <div 
            ref={ref}
            className={
                isDropTarget
                    ? "tasks__task active"
                    : "tasks__task"
            }
        >
            <h2>{title}</h2>
            {
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </div>
    )

}

export default TaskColumn