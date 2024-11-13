function generatePortfolio() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value.split(",");
  
    // Generate portfolio HTML
    const portfolioHTML = `
      <div>
        <h1>${name}</h1>
        <h2>${profession}</h2>
        <p>${bio}</p>
        <h3>Skills</h3>
        <ul>
          ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>
      </div>
    `;
  
    // Display the preview
    document.getElementById("portfolioPreview").innerHTML = portfolioHTML;
    document.getElementById("previewContainer").style.display = "block";
  }
  
  function downloadPortfolio() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value.split(",");
  
    const portfolioHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
      body { font-family: Arial, sans-serif; }
      h1, h2 { color: #333; }
      ul { list-style: none; padding: 0; }
    </style>
  </head>
  <body>
    <h1>${name}</h1>
    <h2>${profession}</h2>
    <p>${bio}</p>
    <h3>Skills</h3>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
    </ul>
  </body>
  </html>
    `;
  
    // Create a blob and download it as an HTML file
    const blob = new Blob([portfolioHTML], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name.toLowerCase().replace(/ /g, "_")}_portfolio.html`;
    link.click();
  }
  