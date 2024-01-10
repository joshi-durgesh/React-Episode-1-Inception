/**
 * To crate nested elements like this
 *  <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 element</h1>
 *          <h2>This is h2 element</h2>
 *      </div>
 *  </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 element"),
    React.createElement("h2", {}, "This is h2 element"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
