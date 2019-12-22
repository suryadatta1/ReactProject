console.log("app");
var app = {
  title: "Indecession App",
  subTitle: "Put your life in the hands of computer",
  options: ["one", "two"]
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);
var user = {
  name: "Surya",
  age: 22,
  location: "India"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}
// var userName = "Surya Datta";
// var userAge = 22;
// var userLocation = "India";
var template2 = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);
