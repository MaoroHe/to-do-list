export function createTask() {
    var taskList = JSON.parse(window.localStorage.getItem('tasks')) || [];
    let key3;

    const submitButton = document.getElementById('submit');

    // ffonction pour crée une nouvelle tâche
    function createTaskElement(task) {
        const parentUl = document.querySelector('ul');
        const liCreator = document.createElement('li');
        const liText = document.createTextNode(task.task);
        const checkBox = document.createElement('input');
        const delBtn = document.createElement('button');
        // const trash = '../to-do-list/assets/img/bxs-trash.svg';
        // const divBack = document.createElement('div');

        checkBox.type = 'checkbox';
        liCreator.appendChild(checkBox);
        checkBox.className = 'checkedBox';
        checkBox.checked = task.state === 'true'; // Mettre à jour la checkox
        liCreator.appendChild(liText);
        liCreator.className = 'taskObject';
        parentUl.appendChild(liCreator);
        liCreator.appendChild(delBtn);
        delBtn.className = 'delBtn';
        // delBtn.appendChild(divBack);
        // divBack.style.backgroundImage = trash;

        // gère l'état des checkbox, vérifie si la valeur retour est true l'état est égal a true.
        checkBox.addEventListener('change', (event) => {
            task.state = event.target.checked ? 'true' : 'false';
            localStorage.setItem('tasks', JSON.stringify(taskList)); // Mise à jour du stockage local
        });

        delBtn.addEventListener('click', (event) => {
            const index = taskList.findIndex(item => item.id === task.id);
            // vérifie l'index de l'élement cliquer en comparant les ids

            if (index !== -1) {
                taskList.splice(index, 1)
            // l'enlève du tableau
                liCreator.remove()
            // l'enlève visuellement
                localStorage.setItem('tasks', JSON.stringify(taskList));
            // re set le local storage avec les nouvelles informations
            }
        })
    }

    // boucle qui recrée chaque élément
    taskList.forEach(element => {
        createTaskElement(element);
    });

    submitButton.addEventListener('click', () => {
        const taskInput = document.getElementById('taskName');
        const taskName = taskInput.value.trim();

        if (taskName !== '') {
            function guidGenerator() {
                var S4 = function() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                };
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            }

            const newTask = {
                task: taskName,
                id: guidGenerator(),
                state: key3 || 'false', // Utiliser la valeur précédente ou par défaut 'false'
            };

            taskList.push(newTask);
            console.log(taskList);

            // Envoyer les taches visuellement
            createTaskElement(newTask);

            taskInput.value = '';
            localStorage.setItem('tasks', JSON.stringify(taskList)); // maj du localstorage
        } else {
            console.log('Veuillez entrer une valeur.');
            alert('Valeur invalide.');
        }
    });
}