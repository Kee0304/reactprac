import { Link } from "react-router-dom";

export default function Root() {
    return (
      <>
            <ul>
              <li>
                <Link to={`/Counter/`}>Counter</Link>
              </li>
              <li>
                <Link to={`/App/`}>CreateUser/UserList</Link>
              </li>
            </ul>
      </>
    );
  }