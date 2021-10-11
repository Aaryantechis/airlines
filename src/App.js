const axios = require("axios");

function App() {
  const api = axios.create({
    baseURL: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Make a request for a user with a given ID
  api
    .get("/")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
