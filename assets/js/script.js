document.querySelector(".buttonCopy");

function copyCel() {
  let celular = "1123291864";
  navigator.clipboard
    .writeText(celular)
    .then(() => {
      let tooltip = document.getElementById("copy-tooltip");
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";

      setTimeout(() => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
