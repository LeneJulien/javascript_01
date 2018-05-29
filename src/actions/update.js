/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import {getState, setState} from "../store";

const update = (img, indexi, url) => {
    const l = getState().map((item, index) =>
        item === img &&  indexi === index ? url : item
    );
    console.log(url);
    setState(l);
};

export default update;
