import { useUsersFavFilms } from "../data/useUsersFavFilms"

export function useRegistration(initialValue = false) {
    const [value, setValue] = useState(initialValue)
    let changeIsReg = useUsersFavFilms((store) => store.changeIsReg)
    function Reg() {
        setValue(true)
        changeIsReg(value)
    }
    function UnReg() {
        setValue(false)
        changeIsReg(value)
    }
    return {
        value,
        Reg,
        UnReg
    }
}
