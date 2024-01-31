// function handleBackend(){
//     app.post()
// }

function handleEdit(id) {
  //   console.log(event);

  const temp = document.getElementById(id);
  console.log(temp);

  var editValue = prompt("enter new responce");
  if (editValue != "") {
    temp.innerHTML = editValue;
  }
}

function handleDelete(id) {
  //   console.log("delete");
  const temp = document.getElementById(id);
  temp.parentElement.remove();
}

// var count = 0;
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  var value = document.getElementById("task").value;
  console.log(value);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Adjust the content type based on your API requirements
      // Add any other headers as needed
    },
    body: JSON.stringify({ value }), // Convert the data object to a JSON string
  };

  fetch("http://localhost:3004/", options).then((res) => {
    console.log(res);
  });

  var added = document.createElement("div");
  const id = Math.floor(Math.random() * 100);

  added.innerHTML =
    `<span id=${id}>${value}</span>` +
    `<button  class="btn btn-success" onclick = handleEdit(${id})>Edit</button>` +
    `<button  class="btn btn-danger" onclick= 'handleDelete(${id})'>Delete</button>`;

  document.getElementById("info").appendChild(added);

  console.log(value);
});
