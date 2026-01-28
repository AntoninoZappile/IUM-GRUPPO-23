// js/uploadFiles.js

const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');

// Array per tenere traccia dei file caricati
let uploadedFiles = [];

uploadBox.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

function handleFiles(files) {
    if (files.length > 0) {
        // Aggiungi i nuovi file all'array esistente
        Array.from(files).forEach(file => {
            // Evita duplicati controllando se il file è già presente
            const isDuplicate = uploadedFiles.some(f => 
                f.name === file.name && 
                f.size === file.size && 
                f.lastModified === file.lastModified
            );
            
            if (!isDuplicate) {
                uploadedFiles.push(file);
            }
        });
        
        updateFileDisplay();
    }
}

function updateFileDisplay() {
    if (uploadedFiles.length > 0) {
        // Mostra i nomi di tutti i file
        const fileNames = uploadedFiles.map(f => f.name).join(', ');
        fileName.textContent = `${uploadedFiles.length} file caricati: ${fileNames}`;
        fileInfo.classList.add('show');
    } else {
        fileName.textContent = '';
        fileInfo.classList.remove('show');
    }
}

// Funzione per rimuovere un file specifico (opzionale)
function removeFile(index) {
    uploadedFiles.splice(index, 1);
    updateFileDisplay();
}

// Funzione per ottenere tutti i file caricati
function getUploadedFiles() {
    return uploadedFiles;
}

// Funzione per resettare i file caricati
function clearUploadedFiles() {
    uploadedFiles = [];
    if (fileInput) {
        fileInput.value = '';
    }
    if (fileName) {
        fileName.textContent = '';
    }
    if (fileInfo) {
        fileInfo.classList.remove('show');
    }
}