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
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>First Name :</b><span contenteditable= \"true\"> ".concat(firstName, "</span></p>\n    <p><b>Last Name :</b><span contenteditable= \"true\"> ").concat(lastName, "</span></p>\n    <p><b>Job Designation :</b><span contenteditable= \"true\"> ").concat(designation, "</span></p>\n    <p><b>Job Type :</b><span contenteditable= \"true\"> ").concat(jobType, "</span></p>\n    <p><b>Job Scale :</b><span contenteditable= \"true\"> ").concat(jobScale, "</span></p>\n    <p><b>Domecile :</b><span contenteditable= \"true\"> ").concat(domecile, "</span></p>\n    <p><b>Contact number :</b><span contenteditable= \"true\"> ").concat(phone, "</span></p>\n    <p><b>Email Address :</b><span contenteditable= \"true\"> ").concat(email, "</span></p>\n\n     <h3>Academic Information</h3>\n    <p contenteditable= \"true\">").concat(academicInformation, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable= \"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable= \"true\">").concat(skills, "</p>\n    ");
    // display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
