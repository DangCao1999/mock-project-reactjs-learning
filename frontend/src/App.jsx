import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StudentPage from './pages/student/StudentPage.jsx';
import Header from './components/header/Header.jsx';
import { ModalCreateOrUpdate } from './components/modal-create-or-update/ModalCreateOrUpdate.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <StudentPage> </StudentPage>
      <ModalCreateOrUpdate></ModalCreateOrUpdate>
    </>
  );
}

export default App;
