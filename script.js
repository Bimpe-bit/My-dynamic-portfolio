// Task 1: Dynamic Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Task 2: Skill Description
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
  "HTML": "HTML defines the structure of web content.",
  "CSS": "CSS styles the visual layout of web pages.",
  "JavaScript": "JavaScript adds interactivity to websites."
};

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.dataset.skill;
    skillDescription.textContent = skillInfo[skill];
    skillDescription.style.color = '#0056b3';
  });
});

// Task 3: Dark Mode
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Task 4: Load JSON Projects
const projectsContainer = document.getElementById('projects-container');

async function loadProjects() {
  try {
    const response = await fetch('data/portfolio_items.json');
    const projects = await response.json();

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsContainer.appendChild(card);
    });
  } catch (error) {
    projectsContainer.innerHTML = '<p>Could not load projects.</p>';
  }
}

window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
  loadProjects();
});
