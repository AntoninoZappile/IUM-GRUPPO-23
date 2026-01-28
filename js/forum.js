// js/forum.js

const tage = document.getElementById("tagarea");
const userArea = document.getElementById("userarea");
const dataArea = document.getElementById("dataarea");
const tagliste = document.getElementById("taglist");
let tagList = [];

// Dati del forum incorporati direttamente
const forumData = {
  "announcements": [
    {
      "id": 1,
      "title": "Cerco compagno di studio per esame di Analisi Matematica",
      "description": "Ciao! Sto preparando l'esame di Analisi Matematica 1 per la sessione di febbraio. Cerco qualcuno con cui studiare insieme, magari per risolvere esercizi e chiarirci i dubbi a vicenda. Disponibile sia in presenza (zona università) che online.",
      "author": "luca_m",
      "authorFullName": "Luca Martini",
      "tags": ["studio", "matematica", "analisi", "gruppo-studio"],
      "votes": 8,
      "createdAt": "2026-01-27T15:30:00Z",
      "commentCount": 3
    },
    {
      "id": 2,
      "title": "Ripetizioni di Programmazione Java - Disponibilità",
      "description": "Sono uno studente magistrale di Informatica e offro ripetizioni di programmazione Java per studenti del primo e secondo anno. Ho esperienza con OOP, strutture dati, algoritmi. Tariffa: 15€/ora. Disponibile anche per piccoli gruppi (sconto).",
      "author": "marco_dev",
      "authorFullName": "Marco Rossi",
      "tags": ["ripetizioni", "java", "programmazione", "informatica"],
      "votes": 15,
      "createdAt": "2026-01-26T10:00:00Z",
      "commentCount": 7
    },
    {
      "id": 3,
      "title": "Vendo libri di testo usati - Ingegneria",
      "description": "Vendo i seguenti libri per ingegneria in ottime condizioni: Fisica 1 (Mazzoldi), Analisi 1 (Bramanti), Fondamenti di Automatica (Bolzern). Prezzo: 20€ ciascuno o 50€ tutti e tre. Ritiro zona campus o spedizione (spese a carico).",
      "author": "sara_ing",
      "authorFullName": "Sara Bianchi",
      "tags": ["vendita", "libri", "ingegneria", "usato"],
      "votes": 5,
      "createdAt": "2026-01-25T14:20:00Z",
      "commentCount": 2
    },
    {
      "id": 4,
      "title": "Gruppo Telegram per l'esame di Fisica 2",
      "description": "Ho creato un gruppo Telegram per coordinarci per l'esame di Fisica 2 del prof. Verdi. Condivideremo appunti, esercizi, dubbi e ci organizzeremo per le sessioni di studio. Chi è interessato può contattarmi in privato per il link!",
      "author": "alessio_92",
      "authorFullName": "Alessio Ferrari",
      "tags": ["gruppo", "fisica", "telegram", "studio-gruppo"],
      "votes": 22,
      "createdAt": "2026-01-24T09:15:00Z",
      "commentCount": 12
    },
    {
      "id": 5,
      "title": "Cerco coinquilino/a per appartamento zona universitaria",
      "description": "Cerco una persona per condividere un bilocale vicino all'università (10 minuti a piedi). Stanza singola disponibile da marzo. Affitto: 350€/mese + spese (circa 50€). Appartamento arredato, cucina abitabile, Wi-Fi. Preferibilmente studente/essa serio/a e tranquillo/a.",
      "author": "giulia_home",
      "authorFullName": "Giulia Romano",
      "tags": ["alloggio", "coinquilino", "affitto", "stanza"],
      "votes": 11,
      "createdAt": "2026-01-23T16:45:00Z",
      "commentCount": 5
    },
    {
      "id": 6,
      "title": "Traduzioni Inglese-Italiano per tesi/tesine",
      "description": "Offro servizio di traduzione professionale dall'inglese all'italiano per tesi, tesine, articoli scientifici. Laureata in Lingue con certificazione C2. Prezzi competitivi, consegna rapida. Disponibile anche per revisioni e correzioni bozze. Contattatemi per preventivo!",
      "author": "elena_translate",
      "authorFullName": "Elena Colombo",
      "tags": ["servizi", "traduzioni", "inglese", "tesi"],
      "votes": 7,
      "createdAt": "2026-01-22T11:30:00Z",
      "commentCount": 4
    },
    {
      "id": 7,
      "title": "Organizzazione evento: Aperitivo Matricole 2026",
      "description": "Stiamo organizzando un aperitivo per le matricole del 2026 per conoscerci meglio! Data: 5 febbraio, ore 19:00. Luogo: Bar Centrale (vicino campus). Quota partecipazione: 10€ (include aperitivo e una consumazione). Per iscriversi compilare il form nel primo commento!",
      "author": "committee_students",
      "authorFullName": "Comitato Studenti",
      "tags": ["eventi", "aperitivo", "matricole", "socializzazione"],
      "votes": 31,
      "createdAt": "2026-01-21T13:00:00Z",
      "commentCount": 18
    },
    {
      "id": 8,
      "title": "Info su esame Diritto Privato prof. Marini",
      "description": "Qualcuno ha già sostenuto l'esame di Diritto Privato con il prof. Marini? Come sono le domande? È molto difficile? Accetta integrazioni durante l'orale? Qualsiasi info è ben accetta, grazie mille!",
      "author": "student_law",
      "authorFullName": "Francesco Gallo",
      "tags": ["info-esami", "diritto", "università", "professori"],
      "votes": 9,
      "createdAt": "2026-01-20T10:20:00Z",
      "commentCount": 6
    },
    {
      "id": 9,
      "title": "Laptop Asus VivoBook usato - Ottimo per università",
      "description": "Vendo laptop Asus VivoBook (2022): Intel i5 11th gen, 8GB RAM, SSD 512GB, schermo 15.6\" Full HD. Perfetto per università (Office, programmazione, navigazione). Condizioni eccellenti, sempre usato con cura. Prezzo: 380€ trattabili. Include borsa e mouse wireless.",
      "author": "tech_seller",
      "authorFullName": "Davide Conti",
      "tags": ["vendita", "laptop", "tecnologia", "usato"],
      "votes": 6,
      "createdAt": "2026-01-19T15:50:00Z",
      "commentCount": 8
    },
    {
      "id": 10,
      "title": "Workshop: LaTeX per scrivere tesi e documenti scientifici",
      "description": "L'associazione studentesca organizza un workshop gratuito su LaTeX per imparare a scrivere tesi, articoli scientifici e documenti professionali. Data: 15 febbraio, ore 15:00-18:00. Aula Magna. Portare il proprio laptop. Livello: principianti. Iscrizione obbligatoria (posti limitati).",
      "author": "association_stem",
      "authorFullName": "Associazione STEM",
      "tags": ["workshop", "latex", "formazione", "tesi"],
      "votes": 19,
      "createdAt": "2026-01-18T09:00:00Z",
      "commentCount": 9
    },
    {
      "id": 11,
      "title": "Cercasi membri per progetto hackathon universitario",
      "description": "Sto formando un team per partecipare all'hackathon universitario di marzo (tema: sostenibilità ambientale). Cerco: 1 developer full-stack, 1 designer UI/UX, 1 data scientist. Esperienza non necessaria, importante la voglia di imparare e collaborare! L'hackathon dura 48h, premi fino a 5000€.",
      "author": "hacker_leader",
      "authorFullName": "Chiara Fontana",
      "tags": ["hackathon", "team", "progetti", "coding"],
      "votes": 13,
      "createdAt": "2026-01-17T12:40:00Z",
      "commentCount": 11
    },
    {
      "id": 12,
      "title": "Bici da città in vendita - Prezzo affare!",
      "description": "Vendo bicicletta da città marca Bianchi, perfettamente funzionante. Cambio Shimano 6 velocità, cestino anteriore, lucchetto incluso. Ideale per spostarsi in città e raggiungere l'università. Prezzo: 80€. Visibile zona Stazione Centrale.",
      "author": "bike_owner",
      "authorFullName": "Andrea Moretti",
      "tags": ["vendita", "bici", "trasporti", "affare"],
      "votes": 4,
      "createdAt": "2026-01-16T14:15:00Z",
      "commentCount": 3
    }
  ],
  "comments": [
    {
      "id": 1,
      "announcementId": 1,
      "text": "Ciao! Anch'io devo dare Analisi a febbraio. Potremmo vederci in biblioteca?",
      "author": "anna_study",
      "authorFullName": "Anna Verdi",
      "createdAt": "2026-01-27T16:00:00Z"
    },
    {
      "id": 2,
      "announcementId": 1,
      "text": "Mi aggiungo volentieri! Mandate un messaggio così ci organizziamo",
      "author": "pietro_88",
      "authorFullName": "Pietro Neri",
      "createdAt": "2026-01-27T17:30:00Z"
    },
    {
      "id": 3,
      "announcementId": 2,
      "text": "Quanto costa per 2 ore a settimana?",
      "author": "student_java",
      "authorFullName": "Mario Russo",
      "createdAt": "2026-01-26T11:20:00Z"
    },
    {
      "id": 4,
      "announcementId": 2,
      "text": "Per 2 ore a settimana possiamo accordarci per 25€. Scrivimi in privato!",
      "author": "marco_dev",
      "authorFullName": "Marco Rossi",
      "createdAt": "2026-01-26T12:00:00Z"
    },
    {
      "id": 5,
      "announcementId": 4,
      "text": "Mi interessa! Come posso entrare nel gruppo?",
      "author": "physics_lover",
      "authorFullName": "Laura Ricci",
      "createdAt": "2026-01-24T10:30:00Z"
    },
    {
      "id": 6,
      "announcementId": 7,
      "text": "Form per iscrizione: https://forms.example.com/aperitivo2026",
      "author": "committee_students",
      "authorFullName": "Comitato Studenti",
      "createdAt": "2026-01-21T13:15:00Z"
    },
    {
      "id": 7,
      "announcementId": 7,
      "text": "Fantastico! Mi sono già iscritta, non vedo l'ora!",
      "author": "social_girl",
      "authorFullName": "Martina Leone",
      "createdAt": "2026-01-21T14:00:00Z"
    }
  ]
};

