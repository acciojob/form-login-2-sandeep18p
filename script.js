//your JS code here. If required.
function getFormvalue() {
            var firstName = document.querySelector('input[name="First Name"]').value;
            var lastName = document.querySelector('input[name="Last Name"]').value;
            var phoneNumber = document.querySelector('input[name="Phone Number"]').value;
            var emailID = document.querySelector('input[name="Email ID"]').value;

            var alertMessage = "First Name: " + firstName + " Last Name: " + lastName + " Phone Number: " + phoneNumber + " Email ID: " + emailID;
            alert(alertMessage);
        }