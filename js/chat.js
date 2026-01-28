// Chat functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elementi del DOM
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messagesContainer = document.getElementById('messagesContainer');
    const chatItems = document.querySelectorAll('.chat-item');
    const currentChatUser = document.getElementById('currentChatUser');
    
    // Dati delle chat (simulazione)
    let currentChat = 'Marco Rossi';
    let chats = {
        'Marco Rossi': [
            { text: 'Ciao! Hai gli appunti di matematica?', isMe: false, time: '10:30' },
            { text: 'Sì, te li mando subito!', isMe: true, time: '10:31' },
            { text: 'Perfetto, grazie mille! Mi servono per l\'esame di domani.', isMe: false, time: '10:32' },
            { text: 'Nessun problema! Buono studio 📚', isMe: true, time: '10:33' },
            { text: 'Grazie! Se hai bisogno di qualcosa anche tu fammi sapere!', isMe: false, time: '10:35' }
        ]
    };
    
    // Funzione per creare un messaggio HTML
    function createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = message.isMe ? 'msg-me' : 'msg-n-me';
        
        const messageText = document.createElement('p');
        messageText.className = 'm-0';
        messageText.textContent = message.text;
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'text-xs text-muted mt-1 block';
        timeSpan.textContent = message.time;
        
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(timeSpan);
        
        return messageDiv;
    }
    
    // Funzione per caricare i messaggi di una chat
    function loadChat(chatName) {
        currentChat = chatName;
        messagesContainer.innerHTML = '';
        
        // Aggiorna il nome utente in alto
        if (currentChatUser) {
            currentChatUser.textContent = chatName;
        }
        
        // Carica i messaggi
        if (chats[chatName]) {
            chats[chatName].forEach(message => {
                const messageElement = createMessageElement(message);
                messagesContainer.appendChild(messageElement);
            });
        }
        
        // Scroll automatico verso il basso
        scrollToBottom();
        
        // Rimuovi le notifiche dalla chat selezionata
        chatItems.forEach(item => {
            const userName = item.querySelector('span.font-bold').textContent;
            if (userName === chatName) {
                const badge = item.querySelector('.bg-error');
                if (badge) {
                    badge.remove();
                }
                // Evidenzia la chat attiva
                item.style.backgroundColor = 'rgba(255, 103, 0, 0.1)';
            } else {
                item.style.backgroundColor = '';
            }
        });
    }
    
    // Funzione per inviare un messaggio
    function sendMessage() {
        const messageText = messageInput.value.trim();
        
        if (messageText === '') {
            return;
        }
        
        // Crea il nuovo messaggio
        const currentTime = new Date().toLocaleTimeString('it-IT', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const newMessage = {
            text: messageText,
            isMe: true,
            time: currentTime
        };
        
        // Aggiungi il messaggio alla chat corrente
        if (!chats[currentChat]) {
            chats[currentChat] = [];
        }
        chats[currentChat].push(newMessage);
        
        // Aggiungi il messaggio al DOM
        const messageElement = createMessageElement(newMessage);
        messagesContainer.appendChild(messageElement);
        
        // Pulisci l'input
        messageInput.value = '';
        
        // Scroll automatico verso il basso
        scrollToBottom();
        
        // Simula una risposta dopo 2 secondi (opzionale)
        setTimeout(() => {
            simulateResponse();
        }, 2000);
    }
    
    // Funzione per simulare una risposta (opzionale)
    function simulateResponse() {
        const responses = [
            'Perfetto!',
            'Grazie mille!',
            'Ok, va bene!',
            'Ci sentiamo dopo!',
            'D\'accordo! 👍',
            'Ottimo, grazie!'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const currentTime = new Date().toLocaleTimeString('it-IT', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const responseMessage = {
            text: randomResponse,
            isMe: false,
            time: currentTime
        };
        
        chats[currentChat].push(responseMessage);
        
        const messageElement = createMessageElement(responseMessage);
        messagesContainer.appendChild(messageElement);
        
        scrollToBottom();
    }
    
    // Funzione per scroll automatico
    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Event listener per il pulsante di invio
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    // Event listener per invio con Enter
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Event listener per il cambio chat
    chatItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const userName = this.querySelector('span.font-bold').textContent;
            loadChat(userName);
        });
    });
    
    // Carica la chat iniziale
    if (currentChat) {
        loadChat(currentChat);
    }
    
    // Auto-focus sull'input
    if (messageInput) {
        messageInput.focus();
    }
});