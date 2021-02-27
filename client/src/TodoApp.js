import logo from './logo.svg';
import Header from './components/Header'
import './App.css';

export default function TodoApp() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}


