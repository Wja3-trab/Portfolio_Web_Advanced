import runMultipleFunctionsWithInitDelay from "./util.js";
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector(".myForm");
    const taskInput = document.getElementById("crntTask");
    const taskLvl = document.getElementById("taskLevel");
    const myList = document.querySelector(".myList");
    const lvls = ["easy", "medium", "hard"];

    const taskTemplate = (level, val, indx) => {
      return `<li id='${level}_${indx}' class='${level}'>
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
      return JSON.parse(window.localStorage.getItem("tasks"));
    };

    const tasksMap = checkLocalStorage();

    const destructureTasks = () => {
      const { easy, medium, hard } = tasksMap;
      const allTasksLvls = [...easy, ...medium, ...hard].filter(
        (tmpArr) => tmpArr.length > 15
      );
      console.log(`Alle taken met meer dan 15 characters:\t${allTasksLvls}`);
    };

    const updateList = () => {
      myList.innerHTML = "";
      lvls.forEach((key) => {
        tasksMap[key].map((elem, x) => {
          myList.innerHTML += taskTemplate(key, elem, x);
        });
      });
    };

    const delTask = (e) => {
      const elm = e.target;
      const liElem = document.getElementById(
        elm.getAttribute("key") + "_" + elm.getAttribute("index")
      );
      const divToDelete = liElem.querySelector(".item");
      console.log(elm.getAttribute("key"));
      tasksMap[elm.getAttribute("key")].splice(elm.getAttribute("index"), 1);
      window.localStorage.setItem("tasks", JSON.stringify(tasksMap));
      liElem.classList.add("delete");
      divToDelete.classList.add("delete");
      runMultipleFunctionsWithInitDelay(
        1500,
        updateList,
        addListenerToDelBtn,
        destructureTasks
      );
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

      if (tskInp.trim() != "") {
        console.log(tskInp + "\n" + lvl);
        let myArr = [...tasksMap[lvl], tskInp].filter(
          (item) => item.trim().length > 9
        );
        taskInput.value = "";
        tasksMap[lvl] = myArr;
        window.localStorage.setItem("tasks", JSON.stringify(tasksMap));
        updateList(lvls);
        addListenerToDelBtn();
        destructureTasks();
      }
    };

    updateList(lvls);
    addListenerToDelBtn();
    taskForm.addEventListener("submit", submitTask);
  });
})();
