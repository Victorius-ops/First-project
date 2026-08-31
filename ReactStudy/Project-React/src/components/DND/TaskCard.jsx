import { useDraggable } from "@dnd-kit/react"

function TaskCard({ task }) {
    const { ref } = useDraggable({
        id: task.id
    })

    return (
        <div ref={ref} className="task-card">
            <p>{task.title}</p>
        </div>
    )
}
export default TaskCard