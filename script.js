function submitForm() {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const email = document.getElementById("email").value;

            const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;
            alert(alertMessage);

            // // Returning false prevents form submission
            // return false;
        }
