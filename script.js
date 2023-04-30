const textarea = document.querySelector(".search-bar");

textarea.addEventListener("click", () => {
  textarea.selectionStart = 0;
  textarea.selectionEnd = 0;
});
