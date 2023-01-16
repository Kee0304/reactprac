import { Link } from "react-router-dom";
import useInputs from "../hooks/useInputs";

export default function Root() {

  const [{inputs1, inputs2}, onChange] = useInputs({
    inputs1:"",
    inputs2:""
  })
    
    return (
      <>
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
            </ul>
      </>
    );
  }