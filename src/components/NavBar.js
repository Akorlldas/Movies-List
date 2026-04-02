import Logo from "./Logo";

function NavBar({ Page, children }) {
  return (
    <nav className="nav-bar">
      <Logo Page={Page} />
      {children}
    </nav>
  );
}

export default NavBar;
