import { Link, Route, Routes } from "react-router-dom";
import App from "../Home";
import Profiles from "../components/Profiles";
import QueryTest from "../components/QueryTest";
import SynText from "../components/SynText";
import useInputs from "../hooks/useInputs";
import Counter from "./Counter";



const Root = () => {

  const [{inputs1, inputs2}, onChange] = useInputs({
    inputs1:"",
    inputs2:""
  })

    return (
      <div>
            <ul>
              <li>
                <Link to={`/Counter/`}>Counter</Link>
              </li>
              <li>
                <Link to={`/App/`}>CreateUser/UserList</Link>
              </li>
              <li>
                type a queries:
                <input
                  name="inputs1"
                  onChange={onChange}
                  value={inputs1}
                />
                <input
                  name="inputs2"
                  onChange={onChange}
                  value={inputs2}
                />
                <div>
                  <Link to={`/querytest?testquery1=${inputs1}&testquery2=${inputs2}`}>
                    Get Query
                  </Link>
                </div>
              </li>
              <li>
                <Link to={`/syntext/`}>Syntext</Link>
              </li>
              <li>
                <Link to={'/profiles/'}>Profiles</Link>
              </li>
            </ul>
            <hr/>
            <Routes>
              <Route path="/Counter/" element={<Counter />} />
              <Route path="/App/" element={<App />} />
              <Route path="/QueryTest" element={<QueryTest />} />
              <Route path="/SynText" element={<SynText />} />
              <Route path="/profiles/" element={<Profiles />} />
            </Routes>
      </div>
    );
  }

export default Root;