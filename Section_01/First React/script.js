//ReactDOM.render(<h1>Hello mfs</h1>, document.getElementById("root"));
// this is the old way - react 17 way

//react 18 way:

const navbar = (
  <nav>
    <h1>Navbar</h1>
    <ul>
      <li>Pricing</li>
      <li>Contacts</li>
      <li>About</li>
    </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);
