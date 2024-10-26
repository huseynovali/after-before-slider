const resizer = document.getElementById("resizer");
const container = document.getElementById("container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
resizer.addEventListener("mousedown", initResize);

function initResize(e) {
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
}

function resize(e) {
  const positon = e.clientX;
  const containerWidth = container.offsetWidth;
  const containerPositionLeft = container.getBoundingClientRect().left;
  const leftWidth = positon - containerPositionLeft;

  if (positon > containerPositionLeft + containerWidth) {
    resizer.style.left = containerWidth - 10 + "px";
    left.style.width = containerWidth + "px";
    return;
  } else if (positon < containerPositionLeft + 10) {
    resizer.style.left = 0 + "px";
    left.style.width = 0 + "px";
    return;
  }
  left.style.width = `${leftWidth}px`;
  resizer.style.left = `${leftWidth}px`;
}

function stopResize() {
  window.removeEventListener("mousemove", resize);
  window.removeEventListener("mouseup", stopResize);
}
