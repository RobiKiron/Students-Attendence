// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  const [studentName, setStudentName] = useState('');
  const [allStudentList, setAllStudentList] = useState([]);

  const createStudentHandler = (event) => {
    event.preventDefult();
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
        isPresent: undefined,
      }

      setAllStudentList([newStudent, ...allStudentList]);
      setStudentName('')

    }
  }

  return (
    <div className='App'>
      <form onSubmit={createStudentHandler} action='' className='form' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type='text' name='' id='' placeholder='Enter a valid student name' value={studentName}
          onchange={(event) => setStudentName(event.target.value)} ></input>
        <button type='submit'> Add Student</button>
      </form>

      <div class='student-section'>
        <div class="all-students">
          {allStudentList.map((item) => (
            <li>
              <span>{item.name}</span>
              <button>Edit</button>
              <button>Delete</button>
              <button>Present</button>
              <button>Absent</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
