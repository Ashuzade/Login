document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('#btn button');
    const newPasswordInput = document.querySelector('#new input');
    const confirmPasswordInput = document.querySelector('#confirm input');

    resetButton.addEventListener('click', function() {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword.length < 8) {
            alert('New password must be at least 8 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Password reset successful.');
        // Here you can add code to handle the actual password reset logic, e.g., sending the data to the server.
    });
});
