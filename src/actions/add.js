/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import list from "./list";
import {getState, setState} from "../store";


const add = (a) => {
    //FIXME check if a is a tab or a single value
    //if (a.is)
    const l = [...getState(),  a];
    setState(l);
};

export default add;
