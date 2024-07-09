import "../styles/navbar.css"

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">register</Link>
        </li>
      </ul>
    </nav>
  );
}
