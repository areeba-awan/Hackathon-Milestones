

const jsPDF = (window as any).jspdf.jsPDF;

document.getElementById("dynamic-resume")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById("contact") as HTMLInputElement;
    const urlElement = document.getElementById("url") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const usernameElement = document.getElementById("user_url") as HTMLInputElement;

    if (nameElement && emailElement && contactElement && urlElement && educationElement && skillsElement && experienceElement && usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const url = urlElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const username = usernameElement.value;

        // Create resume HTML output
        const resumeOutput = `
           
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
            <p><strong>LinkedIn:</strong> ${url}</p>
            <h1>Education:</h1>
            <p>${education}</p>
            <h1>Skills:</h1>
            <p>${skills}</p>
            <h1>Work Experience:</h1>
            <p>${experience}</p>
        `;

        // Display resume preview
        const resumePreviewElement = document.getElementById("resume-preview");
        if (resumePreviewElement) {
            resumePreviewElement.innerHTML = resumeOutput;
        }

        // Function to download PDF
        const downloadPdf = () => {
            const doc = new jsPDF();
            doc.setFontSize(16);
            doc.text("Resume", 20, 20);
            doc.setFontSize(12);
            doc.text(resumeOutput.replace(/<\/?[^>]+(>|$)/g, ""), 10, 30); // Convert HTML to text
            doc.save(`${username}_resume.pdf`);
        };

        // Function to share resume URL
        const shareResume = () => {
            const sharingLink = `https://${username.replace(/\s+/g, "_")}.example.com/resume`;
            navigator.clipboard.writeText(sharingLink).then(() => {
                alert('Resume URL copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy link:', err);
                alert('Failed to copy Resume URL to clipboard. Please try again.');
            });
        };

        // Add event listeners for buttons
        document.getElementById("downloadbtn")?.addEventListener("click", downloadPdf);
        document.getElementById("share-btn")?.addEventListener("click", shareResume);
    } else {
        console.error("One or more form elements are missing");
    }
});
