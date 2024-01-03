export function create() {
    const newTaskButton = document.getElementById('newTask');
    let taskContain = document.getElementById('entry');
    newTaskButton.addEventListener('click', function () {
        taskContain.classList.toggle('enter');
    });
}