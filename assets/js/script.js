import {createTask} from "../js/storage/storage.js";
import {create} from "../js/create/create.js";
import {baseList} from "../js/startList/startList.js";
import {darkmode} from "./darkmod/darkmode.js";

create();
createTask();
baseList();
darkmode();

// clear button

const clearAll = document.getElementById('clearAll');

clearAll.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});