const counter = document.querySelector(".counter");

async function updateCounter() {
  let response = await fetch ("https://oxovp5y5j3ifmuplkxpbyumvjq0koyqe.lambda-url.us-east-1.on.aws/")
  let data = await response.json()
  counter.textContent = data;
}

updateCounter(); // Call the function to update the counter when the page loads
