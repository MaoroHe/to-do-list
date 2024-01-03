import {createTask} from "../js/storage/storage.js";
import {create} from "../js/create/create.js";
import {baseList} from "../js/startList/startList.js";

create();
createTask();
baseList();

// clear button

const clearAll = document.getElementById('clearAll');

clearAll.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});