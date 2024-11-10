document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-btn") as HTMLButtonElement;
    const downloadButton = document.getElementById("download-btn") as HTMLButtonElement;
  
    generateButton.addEventListener("click", generateResume);
    downloadButton.addEventListener("click", downloadResume);
  
    function generateResume() {
      // Get input values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const fatherName = (document.getElementById("father-name") as HTMLInputElement).value;
      const designation = (document.getElementById("designation") as HTMLInputElement).value;
      const aboutMe = (document.getElementById("about-me") as HTMLTextAreaElement).value;
  
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const address = (document.getElementById("address") as HTMLInputElement).value;
      const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
      const github = (document.getElementById("github") as HTMLInputElement).value;
  
      const education = (document.getElementById("education") as HTMLInputElement).value;
      const skills = (document.getElementById("skills") as HTMLInputElement).value;
      const experience = (document.getElementById("experience") as HTMLInputElement).value;
  
      // Fill preview section
      document.getElementById("preview-personal-info")!.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>About Me:</strong> ${aboutMe}</p>
      `;
  
      document.getElementById("preview-contact-info")!.innerHTML = `
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>GitHub:</strong> ${github}</p>
      `;
  
      document.getElementById("preview-education")!.innerHTML = `
        <h3>Education</h3>
        <p>${education}</p>
      `;
  
      document.getElementById("preview-skills")!.innerHTML = `
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
  
      document.getElementById("preview-experience")!.innerHTML = `
        <h3>Work Experience</h3>
        <p>${experience}</p>
      `;
  
      // Show preview and download button
      document.getElementById("resume-preview")!.style.display = "block";
      downloadButton.style.display = "block";
    }
  
    function downloadResume() {
      // Placeholder alert for download functionality
      alert("This would initiate a resume download as a PDF if implemented.");
    }
  });
  