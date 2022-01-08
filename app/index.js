import {alertok} from "./module";
import css from "./index.css"


function a() {
    console.log("alert")
    alertok();
}

document.body.addEventListener("click", a, false)