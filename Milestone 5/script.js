var _a;
var jsPDF = window.jspdf.jsPDF;
(_a = document.getElementById("dynamic-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactElement = document.getElementById("contact");
    var urlElement = document.getElementById("url");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var usernameElement = document.getElementById("user_url");
    if (nameElement && emailElement && contactElement && urlElement && educationElement && skillsElement && experienceElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var url = urlElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var username_1 = usernameElement.value;
        // Create resume HTML output
        var resumeOutput_1 = "\n           \n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n            <p><strong>LinkedIn:</strong> ").concat(url, "</p>\n            <h1>Education:</h1>\n            <p>").concat(education, "</p>\n            <h1>Skills:</h1>\n            <p>").concat(skills, "</p>\n            <h1>Work Experience:</h1>\n            <p>").concat(experience, "</p>\n        ");
        // Display resume preview
        var resumePreviewElement = document.getElementById("resume-preview");
        if (resumePreviewElement) {
            resumePreviewElement.innerHTML = resumeOutput_1;
        }
        // Function to download PDF
        var downloadPdf = function () {
            var doc = new jsPDF();
            doc.setFontSize(16);
            doc.text("Resume", 20, 20);
            doc.setFontSize(12);
            doc.text(resumeOutput_1.replace(/<\/?[^>]+(>|$)/g, ""), 10, 30); // Convert HTML to text
            doc.save("".concat(username_1, "_resume.pdf"));
        };
        // Function to share resume URL
        var shareResume = function () {
            var sharingLink = "https://".concat(username_1.replace(/\s+/g, "_"), ".example.com/resume");
            navigator.clipboard.writeText(sharingLink).then(function () {
                alert('Resume URL copied to clipboard!');
            }).catch(function (err) {
                console.error('Failed to copy link:', err);
                alert('Failed to copy Resume URL to clipboard. Please try again.');
            });
        };
        // Add event listeners for buttons
        (_a = document.getElementById("downloadbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", downloadPdf);
        (_b = document.getElementById("share-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", shareResume);
    }
    else {
        console.error("One or more form elements are missing");
    }
});
