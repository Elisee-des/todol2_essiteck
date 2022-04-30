import ProfileInfo from './profile-info';
import FormTodo from './todo/FormTodo';
import ListTodo from './todo/ListTodo';
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <ProfileInfo />
        </div>
        <div className='col-12 col-md-8'>
          <FormTodo />
          <ListTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