// Variabili globali per memorizzare i dati
let allAnnouncements = [];
let allComments = [];

function toggleArea(areaName) {
    const area = document.getElementById(areaName);
    if (area.classList.contains("hidden")) {
        tage.classList.add("hidden");
        userArea.classList.add("hidden");
        dataArea.classList.add("hidden");
        area.classList.remove("hidden");
    } else {
        area.classList.add("hidden");
    }
}

function addTag(e) {
    if (e.key === "Enter") {
        const tagInput = document.getElementById("tag");
        const tag = tagInput.value.trim();
        if (tag) {
            if (tagList.includes(tag)) {
                tagInput.value = "";
                return;
            }
            tagList.push(tag);
            renderTagList();
            tagInput.value = "";
            filterAndSortAnnouncements();
        }
    }
}

function renderTagList() {
    let tagHTML = "";
    tagList.forEach(element => {
        tagHTML += `<span class="flex align-center w-fit gap-2 bg-secondary text-base rounded-sm p-2 text-sm font-semibold mr-2 mb-2 hover:bg-secondary-50" onclick="removeTag('${element}')">${element}<i class="bi text-md bi-x-lg"></i></span>`;
    });
    tagliste.innerHTML = tagHTML;
}

function removeTag(tag) {
    const tagTrim = tag.trim();
    tagList = tagList.filter(t => t !== tagTrim);
    renderTagList();
    filterAndSortAnnouncements();
}

