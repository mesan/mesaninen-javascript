function parseJsonBody(response) {
    return response.json();
}

function throwIfResponseNotOk(response) {
    if (!response.ok) {
        return response.json().then(body => {
          throw new Error(`${response.status}: ${body}`);  
        });
    }

    return response;
}

function updateMessageView(message) {
    messageTextElement.innerText = message.text;
    messagePostedElement.innerText = message.posted;
}

// OPPGAVE A

// Element der meldingsteksten skal vises.
var messageTextElement = document.getElementById('messageText');

// Element der meldingstidspunktet skal vises.
var messagePostedElement = document.getElementById('messagePosted');

fetch('message.json')
    .then(throwIfResponseNotOk)
    .then(parseJsonBody)
    .then(updateMessageView)
    .catch(alert);

// ---
// OPPGAVE B OG C

// Skjema for posting av meldinger.
var updateMessageForm = document.getElementById('updateMessageForm');

// Input-element der bruker skriver inn meldinger.
var messageInput = updateMessageForm.messageInput;

// Lytter på når bruker har skrevet melding og trykket [Enter].
updateMessageForm.addEventListener('submit', messageSubmitted);

// Kalles når bruker har trykket [Enter].
function messageSubmitted(event) {
    // Forhindrer at nettleseren sender til server automatisk. Vi vil heller bruke fetch.
    event.preventDefault();

    fetch('message.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: messageInput.value
        })
    })
        .then(throwIfResponseNotOk)
        .then(parseJsonBody)
        .then(updateMessageView)
        .catch(alert);
}

// ...