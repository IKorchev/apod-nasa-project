const API_KEY = "CW9w2ngA4gOBwh4WpNgtZvvdGrUSP25jzvWL0b3P";
const image = document.querySelector(".nasaImg");
const video = document.querySelector(".nasaVideo");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const div = document.querySelector(".imgDiv");
const h2 = document.querySelector('.title')
const theDate = document.querySelector('.date')
const explanation = document.querySelector('.explanation')

const getImage = async () => {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${input.value}`
  );
  let res = await response.json()
  if (res.media_type == "image") {
  video.classList.add('displayNone')
  image.src = res.url
  image.classList.remove('displayNone')
  console.log(res)
  } else {
    image.classList.add('displayNone')
    video.classList.remove('displayNone')
    video.src = res.url
  }
  h2.textContent = res.title
  explanation.textContent = res.explanation
};

btn.addEventListener("click", (e) => {
  e.preventDefault()
  getImage();
  div.classList.remove('displayNone')
});