function toggleComment(btn, id) {
    const commentArea = document.getElementById(`comments-area-${id}`);
    const postArea = document.getElementById(`post-${id}`);
    if (commentArea.classList.contains("hidden")) {
        postArea.classList.add("card-comment");
        openCommentArea(btn, commentArea);
    } else {
        postArea.classList.remove("card-comment");
        closeCommentArea(btn, commentArea);
    }
}

function openCommentArea(btn, commentArea) {
    btn.classList.add("btn-comment-2");
    setTimeout(() => btn.classList.add("btn-comment-3"), 500);
    setTimeout(() => commentArea.classList.remove("hidden") , 550);
    setTimeout(() => commentArea.classList.add("comments-area-active"), 600);
    const icon = btn.querySelector("i");
    icon.classList.remove("bi-chevron-down");
    icon.classList.add("bi-chevron-up");
}

function closeCommentArea(btn, commentArea) {
    commentArea.classList.remove("comments-area-active")
    setTimeout(() => commentArea.classList.add("hidden"), 500);
    setTimeout(() => btn.classList.remove("btn-comment-3"), 550);
    setTimeout(() => btn.classList.remove("btn-comment-2"), 1100);
    const icon = btn.querySelector("i");
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
}

// ========== FUNZIONI PER CARICARE E GESTIRE GLI ANNUNCI ==========

