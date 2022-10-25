//ReactDOM.render(<h1>Hello mfs</h1>, document.getElementById("root"));
// this is the old way - react 17 way
//react 18 way:

// const navbar = (
//   <nav>
//     <h1>Navbar</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>Contacts</li>
//       <li>About</li>
//     </ul>
//   </nav>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);

import React from "react";
import ReactDOM from "react-dom ";

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

// ReactDOM.createRoot(document.getElementById("root")).render(page);
ReactDOM.render(page, document.getElementById("root"));
