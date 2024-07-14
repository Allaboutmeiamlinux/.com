// Bot token
var telegram_bot_id = "7239458839:AAHTXtF23O2Zfe7q1OSOTtpQvbCjXCflFAg";
// Chat ID
var chat_id = 5541151768;

var u_name, email, message;

var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        showResponseMessage("Message sent successfully!");
    }).fail(function (error) {
        showResponseMessage("Failed to send message. Please try again.");
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};

var showResponseMessage = function (message) {
    var responseMessageDiv = document.getElementById("responseMessage");
    responseMessageDiv.textContent = message;
    responseMessageDiv.classList.remove("hidden");
    setTimeout(function () {
        responseMessageDiv.classList.add("hidden");
    }, 5000); // Hide after 5 seconds
};

function toggleMobileMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-menu-open');
}
