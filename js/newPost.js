function createPost() {
    // Recupera i valori dai campi del form
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    
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
        alert('Devi effettuare il login per pubblicare un post');
        return;
    }
    
    // Ottieni i file caricati dall'uploadFiles.js
    const uploadedFilesData = getUploadedFiles();
    
    // Converti i file in un formato serializzabile per localStorage
    const files = [];
    if (uploadedFilesData && uploadedFilesData.length > 0) {
        uploadedFilesData.forEach(file => {
            files.push({
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            });
        });
    }
    
    // Crea l'oggetto post
    const post = {
        id: Date.now(), // ID univoco basato sul timestamp
        title: title,
        description: description,
        files: files,
        createdAt: new Date().toISOString(),
        author: currentUser.username,
        authorId: currentUser.id,
        authorFullName: `${currentUser.name} ${currentUser.surname}`,
        votes: 0
    };
    
    // Recupera i post esistenti da localStorage
    let posts = [];
    const storedPosts = localStorage.getItem('post');
    if (storedPosts) {
        try {
            posts = JSON.parse(storedPosts);
        } catch (e) {
            console.error('Errore nel parsing dei post esistenti:', e);
            posts = [];
        }
    }
    
    // Aggiunge il nuovo post
    posts.push(post);
    
    // Salva nel localStorage
    try {
        localStorage.setItem('post', JSON.stringify(posts));
        alert('Post pubblicato con successo!');
        
        // Reset del form
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        
        // Reset dei file caricati
        clearUploadedFiles();
        
        // Reindirizza alla pagina degli appunti
        window.location.href = 'index.html';
        
    } catch (e) {
        console.error('Errore nel salvataggio del post:', e);
        
        // Verifica se l'errore è dovuto al limite di localStorage
        if (e.name === 'QuotaExceededError') {
            alert('Errore: hai superato il limite di spazio disponibile. Prova a caricare meno file o file più piccoli.');
        } else {
            alert('Errore nel salvataggio del post. Riprova.');
        }
    }
}

// Funzione per il pulsante Annulla
function cancelPost() {
    if (confirm('Sei sicuro di voler annullare? Tutti i dati inseriti verranno persi.')) {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        
        // Reset dei file caricati
        clearUploadedFiles();
        
        // Torna alla pagina degli appunti
        window.location.href = 'index.html';
    }
}

// Verifica se l'utente è loggato al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Devi effettuare il login per creare un post');
        // Opzionale: reindirizza alla pagina principale
        // window.location.href = '../index.html';
    }
});