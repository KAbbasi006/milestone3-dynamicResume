document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate-btn");
    var downloadButton = document.getElementById("download-btn");
    generateButton.addEventListener("click", generateResume);
    downloadButton.addEventListener("click", downloadResume);
    function generateResume() {
        // Get input values
        var name = document.getElementById("name").value;
        var fatherName = document.getElementById("father-name").value;
        var designation = document.getElementById("designation").value;
        var aboutMe = document.getElementById("about-me").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var linkedin = document.getElementById("linkedin").value;
        var github = document.getElementById("github").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("experience").value;
        // Fill preview section
        document.getElementById("preview-personal-info").innerHTML = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n        <p><strong>Designation:</strong> ").concat(designation, "</p>\n        <p><strong>About Me:</strong> ").concat(aboutMe, "</p>\n      ");
        document.getElementById("preview-contact-info").innerHTML = "\n        <h3>Contact Information</h3>\n        <p><strong>Phone:</strong> ".concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>LinkedIn:</strong> ").concat(linkedin, "</p>\n        <p><strong>GitHub:</strong> ").concat(github, "</p>\n      ");
        document.getElementById("preview-education").innerHTML = "\n        <h3>Education</h3>\n        <p>".concat(education, "</p>\n      ");
        document.getElementById("preview-skills").innerHTML = "\n        <h3>Skills</h3>\n        <p>".concat(skills, "</p>\n      ");
        document.getElementById("preview-experience").innerHTML = "\n        <h3>Work Experience</h3>\n        <p>".concat(experience, "</p>\n      ");
        // Show preview and download button
        document.getElementById("resume-preview").style.display = "block";
        downloadButton.style.display = "block";
    }
    function downloadResume() {
        // Placeholder alert for download functionality
        alert("This would initiate a resume download as a PDF if implemented.");
    }
});
