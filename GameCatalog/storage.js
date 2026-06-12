import { cardsMass } from "./data.js";
export  function storage (Mass) {
    localStorage.setItem(`Mass`, JSON.stringify(Mass))
}
