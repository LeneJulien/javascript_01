/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const remove = (a) => {
    const l = getState().filter(url => url !== a);
    setState(l);
};

export default remove;
