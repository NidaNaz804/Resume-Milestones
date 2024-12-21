// / Get references to the form and display area 
const form = document.getElementById('resume-form') as HTMLFormElement; const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement; 
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement; 
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement; 
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement; 
// Handle form submission 
form.addEventListener('submit', (event: Event) => { 
 event.preventDefault(); // prevent page reload 
 // Collect input values 
const username = (document.getElementById('userName') as HTMLInputElement).value; 
const firstName = (document.getElementById('firstName') as HTMLInputElement).value; 
const lastName = (document.getElementById('lastName') as HTMLInputElement).value; 
const designation = (document.getElementById('designation') as HTMLInputElement).value; 
const jobType = (document.getElementById('jobType') as HTMLInputElement).value; 
const jobScale = (document.getElementById('jobScale') as HTMLInputElement).value; 
const domecile = (document.getElementById('domecile') as HTMLInputElement).value; 
const phone = (document.getElementById('phone') as HTMLInputElement).value; 
const email = (document.getElementById('email') as HTMLInputElement).value;  
const academicInformation = (document.getElementById('academic-information') as HTMLTextAreaElement).value; 
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value; 
const skills = (document.getElementById('skills') as 
HTMLTextAreaElement).value; 
 // Save form data in localStorage with the username as the key  
 const resumeData = { 
 firstName,
 lastName,
 designation,
 jobType,
 jobScale,
 domecile,  
 phone,
 email, 
 academicInformation, 
 experience, 
 skills 
 }; 
 localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the  data locally 
 // Generate the resume content dynamically
 const resumeHTML = ` 
 <h2>Editable Resume</h2>

 <h3>Personal Information</h3> 
 <p><b>First Name:</b> <span contenteditable="true">${firstName}</span></p> 
 <p><b>Last Name:</b> <span contenteditable="true">${lastName}</span></p> 
 <p><b>Job Designation:</b> <span contenteditable="true">${designation}</span></p> 
 <p><b>Job Type:</b> <span contenteditable="true">${jobType}</span></p> 
 <p><b>Job Scale:</b> <span contenteditable="true">${jobScale}</span></p> 
 <p><b>Domecile:</b> <span contenteditable="true">${domecile}</span></p> 
 <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
 <p><b>Email:</b> <span contenteditable="true">${email}</span></p>

 <h3>Academic Information</h3> 
 <p contenteditable="true">${academicInformation}</p> 

 <h3>Experience</h3> 
 <p contenteditable="true">${experience}</p> 

 <h3>Skills</h3> 
 <p contenteditable="true">${skills}</p> 
 `; 
 // Display the generated resume 
 resumeDisplayElement.innerHTML = resumeHTML; 
 // Generate a shareable URL with the username only 
 const shareableURL = 
`${window.location.origin}?username=${encodeURIComponent(username)}`; 
 // Display the shareable link 
 shareableLinkContainer.style.display = 'block'; 
 shareableLinkElement.href = shareableURL; 
 shareableLinkElement.textContent = shareableURL; 
}); 
// Handle PDF download 
downloadPdfButton.addEventListener('click', () => { 
 window.print(); // This will open the print dialog and allow the user to save  as PDF 
}); 
// Prefill the form based on the username in the URL 
window.addEventListener('DOMContentLoaded', () => { 
 const urlParams = new URLSearchParams(window.location.search);  const username = urlParams.get('username'); 
 if (username) {
 // Autofill form if data is found in localStorage 
 const savedResumeData = localStorage.getItem(username); 
 if (savedResumeData) { 
 const resumeData = JSON.parse(savedResumeData); 
 (document.getElementById('userName') as HTMLInputElement).value = username; 
 (document.getElementById('firstName') as HTMLInputElement).value = resumeData.firstName;
 (document.getElementById('lsstName') as HTMLInputElement).value = resumeData.lastName; 
 (document.getElementById('designation') as HTMLInputElement).value; 
 (document.getElementById('jobType') as HTMLInputElement).value; 
 (document.getElementById('jobScale') as HTMLInputElement).value; 
 (document.getElementById('domecile') as HTMLInputElement).value; 
 (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
 (document.getElementById('email') as HTMLInputElement).value = resumeData.email; 
 (document.getElementById('academic-information') as HTMLTextAreaElement).value = resumeData.academicInformationn; 
 (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience; 
 (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills; 
 } 
 } 
});

