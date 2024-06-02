document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector(".myForm");
  const taskInput = document.getElementById("crntTask");
  const taskLvl = document.getElementById("taskLevel");
  const myList = document.querySelector(".myList");
  const lvls = ["easy", "medium", "hard"];
  const taskTemplate = (level, val, indx) => {
    return `<li class='${level}'>
            <div class='item'>
                <span>${val}</span>
                <button id='delBtn' index='${indx}' key='${level}' class='${val}'>Del</button>
            </div>
        </li>`;
  };
  const checkLocalStorage = () => {
    if (window.localStorage.getItem("tasks") == null) {
      const temp = {
        easy: [],
        medium: [],
        hard: [],
      };
      window.localStorage.setItem("tasks", JSON.stringify(temp));
    }
    return window.localStorage.getItem("tasks");
  };
  const tasksMap = JSON.parse(checkLocalStorage());

  const updateList = (arr) => {
    myList.innerHTML = "";
    arr.map((key) => {
      let x = 0;
      tasksMap[key].map((elem) => {
        myList.innerHTML += taskTemplate(key, elem, x);
        x++;
      });
    });
  };
  const delTask = (e) => {
    const count = e.target;
    console.log(count.getAttribute("key"));
    tasksMap[count.getAttribute("key")].splice(count.getAttribute("index"), 1);
    window.localStorage.setItem("tasks", JSON.stringify(tasksMap));
    updateList(lvls);
    addListenerToDelBtn();
  };
  const addListenerToDelBtn = () => {
    const delBtns = document.querySelectorAll("#delBtn");
    for (let item of delBtns) {
      item.addEventListener("click", delTask);
    }
  };
  const submitTask = (e) => {
    e.preventDefault();
    const lvl = taskLvl.value;
    const tskInp = taskInput.value;
    console.log(tskInp + "\n" + lvl);
    let myArr = [];
    myArr.push(...tasksMap[lvl]);
    //console.log(myArr);
    myArr.push(tskInp);
    //console.log(myArr);
    taskInput.value = "";
    tasksMap[lvl] = myArr;
    window.localStorage.setItem("tasks", JSON.stringify(tasksMap));
    updateList(lvls);
    addListenerToDelBtn();
  };
  updateList(lvls);
  addListenerToDelBtn();
  taskForm.addEventListener("submit", submitTask);
});
