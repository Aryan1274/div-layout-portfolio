document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainContent");

  const contentMap = {
    home: `<h2>Home</h2><p>Welcome to the homepage. This section contains general information.</p>`,
    about: `<h2>About</h2><p>This section includes information about our company, goals, and team.</p>`,
    projects: `<h2>Projects</h2><p>Here are the current and past projects we are working on.</p>`,
    contact: `<h2>Contact</h2><p>Feel free to reach out via email, phone, or our support form.</p>`,

    dashboard: `<h2>Dashboard</h2><p>This section provides a quick overview of key performance metrics.</p>`,
    notifications: `<h2>Notifications</h2><p>All recent system notifications and alerts will be displayed here.</p>`,
    activity: `<h2>Activity</h2><p>Here’s a timeline of user and system activities.</p>`,

    team: `<h2>Team</h2><p>Meet our dedicated team members behind the project.</p>`,
    company: `<h2>Company</h2><p>We are a tech-driven company with a passion for innovation.</p>`,
    careers: `<h2>Careers</h2><p>Join our team! View open roles and apply here.</p>`,

    current: `<h2>Current Projects</h2><p>Ongoing projects and their latest updates are listed here.</p>`,
    archived: `<h2>Archived Projects</h2><p>Explore our previously completed projects.</p>`,
    new: `<h2>New Project</h2><p>Start a new project from this section.</p>`,

    email: `<h2>Email</h2><p>Contact us via support@example.com.</p>`,
    phone: `<h2>Phone</h2><p>Call us at +91-12345-67890.</p>`,
    support: `<h2>Support</h2><p>Submit a support ticket or explore FAQs here.</p>`
  };

  // Attach click listeners to all elements with data-target
  document.querySelectorAll('[data-target]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const key = item.getAttribute('data-target');
      mainContent.innerHTML = contentMap[key] || `<h2>Not Found</h2><p>No content available for this section.</p>`;
    });
  });
});
