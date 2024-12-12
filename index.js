document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
  
    const projectList = document.getElementById("project-list");
  
    const projects = [
      { name: "MyPortfolio", description: "A personalized portfolio showcasing projects and skills, built with HTML, CSS, and JavaScript.", url: "https://github.com/MAHMADTAHIR/MyPortfolio" },
      { name: "WeatherApp", description: "A simple weather application built with HTML, CSS, and JavaScript that fetches real-time weather data using a weather API. Get current weather updates for any location!", url: "https://github.com/MAHMADTAHIR/WeatherApp" },
      { name: "SimpleToDoList", description: "A straightforward To-Do List application using HTML, CSS, and JavaScript. Easily add, edit, and delete tasks to keep your day organized.", url: "https://github.com/MAHMADTAHIR/SimpleToDoList" },
      { name: "ExpenseTracker", description: "A user-friendly expense tracker app built with HTML, CSS, and JavaScript. Effortlessly manage and monitor your expenses with a simple interface.", url: "https://github.com/MAHMADTAHIR/ExpenseTracker" },
      { name: "PercentageCalc ", description: "A simple percentage calculator created with HTML, CSS, and JavaScript. Quickly calculate percentages with an easy-to-use interface.", url: "https://github.com/MAHMADTAHIR/PercentageCalc" },
      { name: "DigitalBizCard", description: "A digital business card template built with HTML, CSS, and JavaScript. Easily customizable for personal branding and networking.", url: "https://github.com/MAHMADTAHIR/DigitalBizCard" },
      { name: "ColorSpark ", description: "A simple Color Palette Generator using HTML, CSS, and JavaScript. Instantly create and copy custom color schemes for design projects.", url: "https://github.com/MAHMADTAHIR/ColorSpark" },
      { name: "Simple-ToDo-App ", description: "A simple To-Do List app using HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks. Ideal for beginners to practice front-end basics.", url: "https://github.com/MAHMADTAHIR/Simple-ToDo-App" },
    ];
  
    projects.forEach(project => {
      const projectItem = document.createElement("li");
      projectItem.classList.add("project");
  
      projectItem.innerHTML = `
        <a href="${project.url}" target="_blank"><strong>${project.name}</strong></a> - ${project.description}
      `;
  
      projectList.appendChild(projectItem);
    });
  });
    
