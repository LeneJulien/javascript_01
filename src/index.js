import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();


  // FIXME: use your actions functions to add a new picture
  // FIXME: bonus, trim eventual whitespaces and validate content
  add(url);

  clearInputContents();
  refreshGrid();
};

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();
  const fragment = document.createDocumentFragment();

  items.forEach( (e, i) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    imgElement.src = e;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    const updateButtonElement = clone.querySelector(
        ".picture-item-update-button"
    );

    const updateUrl = clone.querySelector(
          ".update-url-input"
      );
    //const url = clone.querySelector("update-url-input");

      // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {remove(i); refreshGrid();});
    updateButtonElement.addEventListener("click", () => {
      //let url = prompt("Put the ");
      const url = updateUrl.value;
      update(e, i, url);
      refreshGrid();
    });


      fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
