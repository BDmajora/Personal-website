function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});