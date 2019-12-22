"use strict";

console.log("app");
var app = {
  title: "Indecession App",
  subTitle: "Put your life in the hands of computer",
  options: ["one", "two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "item one"
    ),
    React.createElement(
      "li",
      null,
      "item two"
    )
  )
);
var user = {
  name: "Surya",
  age: 22,
  location: "India"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return undefined;
  }
}
// var userName = "Surya Datta";
// var userAge = 22;
// var userLocation = "India";
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);
