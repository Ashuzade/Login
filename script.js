document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('getstart');
    const googleButton = document.getElementById('google');
    const facebookButton = document.getElementById('facebook');

    signInButton.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="text"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;

        if (validateEmail(emailInput) && passwordInput) {
            alert('Sign in successful!');
            window.location.href = 'amazon.html';
        } else {
            alert('Please enter a valid email and password.');
        }
    });

    googleButton.addEventListener('click', () => {
        alert('Redirecting to Google sign-in...');
        function handleCredentialResponse(response) {
            // This is where you handle the credential response.
            console.log('Encoded JWT ID token: ' + response.credential);
            // You can send the token to your server for further processing.
        }

        window.onload = function () {
            google.accounts.id.initialize({
                client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
                callback: handleCredentialResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('googleButton'),
                { theme: 'outline', size: 'large' } // customization attributes
            );

            // Optional: automatic sign-in
            google.accounts.id.prompt();
        };

        document.getElementById('googleButton').addEventListener('click', () => {
            alert('Redirecting to Google sign-in...');
        });
       
    });
    


    facebookButton.addEventListener('click', () => {
        alert('Redirecting to Facebook sign-in...');
        window.fbAsyncInit = function() {
            FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook App ID
                cookie: true,
                xfbml: true,
                version: 'v12.0'
            });
    
            FB.AppEvents.logPageView();
        };
    
        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }
    
        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                console.log('User is logged in.');
                // User is logged in, you can get the user's info here
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                    // You can send the response to your server for further processing
                });
            } else {
                FB.login(function(response) {
                    if (response.authResponse) {
                        console.log('Welcome! Fetching your information....');
                        FB.api('/me', function(response) {
                            console.log('Good to see you, ' + response.name + '.');
                            // You can send the response to your server for further processing
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'public_profile,email'});
            }
        }
    
        document.getElementById('facebookButton').addEventListener('click', () => {
            alert('Redirecting to Facebook sign-in...');
            checkLoginState();
        });
        
    });

    
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('getstart');
    const googleButton = document.getElementById('google');
    const facebookButton = document.getElementById('facebook');

    signInButton.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="text"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;

        if (validateEmail(emailInput) && passwordInput) {
            alert('Sign in successful!');
            // Add actual sign-in logic here
        } else {
            alert('Please enter a valid email and password.');
        }
    });

    googleButton.addEventListener('click', () => {
        alert('Redirecting to Google sign-in...');
        function handleCredentialResponse(response) {
            // This is where you handle the credential response.
            console.log('Encoded JWT ID token: ' + response.credential);
            // You can send the token to your server for further processing.
        }

        window.onload = function () {
            google.accounts.id.initialize({
                client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
                callback: handleCredentialResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('googleButton'),
                { theme: 'outline', size: 'large' } // customization attributes
            );

            // Optional: automatic sign-in
            google.accounts.id.prompt();
        };

        document.getElementById('googleButton').addEventListener('click', () => {
            alert('Redirecting to Google sign-in...');
        });
       
    });
    


    facebookButton.addEventListener('click', () => {
        alert('Redirecting to Facebook sign-in...');
        window.fbAsyncInit = function() {
            FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook App ID
                cookie: true,
                xfbml: true,
                version: 'v12.0'
            });
    
            FB.AppEvents.logPageView();
        };
    
        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }
    
        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                console.log('User is logged in.');
                // User is logged in, you can get the user's info here
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                    // You can send the response to your server for further processing
                });
            } else {
                FB.login(function(response) {
                    if (response.authResponse) {
                        console.log('Welcome! Fetching your information....');
                        FB.api('/me', function(response) {
                            console.log('Good to see you, ' + response.name + '.');
                            // You can send the response to your server for further processing
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'public_profile,email'});
            }
        }
    
        document.getElementById('facebookButton').addEventListener('click', () => {
            alert('Redirecting to Facebook sign-in...');
            checkLoginState();
        });
        
    });

    
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleCreateAccount() {
    // Redirect to the sign-up page or show a sign-up form
    alert('Redirecting to sign-up page...');
    window.location.href = 'signup.html'; // Example redirect to signup page
}
