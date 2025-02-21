document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach((section, index) => {
    setTimeout(() => {
      Array.from(section.children).forEach((child) => {
        child.style.opacity = 1;
      });
    }, index * 300); // Adjust delay based on iteration
  });
});
