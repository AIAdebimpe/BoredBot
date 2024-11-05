
console.log('This is the first console log')

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     document.getElementById("dog_image").innerHTML = 
//     `<img src="${data.message}" alt="image of a dog"/>`;
//   })
//   .catch(error => console.error('Error fetching the image:', error));

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then(response => response.json())
//   .then(data => 
//   {
//     console.log(data)
//     document.getElementById("activity").innerHTML = `${data.activity}`;
//   }
//   )
//   .catch(error => console.error('Error fetching the activity:', error));

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
          console.log(data)
          document.getElementById("activity").textContent = data.activity;
          document.getElementById("title").textContent = "🦾 HappyBot🦿";
          document.querySelector("main").classList.add("fun");
      })
      .catch(error => console.error('Error fetching the activity:', error));
  }
)});