import { Route, Routes } from 'react-router-dom';
import './App.css';
import UsersList from './Components/UsersList';
import './SnipperCSS.css'
import './CarduserCss.css'
import './DetailCss.css'
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <h1 className='TitleApp'>List of users</h1>
      
       <Routes>
       <Route path="/" element={<UsersList />} />
       <Route path="/details/:id" element={<Details />} />
       </Routes>
    </div>
  );
}

export default App;
