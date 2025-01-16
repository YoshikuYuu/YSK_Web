// JavaScript to handle project tab switching on hover
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const projects = document.querySelectorAll(".project");

  tabs.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      // Remove "active" class from all projects
      projects.forEach(project => project.classList.remove("active"));

      // Add "active" class to the hovered project
      const projectId = tab.getAttribute("data-project");
      document.getElementById(projectId).classList.add("active");
    });
  });
});
