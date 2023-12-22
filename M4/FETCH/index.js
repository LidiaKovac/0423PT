// const response = {
//     json: () => {
//         return Promise
//     }
// }

// response.json().then()

const fetchTodo = () => {
  return fetch("https://dummyjson.com/todos") //Promise
    .then((response) => {
      return response.json();
    }) //Promise<response>
    .then((data) => {
      return data.todos;
    }) //Promise<todos>
    .catch((err) => {
      console.error("ERROREEEEEEEEEEE!", err);
    })
    .finally(() => {
      console.log("finito");
    });
};

// const fetchTodo = async() => {
//     const res = await fetch()
//     const json = await res.json()
// }

// fetch tutti utenti

fetchTodo().then((todos) => {
  fetch("https://dummyjson.com/users?limit=100")
    .then((res) => res.json())
    .then((users) => {
      const main = document.querySelector("main");
      for (const todo of todos) {
        let foundUser
        for(const user of users.users) {
            if(user.id === todo.userId) {
                foundUser = user 
                break;
            }
        }
        main.innerHTML += `<div> <input type="checkbox" id="todo_${todo.id}"/>
        <label for="todo_${todo.id}">${todo.todo} | ${foundUser.firstName} ${foundUser.lastName}</label> <div>`;
      }
    });
});
// const sum = (a,b) => a+b

// const users = obj.users;
//       console.log(users)
//       const todos = obj.todos;
//       const main = document.querySelector("main");
//       for (const todo of todos) {
//         main.innerHTML += `<div> <input type="checkbox" id="todo_${todo.id}"/>
//         <label for="todo_${todo.id}">${todo.todo}</label> <div>`;
//       }
