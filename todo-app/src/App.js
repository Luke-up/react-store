//Import React to use the react function 'useState()'
import React from "react";
import "./App.css";
//Various bootstrap components for use in the layout are imported here
import Container from "react-bootstrap/Container";
import { Trash } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Main function that will return all the JSX for the app
function App() {
  // create a variable using 'useState' which will hold the array of todos
  const [todoList, setTodoList] = React.useState([]);
  // create a variable using 'useState which will hold the current variable which is entered or deleted
  const [todo, setTodo] = React.useState("");

  // This function will add the value of the text input box to the array, by creating a new object and concatting it to the array of todo's
  function submit(e) {
    // The 'preventDefault' function stops the page from refreshing whereby the data would be lost
    e.preventDefault();

    // The 'todoList' array is copied and returned via 'concat' with the new todo added
    setTodoList([...todoList].concat(todo));
    // The input bar is set to a be blank again by linking its value to the 'todo' variable and setting that variable to an empty string
    setTodo("");
  }

  //The function deleteItem uses the value of the todo to look through the array of todos and return the array with the todo removed
  function deleteItem(itemToBeDeleted) {
    // the 'filter' function is used to iterate through the array and 'filter' out the chosen object which was passed to the function and return an updated array
    const todoListUpdated = [...todoList].filter(
      (todo) => todo !== itemToBeDeleted
    );

    // The updated array is then re-printed to the DOM
    setTodoList(todoListUpdated);
  }

  return (
    <Container className="text-center w-50 my-4">
      <Table striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>Todo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todoItem) => (
            <tr key={todoItem}>
              <td>
                <p className="text-break">{todoItem}</p>
              </td>
              <td>
                <button
                  onClick={() => deleteItem(todoItem)}
                  className="btn btn-danger"
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form onSubmit={submit}>
        <Row>
          <Col sm={9}>
            <input
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              className="w-100 border border-rounded my-4"
              value={todo}
            />
          </Col>
          <Col sm={3}>
            <button className="addButton" type="submit">
              Add Todo
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default App;
