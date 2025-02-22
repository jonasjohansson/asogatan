document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach((section, index) => {
    setTimeout(() => {
      Array.from(section.children).forEach((child) => {
        child.style.opacity = 1;
      });
    }, index * 300); // Adjust delay based on iteration
  });
});
function setViewportHeight() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}

window.addEventListener("resize", setViewportHeight);
window.addEventListener("orientationchange", setViewportHeight);
setViewportHeight();
