// / Get references to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload 
    // Collect input values 
    var username = document.getElementById('userName').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var designation = document.getElementById('designation').value;
    var jobType = document.getElementById('jobType').value;
    var jobScale = document.getElementById('jobScale').value;
    var domecile = document.getElementById('domecile').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var academicInformation = document.getElementById('academic-information').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key  
    var resumeData = {
        firstName: firstName,
        lastName: lastName,
        designation: designation,
        jobType: jobType,
        jobScale: jobScale,
        domecile: domecile,
        phone: phone,
        email: email,
        academicInformation: academicInformation,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the  data locally 
    // Generate the resume content dynamically
    var resumeHTML = " \n <h2>Editable Resume</h2>\n\n <h3>Personal Information</h3> \n <p><b>First Name:</b> <span contenteditable=\"true\">".concat(firstName, "</span></p> \n <p><b>Last Name:</b> <span contenteditable=\"true\">").concat(lastName, "</span></p> \n <p><b>Job Designation:</b> <span contenteditable=\"true\">").concat(designation, "</span></p> \n <p><b>Job Type:</b> <span contenteditable=\"true\">").concat(jobType, "</span></p> \n <p><b>Job Scale:</b> <span contenteditable=\"true\">").concat(jobScale, "</span></p> \n <p><b>Domecile:</b> <span contenteditable=\"true\">").concat(domecile, "</span></p> \n <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n\n <h3>Academic Information</h3> \n <p contenteditable=\"true\">").concat(academicInformation, "</p> \n\n <h3>Experience</h3> \n <p contenteditable=\"true\">").concat(experience, "</p> \n\n <h3>Skills</h3> \n <p contenteditable=\"true\">").concat(skills, "</p> \n ");
    // Display the generated resume 
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only 
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link 
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download 
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save  as PDF 
});
// Prefill the form based on the username in the URL 
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage 
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('userName').value = username;
            document.getElementById('firstName').value = resumeData.firstName;
            document.getElementById('lsstName').value = resumeData.lastName;
            document.getElementById('designation').value;
            document.getElementById('jobType').value;
            document.getElementById('jobScale').value;
            document.getElementById('domecile').value;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('academic-information').value = resumeData.academicInformationn;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
