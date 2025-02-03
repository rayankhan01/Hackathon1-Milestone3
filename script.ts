
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

// Event listener for generating the resume
generateResumeButton?.addEventListener('click', () => {
    const formData = new FormData(resumeForm);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const education = formData.get('education') as string;
    const experience = formData.get('experience') as string;
    const skills = formData.get('skills') as string;

    const resumeContent = `
        <html>
            <head>
                <title>Generated Resume</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <div class="profile-preview">
                    <img id="profilePicPreview" src="${(document.getElementById('profilePicPreview') as HTMLImageElement).src}" alt="Profile Picture Preview" style="display:block; max-width:150px; height:auto;">
                </div>
                <fieldset>
                    <legend><i class="fas fa-user"></i> Personal Info</legend>
                    <h2>${name}</h2>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-graduation-cap"></i> Education</legend>
                    <p>${education}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-briefcase"></i> Experience</legend>
                    <p>${experience}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-tools"></i> Skills</legend>
                    <p>${skills}</p>
                </fieldset>
            </body>
        </html>
    `;

    // Open a new window and display the resume content
    const resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
        resumeWindow.document.write(resumeContent);
        resumeWindow.document.close();
    }
});

// Handle Profile Picture Preview
const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;

profilePicInput?.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            if (profilePicPreview && e.target) {
                profilePicPreview.src = e.target.result as string;
                profilePicPreview.style.display = 'block';
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
});
