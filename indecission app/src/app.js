console.log("app");
var app = {
  title: "Indecession App",
  subTitle: "this is info!!!!"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);
var user = {
  name: "Surya",
  age: 23,
  location: "India"
};
// var userName = "Surya Datta";
// var userAge = 22;
// var userLocation = "India";
var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);
