import './App.css';
import Counter from "./routes/Counter"
import App from "./components/App"
import Profile from "./components/Profile";
import QueryTest from "./components/QueryResult";
import SynText from "./components/SynText";
import Profiles from "./components/Profiles";
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to={`/Counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`/App`}>CreateUser/UserList</Link>
        </li>
        <li>
          <Link to={`/QueryTest`}>QueryTest</Link>
        </li>
        <li>
          <Link to={`/SynText`}>Syntext</Link>
        </li>
        <li>
          <Link to={'/Profiles'}>Profiles</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" element= { <MainPage /> } />
        <Route path="/App" element= { <App/> } />
        <Route path="/Counter" element= { <Counter /> } />
        <Route path="/Profile" element= { <Profile /> } />
        <Route path="/QueryTest" element= { <QueryTest /> } />
        <Route path="/SynText" element= { <SynText /> } />
        <Route path="/Profiles" element= { <Profiles /> } />
        <Route path="/Profiles/:username" element= { <Profile />} />
      </Routes>
    </>
  );
}

export default Home;