const subArea = document.getElementById("subjectarea");
const userArea = document.getElementById("userarea");
const dataArea = document.getElementById("dataarea");

// Dati degli appunti incorporati direttamente
const postsData = {
  "posts": [
    {
      "id": 1,
      "title": "Algoritmi di Ordinamento",
      "description": "Appunti completi sugli algoritmi di ordinamento: Bubble Sort, Quick Sort, Merge Sort con analisi della complessità temporale e spaziale. Include esempi pratici e pseudocodice.",
      "subject": "Informatica",
      "author": "m.rossi",
      "authorFullName": "Marco Rossi",
      "votes": 15,
      "createdAt": "2026-01-25T10:30:00Z",
      "files": [
        {
          "name": "algoritmi_ordinamento.pdf",
          "type": "application/pdf"
        },
        {
          "name": "esempi_codice.zip",
          "type": "application/zip"
        }
      ]
    },
    {
      "id": 2,
      "title": "Seconda Guerra Mondiale - Riassunto",
      "description": "Riassunto dettagliato della Seconda Guerra Mondiale: cause, eventi principali, conseguenze. Dall'invasione della Polonia alla resa del Giappone.",
      "subject": "Storia",
      "author": "g.bianchi",
      "authorFullName": "Giulia Bianchi",
      "votes": 23,
      "createdAt": "2026-01-24T14:20:00Z",
      "files": [
        {
          "name": "seconda_guerra_mondiale.pdf",
          "type": "application/pdf"
        },
        {
          "name": "cronologia_eventi.docx",
          "type": "application/word"
        },
        {
          "name": "mappe_storiche.zip",
          "type": "application/zip"
        }
      ]
    },
    {
      "id": 3,
      "title": "Derivate e Integrali",
      "description": "Formulario completo su derivate e integrali. Regole di derivazione, integrali notevoli, tecniche di integrazione per sostituzione e per parti.",
      "subject": "Matematica",
      "author": "l.verdi",
      "authorFullName": "Luca Verdi",
      "votes": 31,
      "createdAt": "2026-01-23T09:15:00Z",
      "files": [
        {
          "name": "formulario_analisi.pdf",
          "type": "application/pdf"
        },
        {
          "name": "esercizi_svolti.pdf",
          "type": "application/pdf"
        }
      ]
    },
    {
      "id": 4,
      "title": "Il Verbo Inglese - Tempi e Modi",
      "description": "Guida completa ai tempi verbali inglesi: presente, passato, futuro con tutti i loro aspetti (simple, continuous, perfect). Include tabelle riassuntive ed esempi.",
      "subject": "Inglese",
      "author": "s.ferrara",
      "authorFullName": "Sara Ferrara",
      "votes": 18,
      "createdAt": "2026-01-22T16:45:00Z",
      "files": [
        {
          "name": "tempi_verbali_inglesi.pdf",
          "type": "application/pdf"
        },
        {
          "name": "tabella_riepilogativa.xlsx",
          "type": "application/excel"
        }
      ]
    },
    {
      "id": 5,
      "title": "Genetica Mendeliana",
      "description": "Appunti sulle leggi di Mendel, ereditarietà dei caratteri, quadrati di Punnett. Include schemi ed esempi di problemi genetici risolti.",
      "subject": "Biologia",
      "author": "a.russo",
      "authorFullName": "Alessandro Russo",
      "votes": 12,
      "createdAt": "2026-01-21T11:30:00Z",
      "files": [
        {
          "name": "genetica_mendel.pdf",
          "type": "application/pdf"
        },
        {
          "name": "schemi_ereditarieta.png",
          "type": "image/png"
        }
      ]
    },
    {
      "id": 6,
      "title": "Termodinamica - Primo e Secondo Principio",
      "description": "Appunti sui principi della termodinamica: lavoro, calore, energia interna, entropia. Con formule fondamentali e applicazioni pratiche.",
      "subject": "Fisica",
      "author": "f.colombo",
      "authorFullName": "Francesco Colombo",
      "votes": 27,
      "createdAt": "2026-01-20T13:00:00Z",
      "files": [
        {
          "name": "termodinamica.pdf",
          "type": "application/pdf"
        },
        {
          "name": "esercizi_termodinamica.pdf",
          "type": "application/pdf"
        },
        {
          "name": "formulario.docx",
          "type": "application/word"
        }
      ]
    },
    {
      "id": 7,
      "title": "Database Relazionali e SQL",
      "description": "Introduzione ai database relazionali, progettazione ER, normalizzazione. Query SQL: SELECT, JOIN, GROUP BY, subquery. Include esempi pratici.",
      "subject": "Informatica",
      "author": "m.marino",
      "authorFullName": "Maria Marino",
      "votes": 20,
      "createdAt": "2026-01-19T15:30:00Z",
      "files": [
        {
          "name": "sql_tutorial.pdf",
          "type": "application/pdf"
        },
        {
          "name": "esempi_query.txt",
          "type": "text/plain"
        },
        {
          "name": "schema_database.png",
          "type": "image/png"
        }
      ]
    },
    {
      "id": 8,
      "title": "L'Illuminismo",
      "description": "Il movimento illuminista del XVIII secolo: filosofi principali (Voltaire, Rousseau, Montesquieu), idee fondamentali, impatto sulla società europea.",
      "subject": "Filosofia",
      "author": "e.gallo",
      "authorFullName": "Elena Gallo",
      "votes": 9,
      "createdAt": "2026-01-18T10:00:00Z",
      "files": [
        {
          "name": "illuminismo.pdf",
          "type": "application/pdf"
        }
      ]
    },
    {
      "id": 9,
      "title": "Reazioni Chimiche e Stechiometria",
      "description": "Bilanciamento delle reazioni chimiche, calcoli stechiometrici, reagente limitante, resa percentuale. Con esercizi risolti passo per passo.",
      "subject": "Chimica",
      "author": "d.conti",
      "authorFullName": "Davide Conti",
      "votes": 16,
      "createdAt": "2026-01-17T14:15:00Z",
      "files": [
        {
          "name": "stechiometria.pdf",
          "type": "application/pdf"
        },
        {
          "name": "esercizi_chimica.xlsx",
          "type": "application/excel"
        }
      ]
    },
    {
      "id": 10,
      "title": "Poesia del '900 - Ungaretti e Montale",
      "description": "Analisi della poesia del Novecento italiano. Focus su Giuseppe Ungaretti (L'Allegria) e Eugenio Montale (Ossi di seppia). Temi, stile, contesto storico.",
      "subject": "Letteratura Italiana",
      "author": "c.fontana",
      "authorFullName": "Chiara Fontana",
      "votes": 14,
      "createdAt": "2026-01-16T09:45:00Z",
      "files": [
        {
          "name": "poesia_900.pdf",
          "type": "application/pdf"
        },
        {
          "name": "analisi_poesie.docx",
          "type": "application/word"
        }
      ]
    }
  ]
};

