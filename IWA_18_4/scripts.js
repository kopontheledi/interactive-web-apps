// This code handles user interactions with an interface that displays and manages orders. The code imports functionality from two other JavaScript
//  files, data.js and view.js, which likely contain code related to storing and displaying order data, respectively.

// The code defines several functions that handle different types of user interactions, such as opening and closing modal dialogs, submitting forms,
// and deleting orders.

// The code defines event listeners that call these functions when certain user actions occur, such as clicking on buttons or dragging and dropping
// elements.

// The code sets up event listeners for drag-and-drop functionality for different areas of the interface. This allows users to drag orders
// between different sections of the interface.

// Finally, the code attaches the event listeners to the appropriate HTML elements using the addEventListener method.

//there are two toggle functions: handleHelpToggle and handleAddToggle. These functions open and close modal dialogs when certain buttons are 
//clicked. When the button is clicked for the first time, the dialog is shown (toggled "on"). When the button is clicked again, the dialog is 
//hidden (toggled "off").



//imported data from data.js
import { createOrderData } from "./data.js";
import { updateDragging } from "./data.js";
//imported data from view.js
import { createOrderHtml } from "./view.js";
import { html } from "./view.js";
import { updateDraggingHtml } from "./view.js";

//defining the function to help the toogle
const handleHelpToggle = (event) => {
    const overlay = html.help.overlay;
    overlay.show();
    if (event.target === html.help.cancel) {
        overlay.close();
    }
};

//define function to handle add toggle
function handleAddToggle(event) {
    html.other.add.focus();
    const overlay = html.add.overlay;
    overlay.show();
    if (event.target === html.add.cancel) {
        overlay.close();
        html.add.form.reset();
    }
};

//define function to handle add form submission
function handleAddSubmit(event) {
    event.preventDefault();
    const overlay = html.add.overlay;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const append = document.querySelector('[data-area="ordered"]');
    event.target.reset();
    overlay.close();
    append.appendChild(htmlData);
};

//Define function to handle edit toggle
function handleEditToggle(event) {
    const overlay = html.edit.overlay;
    const cancelBtn = html.edit.cancel;
    const input = html.edit.title;
    const select = html.edit.table;
    const option = html.edit.column;
    event.target.dataset.id ? overlay.show() : undefined;
    const id = event.target.dataset.id ? event.target.dataset.id : undefined;
    input.value = event.target.dataset.id
        ? event.target.querySelector(".order__title").textContent
        : undefined;
    select.value = event.target.dataset.id
        ? event.target.querySelector(".order__value").textContent
        : undefined;
    let section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
    if (event.target === cancelBtn) {
        overlay.close();
    }
    html.edit.delete.id = id;
};

//Define function to handle edit form submission
function handleEditSubmit(event) {
    event.preventDefault();
    const idRemove = html.edit.delete.id;
    const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
    orderDelete.remove();
    const overlay = html.edit.overlay;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const appended = document.querySelector(`[data-area="${newData.column}"]`);
    appended.appendChild(htmlData);
    event.target.reset();
    overlay.close();
};

//Define function to handle delete button click
function handleDelete(event) {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(
        `[data-id="${idToBeDeleted}"]`
    );
    const overlay = html.edit.overlay;
    orderToBeDeleted.remove();
    overlay.close();
};

// Add event listeners for help and add forms
//Add event listeners for edit form and delete button
html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);
html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);
//Dragging events
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath();
    let column = null;
    for (const element of path) {
        const { area } = element.dataset;
        if (area) {
            column = area;
            break;
        }
    }
    if (!column) return;
    updateDragging({ over: column });
    updateDraggingHtml({ over: column });
};
let dragged;
const handleDragStart = (event) => {
    dragged = event.target;
};
const handleDragDrop = (event) => {
    event.target.append(dragged);
};
const handleDragEnd = (event) => {
    const background = event.target.closest("section");
    background.style.backgroundColor = "";
};
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener("dragover", handleDragOver);
    htmlArea.addEventListener("dragstart", handleDragStart);
    htmlArea.addEventListener("drop", handleDragDrop);
    htmlArea.addEventListener("dragend", handleDragEnd);
}
















