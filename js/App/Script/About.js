import About from "../../Data/about.js";

const renderAbout = _ => {

  const placeText = document.querySelector('.about-me');
  placeText.innerHTML = About.text;

  // console.log(placeText);

}

export default renderAbout;