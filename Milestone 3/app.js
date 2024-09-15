// Selecting HTML elements (same as before)
var nameInput = document.getElementById('name');
var fatherNameInput = document.getElementById('fatherName');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var skillsInput = document.getElementById('skills');
var educationContainer = document.getElementById('education-container');
var addEducationBtn = document.getElementById('addEducationBtn');
var experienceContainer = document.getElementById('experience-container');
var addExperienceBtn = document.getElementById('addExperienceBtn');
var resumePreview = document.getElementById('resumePreview');
var generateBtn = document.getElementById('generateBtn');
var saveBtn = document.getElementById('saveBtn');
var downloadBtn = document.getElementById('downloadBtn');
var educationCounter = 0;
var experienceCounter = 0;
// Add new education fields (same as before)
if (addEducationBtn && educationContainer) {
    addEducationBtn.addEventListener('click', function () {
        educationCounter++;
        var educationField = "\n            <div class=\"education-entry\">\n                <label for=\"institute-".concat(educationCounter, "\">Institute Name:</label>\n                <input type=\"text\" id=\"institute-").concat(educationCounter, "\" placeholder=\"Enter your institute name\">\n                <label for=\"instituteAddress-").concat(educationCounter, "\">Institute Address:</label>\n                <input type=\"text\" id=\"instituteAddress-").concat(educationCounter, "\" placeholder=\"Enter your institute address\">\n                <label for=\"startDate-").concat(educationCounter, "\">Start Date:</label>\n                <input type=\"date\" id=\"startDate-").concat(educationCounter, "\">\n                <label for=\"endDate-").concat(educationCounter, "\">End Date:</label>\n                <input type=\"date\" id=\"endDate-").concat(educationCounter, "\">\n            </div>\n        ");
        educationContainer.innerHTML += educationField;
    });
}
// Add new experience fields (same as before)
if (addExperienceBtn && experienceContainer) {
    addExperienceBtn.addEventListener('click', function () {
        experienceCounter++;
        var experienceField = "\n            <div class=\"experience-entry\">\n                <label for=\"experience-".concat(experienceCounter, "\">Experience:</label>\n                <textarea id=\"experience-").concat(experienceCounter, "\" placeholder=\"Enter your experience\"></textarea>\n            </div>\n        ");
        experienceContainer.innerHTML += experienceField;
    });
}
// Generate the resume preview with editable sections
if (generateBtn && resumePreview) {
    generateBtn.addEventListener('click', generateResume);
    function generateResume() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var name = (_a = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) !== null && _a !== void 0 ? _a : '';
        var fatherName = (_b = fatherNameInput === null || fatherNameInput === void 0 ? void 0 : fatherNameInput.value) !== null && _b !== void 0 ? _b : '';
        var email = (_c = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) !== null && _c !== void 0 ? _c : '';
        var phone = (_d = phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) !== null && _d !== void 0 ? _d : '';
        var address = (_e = addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) !== null && _e !== void 0 ? _e : '';
        var skills = skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
        var educationEntries = '';
        for (var i = 1; i <= educationCounter; i++) {
            var institute = (_g = (_f = document.getElementById("institute-".concat(i))) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : '';
            var instituteAddress = (_j = (_h = document.getElementById("instituteAddress-".concat(i))) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : '';
            var startDate = (_l = (_k = document.getElementById("startDate-".concat(i))) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : '';
            var endDate = (_o = (_m = document.getElementById("endDate-".concat(i))) === null || _m === void 0 ? void 0 : _m.value) !== null && _o !== void 0 ? _o : '';
            educationEntries += "\n                <h3 contenteditable=\"true\" class=\"editable\">".concat(institute, "</h3>\n                <p contenteditable=\"true\" class=\"editable\">").concat(instituteAddress, " | ").concat(startDate, " - ").concat(endDate, "</p>\n            ");
        }
        var experienceEntries = '';
        for (var i = 1; i <= experienceCounter; i++) {
            var experience = (_q = (_p = document.getElementById("experience-".concat(i))) === null || _p === void 0 ? void 0 : _p.value) !== null && _q !== void 0 ? _q : '';
            experienceEntries += "<p contenteditable=\"true\" class=\"editable\">".concat(experience, "</p>");
        }
        var resumeHTML = "\n            <h2 contenteditable=\"true\" class=\"editable\">".concat(name, "</h2>\n            <p><strong>Father's Name:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(fatherName, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(phone, "</span></p>\n            <p><strong>Address:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(address, "</span></p>\n\n            <h2>Education</h2>\n            ").concat(educationEntries, "\n\n            <h2>Skills</h2>\n            <ul>").concat(skills.map(function (skill) { return "<li contenteditable=\"true\" class=\"editable\">".concat(skill, "</li>"); }).join(''), "</ul>\n\n            <h2>Experience</h2>\n            ").concat(experienceEntries, "\n        ");
        resumePreview.innerHTML = resumeHTML;
        // Make editable fields sync with inputs
        var editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(function (element, index) {
            element.addEventListener('input', function () {
                syncEditableFields();
            });
        });
    }
}
// Sync editable fields with input values
function syncEditableFields() {
    var nameElement = resumePreview === null || resumePreview === void 0 ? void 0 : resumePreview.querySelector('h2');
    var fatherNameElement = resumePreview === null || resumePreview === void 0 ? void 0 : resumePreview.querySelector('p span');
    var emailElement = resumePreview === null || resumePreview === void 0 ? void 0 : resumePreview.querySelector('p:nth-of-type(2) span');
    var phoneElement = resumePreview === null || resumePreview === void 0 ? void 0 : resumePreview.querySelector('p:nth-of-type(3) span');
    var addressElement = resumePreview === null || resumePreview === void 0 ? void 0 : resumePreview.querySelector('p:nth-of-type(4) span');
    if (nameInput && nameElement)
        nameInput.value = nameElement.innerText;
    if (fatherNameInput && fatherNameElement)
        fatherNameInput.value = fatherNameElement.innerText;
    if (emailInput && emailElement)
        emailInput.value = emailElement.innerText;
    if (phoneInput && phoneElement)
        phoneInput.value = phoneElement.innerText;
    if (addressInput && addressElement)
        addressInput.value = addressElement.innerText;
}
// Save edited resume back to local storage (same as before)
if (saveBtn) {
    saveBtn.addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f;
        var resumeData = {
            name: (_a = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) !== null && _a !== void 0 ? _a : '',
            fatherName: (_b = fatherNameInput === null || fatherNameInput === void 0 ? void 0 : fatherNameInput.value) !== null && _b !== void 0 ? _b : '',
            email: (_c = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) !== null && _c !== void 0 ? _c : '',
            phone: (_d = phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) !== null && _d !== void 0 ? _d : '',
            address: (_e = addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) !== null && _e !== void 0 ? _e : '',
            skills: (_f = skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) !== null && _f !== void 0 ? _f : '',
            education: getEducationData(),
            experience: getExperienceData(),
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert('Resume saved locally!');
    });
}
// Other functions remain unchanged...
// Function to get experience data
function getExperienceData() {
    var experiences = [];
    for (var i = 1; i <= experienceCounter; i++) {
        var experienceElement = document.getElementById("experience-".concat(i));
        if (experienceElement) {
            experiences.push(experienceElement.value);
        }
    }
    return experiences;
}
// Function to get education data (for completeness)
function getEducationData() {
    var educationEntries = [];
    for (var i = 1; i <= educationCounter; i++) {
        var instituteElement = document.getElementById("institute-".concat(i));
        var instituteAddressElement = document.getElementById("instituteAddress-".concat(i));
        var startDateElement = document.getElementById("startDate-".concat(i));
        var endDateElement = document.getElementById("endDate-".concat(i));
        if (instituteElement && instituteAddressElement && startDateElement && endDateElement) {
            educationEntries.push({
                institute: instituteElement.value,
                address: instituteAddressElement.value,
                startDate: startDateElement.value,
                endDate: endDateElement.value
            });
        }
    }
    return educationEntries;
}
// Call getExperienceData when needed
// For example, inside saveBtn event listener
if (saveBtn) {
    saveBtn.addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f;
        var resumeData = {
            name: (_a = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) !== null && _a !== void 0 ? _a : '',
            fatherName: (_b = fatherNameInput === null || fatherNameInput === void 0 ? void 0 : fatherNameInput.value) !== null && _b !== void 0 ? _b : '',
            email: (_c = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) !== null && _c !== void 0 ? _c : '',
            phone: (_d = phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) !== null && _d !== void 0 ? _d : '',
            address: (_e = addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) !== null && _e !== void 0 ? _e : '',
            skills: (_f = skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) !== null && _f !== void 0 ? _f : '',
            education: getEducationData(),
            experience: getExperienceData(),
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert('Resume saved locally!');
    });
}
