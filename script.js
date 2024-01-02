document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("uploadButton");
    const imageInput = document.getElementById("imageInput");
    const textContent = document.querySelector('.text-content');

    uploadButton.addEventListener("click", function () {
        imageInput.click();
    });

    imageInput.addEventListener("change", function () {
        const file = imageInput.files[0];

        if (file) {
           
            const successMessage = document.createElement("p");
            successMessage.classList.add("success-message");
            successMessage.textContent = "Image uploaded successfully!";
            textContent.appendChild(successMessage);

            
            const showReportsLink = document.createElement("a");
            showReportsLink.id = "showReportsLink";
            showReportsLink.textContent = "Generate Report";
            showReportsLink.href = `reports.html?fileName=${encodeURIComponent(file.name)}&fileType=${encodeURIComponent(file.type)}&fileSize=${file.size}&fileLastModified=${file.lastModified}`;
            
            
            textContent.appendChild(showReportsLink);
        }
    });
});

// these function are for report page

document.addEventListener("DOMContentLoaded", function () {
    const dateTimeElement = document.getElementById("dateTime");
    const recommendationButton = document.getElementById("recommendationButton");

    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
    const formattedDateTime = currentDate.toLocaleDateString("en-US", options);
    dateTimeElement.textContent = `Date and Time: ${formattedDateTime}`;

    recommendationButton.addEventListener("click", function () {
        
        window.location.href = "service.html"; 
    });
});

// these function are for service page
function showDoctorInfo(name, specialty) {
    const doctorInfoContainer = document.getElementById("doctorInfoContainer");

    // Create doctor info content
    const doctorInfoContent = `
        <div class="doctor-info">
            <h2>${name}</h2>
            <p>Specialty: ${specialty}</p>
            
            <!-- Buttons for booking appointment and chat -->
            <div class="doctor-info-buttons">
                <button onclick="redirectToAppointmentForm()">Book Appointment</button>
                <button onclick="startChat()">Start Chat</button>
            </div>
        </div>
    `;

    // Set the content and display the container
    doctorInfoContainer.innerHTML = doctorInfoContent;
    doctorInfoContainer.style.display = "flex";

    // Close the doctor info on clicking outside the info container
    doctorInfoContainer.addEventListener("click", function (event) {
        if (event.target === doctorInfoContainer) {
            doctorInfoContainer.style.display = "none";
        }
    });
}

function redirectToAppointmentForm() {
    // Redirect to the appointment form page
    window.location.href = "appointment.html";
}

function submitAppointmentForm() {
    // Add logic for handling the appointment form submission
    alert("Appointment has been made!");
    // You can add additional logic here to handle the form submission, e.g., send data to a server.
}

// thses function are for feedback page


//these function for appoinment 

function showSuccessMessage() {
    const form = document.querySelector('.appointment-form');
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Appointment has been made!';
    successMessage.classList.add('success-message');
    form.appendChild(successMessage);
}

function submitAppointmentForm() {
    // No form submission logic here
    showSuccessMessage();
}


