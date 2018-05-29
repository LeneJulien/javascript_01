/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const remove = (index) => {
    const l = getState().filter((url, i) => i !== index);
    setState(l);
};

export default remove;
