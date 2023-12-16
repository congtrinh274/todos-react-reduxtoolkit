import AddToDo from './components/AddTodos';
import TodoListView from './components/TodoListView';

function App() {
  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '10px' }}>
      <h1>TO DO List</h1>
      <AddToDo />
      <TodoListView />  
    </div>
  );
}

export default App;
