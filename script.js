const dropArea = document.querySelector(".drag-files");

dropArea.addEventListener("dragover", () => {
  dropArea.classList.add("dragover");
});
