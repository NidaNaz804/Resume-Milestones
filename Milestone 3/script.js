// get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var designation = document.getElementById('designation').value;
    var jobType = document.getElementById('jobType').value;
    var jobScale = document.getElementById('jobScale').value;
    var domecile = document.getElementById('domecile').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var academicInformation = document.getElementById('academic information').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>First Name :</b> ".concat(firstName, "</p>\n    <p><b>Last Name :</b> ").concat(lastName, "</p>\n    <p><b>Job Designation :</b> ").concat(designation, "</p>\n    <p><b>Job Type :</b> ").concat(jobType, "</p>\n    <p><b>Job scale :</b> ").concat(jobScale, "</p>\n    <p><b>Domecile :</b> ").concat(domecile, "</p>\n    <p><b>Contact number :</b> ").concat(phone, "</p>\n    <p><b>Email Address :</b> ").concat(email, "</p>\n\n     <h3>Academic Information</h3>\n    <p>").concat(academicInformation, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skils</h3>\n    <p>").concat(skills, "</p>\n    ");
    // display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