// Funzione per caricare gli annunci dai dati incorporati
function loadAnnouncements() {
    try {
        allAnnouncements = forumData.announcements;
        allComments = forumData.comments;
        
        // Carica i voti salvati dal localStorage
        const savedVotes = JSON.parse(localStorage.getItem('announcementVotes') || '{}');
        allAnnouncements.forEach(announcement => {
            if (savedVotes[announcement.id] !== undefined) {
                announcement.votes = savedVotes[announcement.id];
            }
        });
        
        // Carica i commenti aggiuntivi dal localStorage
        const savedComments = JSON.parse(localStorage.getItem('forumComments') || '[]');
        allComments = [...allComments, ...savedComments];
        
        displayAnnouncements(allAnnouncements);
        
    } catch (error) {
        console.error('Errore nel caricamento degli annunci:', error);
        const dinamicPostContainer = document.getElementById('dinamicPost');
        if (dinamicPostContainer) {
            dinamicPostContainer.innerHTML = '<p class="text-center text-error mt-5">Errore nel caricamento degli annunci</p>';
        }
    }
}

// Funzione per visualizzare gli annunci
function displayAnnouncements(announcements) {
    const dinamicPostContainer = document.getElementById('dinamicPost');
    
    if (!dinamicPostContainer) {
        console.error('Container dinamicPost non trovato');
        return;
    }
    
    if (announcements.length === 0) {
        dinamicPostContainer.innerHTML = '<p class="text-center text-muted mt-5">Nessun annuncio trovato.</p>';
        return;
    }
    
    let announcementsHTML = '';
    
    // Carica lo stato dei voti dell'utente e i voti totali
    const userVotes = JSON.parse(localStorage.getItem('forumVotes') || '{}');
    const savedVotes = JSON.parse(localStorage.getItem('announcementVotes') || '{}');
    
    announcements.forEach(announcement => {
        // Aggiorna i voti dell'annuncio con quelli salvati
        if (savedVotes[announcement.id] !== undefined) {
            announcement.votes = savedVotes[announcement.id];
        }
        
        const date = formatDate(announcement.createdAt);
        const tagsHTML = generateTagsHTML(announcement.tags);
        const commentsCount = getCommentsCount(announcement.id);
        
        // Determina le classi dei pulsanti in base al voto dell'utente
        const userVote = userVotes[announcement.id];
        const upButtonClass = userVote === 'up' ? 'btn btn-up-active p-2 mr-2 text-4xl' : 'btn btn-up p-2 mr-2 text-4xl';
        const downButtonClass = userVote === 'down' ? 'btn btn-down-active text-4xl p-2 mr-2' : 'btn btn-down text-4xl p-2 mr-2';
        
        announcementsHTML += `
            <div class="flex flex-row">
                <div class="votes w-2 flex flex-column g-5 font-bold items-end mt-4">
                    <button class="${upButtonClass}" onclick="vote(${announcement.id}, 'up')">
                        <i class="bi bi-caret-up-fill"></i>
                    </button>
                    <span class="text-3xl mr-3" id="votes-${announcement.id}">${announcement.votes || 0}</span>
                    <button class="${downButtonClass}" onclick="vote(${announcement.id}, 'down')">
                        <i class="bi bi-caret-down-fill"></i>
                    </button>
                </div>
                <div class="flex flex-column relative w-10">
                    <div id="post-${announcement.id}" class="card bg-muted px-5 py-2 shadow-md flex flex-column gap-2">
                        <h1 class="text-2xl font-bold">${escapeHTML(announcement.title)}</h1>
                        <p class="mt-2 text-lg">${escapeHTML(announcement.description)}</p>
                        ${tagsHTML}
                        <div class="mt-3 flex flex-row gap-5 text-2xl font-bold justify-between">
                            <span class="text-neutral hover:text-primary" title="@${announcement.author}">
                                <i class="bi bi-person bold-icon"></i>${escapeHTML(announcement.authorFullName || announcement.author)}
                            </span>
                            <span>
                                <i class="bi bi-calendar bold-icon mr-2"></i>${date}
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="btn btn-comment" onclick="toggleComment(this, ${announcement.id})">
                            commenti (${commentsCount})<i class="bi bi-chevron-down ml-2"></i>
                        </div>
                    </div>
                    <div id="comments-area-${announcement.id}" class="hidden border-secondary border-2 comments-area">
                        <div class="input-group mb-2">
                            <input type="text" name="comment-${announcement.id}" id="comment-input-${announcement.id}" placeholder="Aggiungi un commento...">
                            <button class="btn btn-primary" onclick="addComment(${announcement.id})">
                                <i class="bi bi-send-fill"></i>
                            </button>
                        </div>
                        <div id="comments-list-${announcement.id}">
                            ${renderComments(announcement.id)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    dinamicPostContainer.innerHTML = announcementsHTML;
}

// Funzione per formattare la data
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
}

// Funzione per generare l'HTML dei tag
function generateTagsHTML(tags) {
    if (!tags || tags.length === 0) {
        return '';
    }
    
    const tagsHTML = tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('');
    return `<div id="tags" class="mt-2 flex flex-row gap-2 flex-wrap">${tagsHTML}</div>`;
}

// Funzione per escape HTML (previene XSS)
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Funzione per ottenere il conteggio dei commenti
function getCommentsCount(announcementId) {
    return allComments.filter(c => c.announcementId === announcementId).length;
}

// Funzione per gestire i voti
function vote(announcementId, direction) {
    const announcement = allAnnouncements.find(a => a.id === announcementId);
    
    if (!announcement) return;
    
    // Carica i voti dell'utente dal localStorage
    const userVotes = JSON.parse(localStorage.getItem('forumVotes') || '{}');
    const currentVote = userVotes[announcementId]; // può essere 'up', 'down' o undefined
    
    // Carica i voti totali salvati
    const savedVotes = JSON.parse(localStorage.getItem('announcementVotes') || '{}');
    if (savedVotes[announcementId] !== undefined) {
        announcement.votes = savedVotes[announcementId];
    }
    
    // Gestisci la logica del voto
    if (currentVote === direction) {
        // L'utente ha ripremuto lo stesso pulsante - rimuovi il voto
        if (direction === 'up') {
            announcement.votes--;
        } else {
            announcement.votes++;
        }
        delete userVotes[announcementId];
    } else if (currentVote) {
        // L'utente sta cambiando voto (da up a down o viceversa)
        if (direction === 'up') {
            announcement.votes += 2; // Rimuovi -1 e aggiungi +1
        } else {
            announcement.votes -= 2; // Rimuovi +1 e aggiungi -1
        }
        userVotes[announcementId] = direction;
    } else {
        // Nuovo voto
        if (direction === 'up') {
            announcement.votes++;
        } else {
            announcement.votes--;
        }
        userVotes[announcementId] = direction;
    }
    
    // Salva i voti nel localStorage
    localStorage.setItem('forumVotes', JSON.stringify(userVotes));
    savedVotes[announcementId] = announcement.votes;
    localStorage.setItem('announcementVotes', JSON.stringify(savedVotes));
    
    // Aggiorna la visualizzazione
    updateVoteDisplay(announcementId, announcement.votes, userVotes[announcementId]);
}

// Funzione per aggiornare la visualizzazione dei voti
function updateVoteDisplay(announcementId, votes, userVote) {
    const votesElement = document.getElementById(`votes-${announcementId}`);
    const upButton = document.querySelector(`[onclick*="vote(${announcementId}, 'up')"]`);
    const downButton = document.querySelector(`[onclick*="vote(${announcementId}, 'down')"]`);
    
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

// Funzione per aggiungere un commento
function addComment(announcementId) {
    const commentInput = document.getElementById(`comment-input-${announcementId}`);
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        alert('Inserisci un commento');
        return;
    }
    
    // Per ora usa un username di default
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    
    // Crea il commento
    const comment = {
        id: Date.now(),
        announcementId: announcementId,
        text: commentText,
        author: username,
        authorFullName: username,
        createdAt: new Date().toISOString()
    };
    
    // Aggiungi il nuovo commento
    allComments.push(comment);
    
    // Salva i nuovi commenti nel localStorage (solo quelli aggiunti dall'utente)
    const savedComments = JSON.parse(localStorage.getItem('forumComments') || '[]');
    savedComments.push(comment);
    localStorage.setItem('forumComments', JSON.stringify(savedComments));
    
    // Aggiorna la visualizzazione
    const commentsList = document.getElementById(`comments-list-${announcementId}`);
    if (commentsList) {
        commentsList.innerHTML = renderComments(announcementId);
    }
    
    // Aggiorna il contatore commenti
    const btn = document.querySelector(`[onclick*="toggleComment"][onclick*="${announcementId}"]`);
    if (btn) {
        const count = getCommentsCount(announcementId);
        btn.innerHTML = `commenti (${count})<i class="bi bi-chevron-${btn.querySelector('i').classList.contains('bi-chevron-up') ? 'up' : 'down'} ml-2"></i>`;
    }
    
    // Pulisci l'input
    commentInput.value = '';
}

// Funzione per renderizzare i commenti
function renderComments(announcementId) {
    const announcementComments = allComments.filter(c => c.announcementId === announcementId);
    
    if (announcementComments.length === 0) {
        return '<p class="text-muted p-2">Nessun commento</p>';
    }
    
    return announcementComments.map(comment => `
        <div class="comment border-1 border-secondary p-2 mb-2">
            <div class="font-bold text-xl">
                <i class="bi bi-person bold-icon"></i>${escapeHTML(comment.authorFullName || comment.author)}
            </div>
            <div>${escapeHTML(comment.text)}</div>
            <div class="text-sm text-muted mt-1">${formatDate(comment.createdAt)}</div>
        </div>
    `).join('');
}

// Funzione per filtrare e ordinare gli annunci
function filterAndSortAnnouncements() {
    const searchQuery = document.getElementById('q').value.toLowerCase();
    const sortBy = document.getElementById('sort').value;
    const userFilter = document.getElementById('user').value.toLowerCase();
    const dateStart = document.getElementById('datestart').value;
    const dateEnd = document.getElementById('dateend').value;
    
    let filteredAnnouncements = [...allAnnouncements];
    
    // Filtro per ricerca generale
    if (searchQuery) {
        filteredAnnouncements = filteredAnnouncements.filter(announcement => 
            announcement.title.toLowerCase().includes(searchQuery) ||
            announcement.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Filtro per tag
    if (tagList.length > 0) {
        filteredAnnouncements = filteredAnnouncements.filter(announcement => 
            announcement.tags && tagList.some(tag => 
                announcement.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
            )
        );
    }
    
    // Filtro per utente
    if (userFilter) {
        filteredAnnouncements = filteredAnnouncements.filter(announcement => 
            announcement.authorFullName.toLowerCase().includes(userFilter) ||
            announcement.author.toLowerCase().includes(userFilter)
        );
    }
    
    // Filtro per data
    if (dateStart) {
        filteredAnnouncements = filteredAnnouncements.filter(announcement => 
            new Date(announcement.createdAt) >= new Date(dateStart)
        );
    }
    
    if (dateEnd) {
        filteredAnnouncements = filteredAnnouncements.filter(announcement => 
            new Date(announcement.createdAt) <= new Date(dateEnd)
        );
    }
    
    // Ordinamento
    if (sortBy === 'newest') {
        filteredAnnouncements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'oldest') {
        filteredAnnouncements.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === 'most_commented') {
        filteredAnnouncements.sort((a, b) => getCommentsCount(b.id) - getCommentsCount(a.id));
    }
    
    displayAnnouncements(filteredAnnouncements);
}

// Event listeners per i filtri
document.addEventListener('DOMContentLoaded', function() {
    // Carica gli annunci all'avvio
    loadAnnouncements();
    
    // Aggiungi event listeners per i filtri
    const searchInput = document.getElementById('q');
    const sortSelect = document.getElementById('sort');
    const userInput = document.getElementById('user');
    const dateStartInput = document.getElementById('datestart');
    const dateEndInput = document.getElementById('dateend');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterAndSortAnnouncements);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortAnnouncements);
    }
    
    if (userInput) {
        userInput.addEventListener('input', filterAndSortAnnouncements);
    }
    
    if (dateStartInput) {
        dateStartInput.addEventListener('change', filterAndSortAnnouncements);
    }
    
    if (dateEndInput) {
        dateEndInput.addEventListener('change', filterAndSortAnnouncements);
    }
});