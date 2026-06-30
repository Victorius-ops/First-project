import { Form } from "react-router-dom";
import { useState } from "react";
function FilmSearch({value, UserInput}) {
    return(
        <>
        <div>
            <input type="text"
                placeholder="Введите название фильма"
                value={value}
                onChange={(e) => UserInput(e.target.value)}
             />
        </div>
        </>
    )
}
export default FilmSearch