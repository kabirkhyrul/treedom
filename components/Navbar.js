import Link from "next/link";
const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a className="navbar-brand">TreeDom</a>
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/country">
            <a className="nav-link">Country</a>
          </Link>
        </li>
       
      </ul>       
    </nav>
  );
};

export default Navbar;
