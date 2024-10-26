const resizer = document.getElementById("resizer");
const container = document.getElementById("container");
const after = document.querySelector(".after");
const before = document.querySelector(".before");
resizer.addEventListener("mousedown", initResize);

function initResize(e) {
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
}

function resize(e) {
  const positon = e.clientX;
  const containerWidth = container.offsetWidth;
  const containerPositionafter = container.getBoundingClientRect().left;
  const afterWidth = positon - containerPositionafter;

  if (positon > containerPositionafter + containerWidth) {
    resizer.style.left = containerWidth + "px";
    after.style.width = containerWidth + "px";
    return;
  } else if (positon < containerPositionafter + 10) {
    resizer.style.left = 0 + "px";
    after.style.width = 0 + "px";
    return;
  }
  after.style.width = `${afterWidth}px`;
  resizer.style.left = `${afterWidth}px`;
}

function stopResize() {
  window.removeEventListener("mousemove", resize);
  window.removeEventListener("mouseup", stopResize);
}
