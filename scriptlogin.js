const users = [
  { role: "team", username: "teamuser", password: "teampass" },
  { role: "manager", username: "manageruser", password: "managerpass" },
  { role: "client", username: "clientuser", password: "clientpass" },
];

function login() {
  // Get values from the form
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform login logic
  const user = users.find(
    (u) => u.role === role && u.username === username && u.password === password
  );

  if (user) {
    // Redirect to index.html after successful login
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}
