// get references to the form and display area

const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

// handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // collect input values
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value
    const designation = (document.getElementById('designation') as HTMLInputElement).value
    const jobType = (document.getElementById('jobType') as HTMLInputElement).value
    const jobScale = (document.getElementById('jobScale') as HTMLInputElement).value
    const domecile = (document.getElementById('domecile') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const academicInformation = (document.getElementById('academic information') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>First Name :</b><span contenteditable= "true"> ${firstName}</span></p>
    <p><b>Last Name :</b><span contenteditable= "true"> ${lastName}</span></p>
    <p><b>Job Designation :</b><span contenteditable= "true"> ${designation}</span></p>
    <p><b>Job Type :</b><span contenteditable= "true"> ${jobType}</span></p>
    <p><b>Job Scale :</b><span contenteditable= "true"> ${jobScale}</span></p>
    <p><b>Domecile :</b><span contenteditable= "true"> ${domecile}</span></p>
    <p><b>Contact number :</b><span contenteditable= "true"> ${phone}</span></p>
    <p><b>Email Address :</b><span contenteditable= "true"> ${email}</span></p>

     <h3>Academic Information</h3>
    <p contenteditable= "true">${academicInformation}</p>

    <h3>Experience</h3>
    <p contenteditable= "true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable= "true">${skills}</p>
    `;

    // display
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else{
        console.error('The resume display element is missing')
    }
});


