type UserCardProps = {
    name: string
    age: number
}

function UserCard2({name, age}: UserCardProps) {
    return (
        <div>
            {name} - {age}
        </div>
    )
}
export default UserCard2