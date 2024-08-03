import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StudentPage from './pages/student/StudentPage.jsx';
import Header from './components/header/Header.jsx';

function App() {
  let title = "Student Management";
  return (
    <>
      <Header title={title}></Header>
      <StudentPage> </StudentPage>
    </>
  );
}

export default App;
