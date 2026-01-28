// js/createAnnouncement.js

function createAnnouncement() {
    // Recupera i valori dai campi del form
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const tagInput = document.getElementById('tag').value.trim();
    
    // Validazione base
    if (!title) {
        alert('Per favore, inserisci un titolo');
        return;
    }
    
    if (!description) {
        alert('Per favore, inserisci una descrizione');
        return;
    }
    
    // Recupera l'utente corrente dal localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Devi effettuare il login per pubblicare un annuncio');
        return;
    }
    
    // Recupera i tag già aggiunti (se hai implementato la funzionalità dei tag)
    // Altrimenti puoi usare il singolo tag dall'input
    const tags = [];
    if (tagInput) {
        tags.push(tagInput);
    }
    
    // Crea l'oggetto annuncio
    const announcement = {
        id: Date.now(), // ID univoco basato sul timestamp
        title: title,
        description: description,
        tags: tags,
        createdAt: new Date().toISOString(),
        author: currentUser.username,
        authorId: currentUser.id,
        authorFullName: `${currentUser.name} ${currentUser.surname}`,
        views: 0, // Numero di visualizzazioni
        active: true // Stato dell'annuncio (attivo/scaduto)
    };
    
    // Recupera gli annunci esistenti da localStorage
    let announcements = [];
    const storedAnnouncements = localStorage.getItem('forumAnnouncements');
    if (storedAnnouncements) {
        try {
            announcements = JSON.parse(storedAnnouncements);
        } catch (e) {
            console.error('Errore nel parsing degli annunci esistenti:', e);
            announcements = [];
        }
    }
    
    // Aggiunge il nuovo annuncio
    announcements.push(announcement);
    
    // Salva nel localStorage
    try {
        localStorage.setItem('forumAnnouncements', JSON.stringify(announcements));
        alert('Annuncio pubblicato con successo!');
        
        // Reset del form
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('tag').value = '';
        
        // Reset dei tag aggiunti (se implementato)
        clearTags();
        
        // Reindirizza alla pagina del forum
        window.location.href = 'index.html';
        
    } catch (e) {
        console.error('Errore nel salvataggio dell\'annuncio:', e);
        
        // Verifica se l'errore è dovuto al limite di localStorage
        if (e.name === 'QuotaExceededError') {
            alert('Errore: hai superato il limite di spazio disponibile.');
        } else {
            alert('Errore nel salvataggio dell\'annuncio. Riprova.');
        }
    }
}

// Funzione per il pulsante Annulla
function cancelAnnouncement() {
    if (confirm('Sei sicuro di voler annullare? Tutti i dati inseriti verranno persi.')) {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('tag').value = '';
        
        // Reset dei tag aggiunti
        clearTags();
        
        // Torna alla pagina del forum
        window.location.href = 'index.html';
    }
}

// Array per memorizzare i tag aggiunti
let addedTags = [];

// Funzione per aggiungere un tag
function addTag() {
    const tagInput = document.getElementById('tag');
    const tagValue = tagInput.value.trim();
    
    if (!tagValue) {
        return;
    }
    
    // Verifica se il tag è già stato aggiunto
    if (addedTags.includes(tagValue)) {
        alert('Questo tag è già stato aggiunto');
        return;
    }
    
    // Aggiungi il tag all'array
    addedTags.push(tagValue);
    
    // Aggiorna la visualizzazione dei tag
    displayTags();
    
    // Pulisci l'input
    tagInput.value = '';
}

// Funzione per rimuovere un tag
function removeTag(tagValue) {
    addedTags = addedTags.filter(tag => tag !== tagValue);
    displayTags();
}

// Funzione per visualizzare i tag
function displayTags() {
    const tagsContainer = document.querySelector('.bg-base.opacity-75');
    
    if (addedTags.length === 0) {
        tagsContainer.innerHTML = '<p class="text-muted">Nessun tag aggiunto</p>';
        return;
    }
    
    tagsContainer.innerHTML = addedTags.map(tag => `
        <div class="btn-secondary btn btn-sm">
            ${tag} 
            <button onclick="removeTag('${tag}')" class="btn btn-sm btn-transparent text-base">x</button>
        </div>
    `).join(' ');
}

// Funzione per pulire tutti i tag
function clearTags() {
    addedTags = [];
    displayTags();
}

// Verifica se l'utente è loggato al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Devi effettuare il login per creare un annuncio');
        // Opzionale: reindirizza alla pagina principale
        // window.location.href = '../index.html';
    }
    
    // Inizializza la visualizzazione dei tag
    displayTags();
    
    // Aggiungi listener per il tasto Enter nell'input tag
    const tagInput = document.getElementById('tag');
    if (tagInput) {
        tagInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addTag();
            }
        });
    }
});