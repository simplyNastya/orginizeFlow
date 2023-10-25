import NavbarMenuItems from "./NavbarMenuItems";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <NavbarMenuItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
