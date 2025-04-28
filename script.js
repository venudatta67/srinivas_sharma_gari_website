function switchToTelugu() {
  document.getElementById("english-section").style.display = "none";
  document.querySelector(".pujari-info").style.display = "none";
  document.querySelector(".ritual-info").style.display = "none";
  document.querySelector(".youtube-section").style.display = "none";
  document.getElementById("telugu-full-section").style.display = "block";
}

function switchToEnglish() {
  document.getElementById("telugu-full-section").style.display = "none";
  document.getElementById("english-section").style.display = "block";
  document.querySelector(".pujari-info").style.display = "block";
  document.querySelector(".ritual-info").style.display = "block";
  document.querySelector(".youtube-section").style.display = "block";
}