// Variabile globale per memorizzare i post
let allPosts = [];

function toggleArea(areaName) {
    const area = document.getElementById(areaName);
    if (area.classList.contains("hidden")) {
        subArea.classList.add("hidden");
        userArea.classList.add("hidden");
        dataArea.classList.add("hidden");
        area.classList.remove("hidden");
    } else {
        area.classList.add("hidden");
    }
}

function getFileIcon(fileType) {
    if (fileType.includes('pdf')) {
        return 'bi-file-earmark-pdf';
    } else if (fileType.includes('word') || fileType.includes('document')) {
        return 'bi-file-earmark-word';
    } else if (fileType.includes('excel') || fileType.includes('sheet')) {
        return 'bi-file-earmark-excel';
    } else if (fileType.includes('powerpoint') || fileType.includes('presentation')) {
        return 'bi-file-earmark-ppt';
    } else if (fileType.includes('image')) {
        return 'bi-file-earmark-image';
    } else if (fileType.includes('text')) {
        return 'bi-file-earmark-text';
    } else if (fileType.includes('zip') || fileType.includes('rar')) {
        return 'bi-file-earmark-zip';
    } else {
        return 'bi-file-earmark';
    }
}

// Funzione per formattare la data
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
}

// Funzione per creare l'HTML di un singolo post
function createPostHTML(post, index) {
    // Carica lo stato dei voti dell'utente
    const userVotes = JSON.parse(localStorage.getItem('postVotes') || '{}');
    const userVote = userVotes[post.id];
    
    // Determina le classi dei pulsanti in base al voto dell'utente
    const upButtonClass = userVote === 'up' ? 'btn btn-up-active p-2 mr-2 text-4xl' : 'btn btn-up p-2 mr-2 text-4xl';
    const downButtonClass = userVote === 'down' ? 'btn btn-down-active text-4xl p-2 mr-2' : 'btn btn-down text-4xl p-2 mr-2';
    
    // Genera l'HTML per i file
    let filesHTML = '';
    if (post.files && post.files.length > 0) {
        filesHTML = post.files.map(file => `
            <div class="file flex flex-row gap-1 text-primary hover:text-primary-50">
                <div class="bi bi-chevron-double-right text-stroke-2"></div>
                <div class="bi ${getFileIcon(file.type)}"></div>
                ${file.name}
            </div>
        `).join('');
    }

    // Determina quale nome mostrare (con fallback per post vecchi)
    const displayName = post.authorFullName || post.author || 'Utente';

    return `
        <div class="flex flex-row">
            <div class="flex flex-column justify-between my-4">
                <div class="votes flex flex-column gap-1 font-bold items-end mt-4">
                    <button class="${upButtonClass}" onclick="votePost(${post.id}, 'up')">
                        <i class="bi bi-caret-up-fill"></i>
                    </button>
                    <span class="text-3xl mr-3" id="votes-${post.id}">${post.votes || 0}</span>
                    <button class="${downButtonClass}" onclick="votePost(${post.id}, 'down')">
                        <i class="bi bi-caret-down-fill"></i>
                    </button>
                </div>
                <div class="save text-3xl p-2 bg-primary text-base hover:bg-primary-50 text-stroke-2" onclick="toggleSave(${post.id})">
                    <i class="bi bi-bookmark" id="save-icon-${post.id}"></i>
                </div>
            </div>
            <div class="flex flex-column relative w-10">
                <div class="subject bg-secondary-50 w-fit px-3 py-1 text-base text-xl hover:bg-primary">
                    ${post.subject || 'Generale'}
                </div>
                <div id="post-${post.id}" class="card bg-muted px-5 py-2 shadow-md flex flex-column gap-2">
                    <h1 class="text-2xl font-bold">${post.title}</h1>
                    <p class="mt-2 text-lg">${post.description}</p>
                    ${filesHTML ? `
                        <div id="files" class="mt-2 flex flex-column gap-2 flex-wrap text-2xl mx-4">
                            ${filesHTML}
                        </div>
                    ` : ''}
                    <div class="mt-3 flex flex-row gap-5 text-2xl font-bold justify-between bottom-0">
                        <span class="text-neutral hover:text-primary" title="@${post.author || 'utente'}">
                            <i class="bi bi-person bold-icon"></i>${displayName}
                        </span>
                        <span>
                            <i class="bi bi-calendar bold-icon mr-2"></i>${formatDate(post.createdAt)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funzione per caricare i post dai dati incorporati
function loadPosts() {
    try {
        allPosts = postsData.posts;
        
        // Carica i voti totali salvati dal localStorage
        const savedVoteCounts = JSON.parse(localStorage.getItem('postVoteCounts') || '{}');
        allPosts.forEach(post => {
            if (savedVoteCounts[post.id] !== undefined) {
                post.votes = savedVoteCounts[post.id];
            }
        });
        
        displayPosts(allPosts);
        
    } catch (error) {
        console.error('Errore nel caricamento dei post:', error);
        const postsArea = document.getElementById('dinamicPost');
        if (postsArea) {
            postsArea.innerHTML = '<p class="text-center text-2xl mt-5 text-error">Errore nel caricamento degli appunti.</p>';
        }
    }
}

// Funzione per visualizzare i post
function displayPosts(posts) {
    const postsArea = document.getElementById('dinamicPost');
    
    if (!postsArea) {
        console.error('Elemento dinamicPost non trovato');
        return;
    }

    if (posts.length === 0) {
        postsArea.innerHTML = '<p class="text-center text-2xl mt-5">Nessun appunto disponibile.</p>';
        return;
    }

    // Carica i voti totali salvati dal localStorage
    const savedVoteCounts = JSON.parse(localStorage.getItem('postVoteCounts') || '{}');
    
    // Aggiorna i voti dei post con quelli salvati
    posts.forEach(post => {
        if (savedVoteCounts[post.id] !== undefined) {
            post.votes = savedVoteCounts[post.id];
        }
    });

    // Genera l'HTML per tutti i post
    const postsHTML = posts.map((post, index) => createPostHTML(post, index)).join('');
    postsArea.innerHTML = postsHTML;
    
    // Ripristina lo stato dei bookmark
    restoreSavedBookmarks();
}

// Funzione per votare un post
function votePost(postId, direction) {
    const post = allPosts.find(p => p.id === postId);
    
    if (!post) return;
    
    // Carica i voti dell'utente dal localStorage
    const userVotes = JSON.parse(localStorage.getItem('postVotes') || '{}');
    const currentVote = userVotes[postId]; // può essere 'up', 'down' o undefined
    
    // Carica i voti totali salvati
    const savedVoteCounts = JSON.parse(localStorage.getItem('postVoteCounts') || '{}');
    if (savedVoteCounts[postId] !== undefined) {
        post.votes = savedVoteCounts[postId];
    }
    
    // Gestisci la logica del voto
    if (currentVote === direction) {
        // L'utente ha ripremuto lo stesso pulsante - rimuovi il voto
        if (direction === 'up') {
            post.votes--;
        } else {
            post.votes++;
        }
        delete userVotes[postId];
    } else if (currentVote) {
        // L'utente sta cambiando voto (da up a down o viceversa)
        if (direction === 'up') {
            post.votes += 2; // Rimuovi -1 e aggiungi +1
        } else {
            post.votes -= 2; // Rimuovi +1 e aggiungi -1
        }
        userVotes[postId] = direction;
    } else {
        // Nuovo voto
        if (direction === 'up') {
            post.votes++;
        } else {
            post.votes--;
        }
        userVotes[postId] = direction;
    }
    
    // Salva i voti nel localStorage
    localStorage.setItem('postVotes', JSON.stringify(userVotes));
    savedVoteCounts[postId] = post.votes;
    localStorage.setItem('postVoteCounts', JSON.stringify(savedVoteCounts));
    
    // Aggiorna la visualizzazione
    updateVoteDisplay(postId, post.votes, userVotes[postId]);
}

// Funzione per aggiornare la visualizzazione dei voti
function updateVoteDisplay(postId, votes, userVote) {
    const votesElement = document.getElementById(`votes-${postId}`);
    const upButton = document.querySelector(`[onclick*="votePost(${postId}, 'up')"]`);
    const downButton = document.querySelector(`[onclick*="votePost(${postId}, 'down')"]`);
    
    if (votesElement) {
        votesElement.textContent = votes;
    }
    
    // Reimposta i pulsanti allo stato base
    if (upButton) {
        upButton.className = 'btn btn-up p-2 mr-2 text-4xl';
    }
    if (downButton) {
        downButton.className = 'btn btn-down text-4xl p-2 mr-2';
    }
    
    // Aggiungi -active al pulsante votato
    if (userVote === 'up' && upButton) {
        upButton.className = 'btn btn-up-active p-2 mr-2 text-4xl';
    } else if (userVote === 'down' && downButton) {
        downButton.className = 'btn btn-down-active text-4xl p-2 mr-2';
    }
}

// Funzione per salvare/rimuovere dai preferiti
function toggleSave(postId) {
    const iconElement = document.getElementById(`save-icon-${postId}`);
    if (!iconElement) return;

    const isSaved = iconElement.classList.contains('bi-bookmark-fill');
    
    if (isSaved) {
        iconElement.classList.remove('bi-bookmark-fill');
        iconElement.classList.add('bi-bookmark');
    } else {
        iconElement.classList.remove('bi-bookmark');
        iconElement.classList.add('bi-bookmark-fill');
    }

    // Salva lo stato nei preferiti
    let savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    
    if (isSaved) {
        savedPosts = savedPosts.filter(id => id !== postId);
    } else {
        savedPosts.push(postId);
    }
    
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
}

// Funzione per ripristinare i bookmark salvati
function restoreSavedBookmarks() {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    
    savedPosts.forEach(postId => {
        const iconElement = document.getElementById(`save-icon-${postId}`);
        if (iconElement) {
            iconElement.classList.remove('bi-bookmark');
            iconElement.classList.add('bi-bookmark-fill');
        }
    });
}

// Funzione per filtrare e ordinare i post
function filterAndSortPosts() {
    const searchQuery = document.getElementById('q').value.toLowerCase();
    const sortBy = document.getElementById('sort').value;
    const subjectFilter = document.getElementById('subject').value.toLowerCase();
    const userFilter = document.getElementById('user').value.toLowerCase();
    const dateStart = document.getElementById('datestart').value;
    const dateEnd = document.getElementById('dateend').value;
    
    let filteredPosts = [...allPosts];
    
    // Filtro per ricerca generale
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchQuery) ||
            post.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Filtro per materia
    if (subjectFilter) {
        filteredPosts = filteredPosts.filter(post => 
            post.subject.toLowerCase().includes(subjectFilter)
        );
    }
    
    // Filtro per utente
    if (userFilter) {
        filteredPosts = filteredPosts.filter(post => 
            post.authorFullName.toLowerCase().includes(userFilter) ||
            post.author.toLowerCase().includes(userFilter)
        );
    }
    
    // Filtro per data
    if (dateStart) {
        filteredPosts = filteredPosts.filter(post => 
            new Date(post.createdAt) >= new Date(dateStart)
        );
    }
    
    if (dateEnd) {
        filteredPosts = filteredPosts.filter(post => 
            new Date(post.createdAt) <= new Date(dateEnd)
        );
    }
    
    // Ordinamento
    if (sortBy === 'newest') {
        filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'oldest') {
        filteredPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === 'most_liked') {
        filteredPosts.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    }
    
    displayPosts(filteredPosts);
}

// Event listeners per i filtri
document.addEventListener('DOMContentLoaded', function() {
    // Carica i post all'avvio
    loadPosts();
    
    // Aggiungi event listeners per i filtri
    const searchInput = document.getElementById('q');
    const sortSelect = document.getElementById('sort');
    const subjectInput = document.getElementById('subject');
    const userInput = document.getElementById('user');
    const dateStartInput = document.getElementById('datestart');
    const dateEndInput = document.getElementById('dateend');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterAndSortPosts);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortPosts);
    }
    
    if (subjectInput) {
        subjectInput.addEventListener('input', filterAndSortPosts);
    }
    
    if (userInput) {
        userInput.addEventListener('input', filterAndSortPosts);
    }
    
    if (dateStartInput) {
        dateStartInput.addEventListener('change', filterAndSortPosts);
    }
    
    if (dateEndInput) {
        dateEndInput.addEventListener('change', filterAndSortPosts);
    }
});