// Local variable to store messages temporarily
let messages = {};  

$(() => {
    // Load messages from localStorage on page load
    loadAllMessagesFromLocalStorage();

    // Click on a contact to load their chat
    $('.contact').on('click', function() {
        const contactName = $(this).data('name');
        const contactId = $(this).data('id');
        $('#chat-with').text('Chatting with ' + contactName);
        $('#chat-with').data('contact-id', contactId); // Store the current contact ID
        loadMessages(contactId);
    });

    // Send a message
    $('#send-btn').on('click', function() {
        const message = $('#message-input').val();
        const contactId = $('#chat-with').data('contact-id');
        
        if (message.trim() !== '') {
            addMessage(contactId, message, 'sent');
            $('#message-input').val(''); // Clear input
        }
    });

    // Load messages for a specific contact from the localStorage
    function loadMessages(contactId) {
        $('#chat-body').empty(); // Clear chat window
        if (messages[contactId]) {
            messages[contactId].forEach(function(msg) {
                displayMessage(msg.content, msg.type);
            });
        }
    }

    // Add message to local JSON and localStorage
    function addMessage(contactId, content, type) {
        if (!messages[contactId]) {
            messages[contactId] = [];
        }
        messages[contactId].push({ content, type });
        displayMessage(content, type);
        saveMessagesToLocalStorage(contactId);  // Save updated messages to localStorage
    }

    // Display a message in the chat window
    function displayMessage(content, type) {
        const messageHtml = `<div class="message ${type}">
            <div class="content">${content}</div>
        </div>`;
        $('#chat-body').append(messageHtml);
        $('#chat-body').scrollTop($('#chat-body')[0].scrollHeight); // Scroll to bottom
    }

    // Save the messages for a specific contact to localStorage
    function saveMessagesToLocalStorage(contactId) {
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    // Load all messages from localStorage when the page is loaded
    function loadAllMessagesFromLocalStorage() {
        const storedMessages = localStorage.getItem('messages');
        if (storedMessages) {
            messages = JSON.parse(storedMessages);
        }
    }
});
