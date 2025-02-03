var resumeForm = document.getElementById('resumeForm');
var generateResumeButton = document.getElementById('generateResume');
// Event listener for generating the resume
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', function () {
    var formData = new FormData(resumeForm);
    var name = formData.get('name');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var education = formData.get('education');
    var experience = formData.get('experience');
    var skills = formData.get('skills');
    var resumeContent = "\n        <html>\n            <head>\n                <title>Generated Resume</title>\n                <link rel=\"stylesheet\" href=\"style.css\">\n            </head>\n            <body>\n                <div class=\"profile-preview\">\n                    <img id=\"profilePicPreview\" src=\"".concat(document.getElementById('profilePicPreview').src, "\" alt=\"Profile Picture Preview\" style=\"display:block; max-width:150px; height:auto;\">\n                </div>\n                <fieldset>\n                    <legend><i class=\"fas fa-user\"></i> Personal Info</legend>\n                    <h2>").concat(name, "</h2>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-graduation-cap\"></i> Education</legend>\n                    <p>").concat(education, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-briefcase\"></i> Experience</legend>\n                    <p>").concat(experience, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-tools\"></i> Skills</legend>\n                    <p>").concat(skills, "</p>\n                </fieldset>\n            </body>\n        </html>\n    ");
    // Open a new window and display the resume content
    var resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
        resumeWindow.document.write(resumeContent);
        resumeWindow.document.close();
    }
});
// Handle Profile Picture Preview
var profilePicInput = document.getElementById('profilePic');
var profilePicPreview = document.getElementById('profilePicPreview');
profilePicInput === null || profilePicInput === void 0 ? void 0 : profilePicInput.addEventListener('change', function (event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (profilePicPreview && e.target) {
                profilePicPreview.src = e.target.result;
                profilePicPreview.style.display = 'block';
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});
