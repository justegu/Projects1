// input container
const todoDescriptionElement = document.querySelector(
  ".todo-input__todo-description"
);
const todoDeadlineElement = document.querySelector(
  ".todo-input__todo-deadline"
);
const addButtonElement = document.querySelector(".todo-input__add-button");
// sorting container
const sortByRecentlyAddedElement = document.querySelector(
  ".sorting-container__recently-added"
);
const sortByDeadlineElement = document.querySelector(
  ".sorting-container__deadline"
);
const sortByRecentlyCompletedElement = document.querySelector(
  ".sorting-container__recently-completed-items"
);
// output container
const todoTasksElement = document.querySelector(".todo-output__todo-tasks");
const noTasksTextElement = document.querySelector(
  ".todo-output__no-tasks-text"
);

let todoArray = [];

// calc deadline time
const calculateTimeLeft = (deadline) => {
  const timeDifference = new Date(deadline) - new Date();
  if (timeDifference < 0) {
    return "Deadline has passed";
  }

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes left till deadline`;
};

// no tasks toggle
const toggleNoTasksText = () => {
  noTasksTextElement.style.display = todoArray.length === 0 ? "block" : "none";
};

// creating task
const createTask = (taskDescription, deadline) => {
  const taskContainerLabel = document.createElement("label");
  const taskDescriptionInput = document.createElement("input");
  const taskContainer = document.createElement("div");
  const taskInputs = document.createElement("div");
  const taskDescriptionLabel = document.createElement("p");
  const taskDeadlineInput = document.createElement("p");
  const taskDeleteBtn = document.createElement("button");
  const timestamp = new Date().toISOString();

  taskContainerLabel.classList.add("task-container-label");
  taskContainer.classList.add("task-container-label__task-container-div");
  taskInputs.classList.add(
    "task-container-label__task-container-div__task-inputs-div"
  );
  taskDeadlineInput.classList.add(
    "task-container-label__task-container-div__task-inputs-div__deadline-text"
  );

  taskDescriptionInput.type = "checkbox";
  taskDescriptionInput.dataset.timestamp = timestamp;
  taskDescriptionLabel.innerText = taskDescription;
  if (!deadline) {
    taskDeadlineInput.innerText = "";
  } else {
    taskDeadlineInput.innerText = calculateTimeLeft(deadline);
  }
  taskDeleteBtn.innerText = "Delete";

  taskInputs.append(taskDescriptionLabel, taskDeadlineInput);
  taskContainer.append(taskInputs, taskDeleteBtn);
  taskContainerLabel.append(taskDescriptionInput, taskContainer);

  taskDeleteBtn.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      todoTasksElement.removeChild(taskContainerLabel);
      todoArray = todoArray.filter((task) => task !== taskContainerLabel);
      toggleNoTasksText();

      saveTasksToSessionStorage();
    }
  });

  taskDescriptionInput.addEventListener("change", () => {
    if (taskDescriptionInput.checked) {
      todoTasksElement.appendChild(taskContainerLabel);
      taskDescriptionLabel.classList.add("completed-task");
    } else {
      const timestamp = new Date(
        taskContainerLabel.querySelector("input").dataset.timestamp
      );
      let insertIndex = 0;
      for (let i = 0; i < todoArray.length; i++) {
        const task = todoArray[i];
        const taskTimestamp = new Date(
          task.querySelector("input").dataset.timestamp
        );
        if (timestamp <= taskTimestamp) {
          insertIndex = i;
          break;
        }
      }
      todoTasksElement.insertBefore(taskContainerLabel, todoArray[insertIndex]);
      taskDescriptionLabel.classList.remove("completed-task");
    }

    saveTasksToSessionStorage();
  });

  return taskContainerLabel;
};

// save and update
const saveTasksToSessionStorage = () => {
  const taskDataArray = todoArray.map((task) => {
    const taskDescription = task.querySelector("p").textContent;
    const taskDeadline = task.querySelector(
      ".task-container-label__task-container-div__task-inputs-div__deadline-text"
    ).textContent;
    return { taskDescription, taskDeadline };
  });
  sessionStorage.setItem("todos", JSON.stringify(taskDataArray));
};

const updateTodoTasksElement = () => {
  todoTasksElement.innerHTML = "";

  todoArray.forEach((task) => {
    todoTasksElement.appendChild(task);
  });

  saveTasksToSessionStorage();
};

// sorting
const toggleSortingOption = (clickedOption, sortingFunction) => {
  const sortingOptions = document.querySelectorAll(".sorting-option");

  sortingOptions.forEach((option) => {
    option.classList.remove("active");
  });

  clickedOption.classList.add("active");
  sortingFunction();
};

const sortRecentlyAdded = () => {
  todoArray.sort((a, b) => {
    const aCompleted = a.querySelector(".task-container-label input").checked;
    const bCompleted = b.querySelector(".task-container-label input").checked;
    const aTimestamp = new Date(
      a.querySelector(".task-container-label input").dataset.timestamp
    );
    const bTimestamp = new Date(
      b.querySelector(".task-container-label input").dataset.timestamp
    );

    if (aCompleted && !bCompleted) {
      return 1;
    } else if (!aCompleted && bCompleted) {
      return -1;
    } else {
      return aTimestamp - bTimestamp;
    }
  });

  updateTodoTasksElement();
};

const extractTimeLeft = (deadlineText) => {
  if (!deadlineText || typeof deadlineText !== "string") {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const [daysStr, hoursStr, minutesStr] = deadlineText.match(/\d+/g) || [];
  const days = parseInt(daysStr) || 0;
  const hours = parseInt(hoursStr) || 0;
  const minutes = parseInt(minutesStr) || 0;

  return { days, hours, minutes };
};

const sortDeadline = () => {
  const tasksWithDeadline = todoArray.filter((task) => {
    const deadlineTextElement = task.querySelector(
      ".task-container-label__task-container-div__task-inputs-div__deadline-text"
    );
    return (
      deadlineTextElement.innerText !== "" &&
      !task.querySelector("input").checked
    );
  });

  const tasksWithoutDeadline = todoArray.filter((task) => {
    const withoutDeadlineTextElement = task.querySelector(
      ".task-container-label__task-container-div__task-inputs-div__deadline-text"
    );
    return (
      withoutDeadlineTextElement.innerText === "" &&
      !task.querySelector("input").checked
    );
  });

  const checkedTasks = todoArray.filter(
    (task) => task.querySelector("input").checked
  );

  tasksWithDeadline.sort((a, b) => {
    const aDeadlineTextElement = a.querySelector(
      ".task-container-label__task-container-div__task-inputs-div__deadline-text"
    );
    const bDeadlineTextElement = b.querySelector(
      ".task-container-label__task-container-div__task-inputs-div__deadline-text"
    );

    const aDeadlineText = aDeadlineTextElement.innerText;
    const bDeadlineText = bDeadlineTextElement.innerText;

    const aTimeLeft = extractTimeLeft(aDeadlineText);
    const bTimeLeft = extractTimeLeft(bDeadlineText);

    if (aTimeLeft.days !== bTimeLeft.days) {
      return aTimeLeft.days - bTimeLeft.days;
    } else if (aTimeLeft.hours !== bTimeLeft.hours) {
      return aTimeLeft.hours - bTimeLeft.hours;
    } else {
      return aTimeLeft.minutes - bTimeLeft.minutes;
    }
  });

  todoArray = [...tasksWithDeadline, ...tasksWithoutDeadline, ...checkedTasks];
  updateTodoTasksElement();
};

const sortRecentlyCompleted = () => {
  todoArray.sort((a, b) => {
    const aCompleted = a.querySelector(".task-container-label input").checked;
    const bCompleted = b.querySelector(".task-container-label input").checked;

    if (aCompleted === bCompleted) {
      return new Date(b.dataset.timestamp) - new Date(a.dataset.timestamp);
    } else if (aCompleted) {
      return -1;
    } else {
      return 1;
    }
  });

  updateTodoTasksElement();
};

// event listeners
addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  let newTaskDescription = todoDescriptionElement.value;
  let newTaskDeadline = todoDeadlineElement.value;

  if (!newTaskDescription) {
    alert("Please add task description");
    return;
  }
  const newTask = createTask(newTaskDescription, newTaskDeadline);
  todoTasksElement.appendChild(newTask);
  todoArray.push(newTask);

  todoDescriptionElement.value = "";
  todoDeadlineElement.value = "";

  toggleNoTasksText();

  saveTasksToSessionStorage();
});

sortByRecentlyAddedElement.addEventListener("click", () => {
  toggleSortingOption(sortByRecentlyAddedElement, sortRecentlyAdded);
});

sortByDeadlineElement.addEventListener("click", () => {
  toggleSortingOption(sortByDeadlineElement, sortDeadline);
});

sortByRecentlyCompletedElement.addEventListener("click", () => {
  toggleSortingOption(sortByRecentlyCompletedElement, sortRecentlyCompleted);
});

// test data
const testTodoData = [
  {
    taskDescription: "Prepare presentation",
    taskDeadline: "2023-08-16T10:00:00Z",
  },
  {
    taskDescription: "Buy groceries",
    taskDeadline: "",
  },
  {
    taskDescription: "Read a book",
    taskDeadline: "2023-08-11T16:30:00Z",
  },

  {
    taskDescription: "Call a friend",
    taskDeadline: "2023-08-15T18:00:00Z",
  },
  {
    taskDescription: "Walk the dog",
    taskDeadline: "",
  },

  {
    taskDescription: "Pay utility bills",
    taskDeadline: "2023-08-13T12:00:00Z",
  },
  {
    taskDescription: "Attend a meeting",
    taskDeadline: "2023-08-19T15:30:00Z",
  },

  {
    taskDescription: "Exercise at the gym",
    taskDeadline: "",
  },
  {
    taskDescription: "Finish the report",
    taskDeadline: "2023-08-12T15:30:00Z",
  },
];

// win load
window.addEventListener("load", () => {
  const storedTasks = sessionStorage.getItem("todos");

  if (!storedTasks) {
    testTodoData.forEach((taskValues) => {
      const taskElement = createTask(
        taskValues.taskDescription,
        taskValues.taskDeadline
      );
      todoTasksElement.appendChild(taskElement);
      todoArray.push(taskElement);
    });

    saveTasksToSessionStorage();
  } else {
    const storedTasksArray = JSON.parse(storedTasks);

    storedTasksArray.forEach((taskValues) => {
      const taskElement = createTask(
        taskValues.taskDescription,
        taskValues.taskDeadline
      );
      todoTasksElement.appendChild(taskElement);
      todoArray.push(taskElement);
    });
  }

  toggleNoTasksText();
});

window.addEventListener("beforeunload", () => {
  sessionStorage.clear();
});
