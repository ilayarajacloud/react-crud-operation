import './App.css';
import ListWidthIndex from './components/ListWidthIndex';
import ListWithId from './components/ListWithId';
import UserCrud from './components/user-crud/Index';
// import FormCurdWithStaticData from './oldtodo/FormCurdWithStaticData';
// import TodoList from './oldtodo/TodoList';
// import TodoListWithId from './oldtodo/TodoListWithId';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ListWithId /> */}
        {/* <ListWidthIndex /> */}
        <UserCrud />
      {/* <TodoList /> */}
      {/* <TodoListWithId /> */}
      {/* <FormCurdWithStaticData /> */}
      </header>
    </div>
  );
}

export default App;
