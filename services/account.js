let accounts = [
    {id: 1, username: "user", email: "account@prova.it", password: "password123", name: "Mario", surname: "Rossi"},
    {id: 2, username: "jdoe", email: "john.doe@example.com", password: "johndoe2023", name: "John", surname: "Doe"},
    {id: 3, username: "maria.b", email: "maria.bianchi@example.com", password: "mariaB!2024", name: "Maria", surname: "Bianchi"},
    {id: 4, username: "luca_neri", email: "luca.neri@prova.it", password: "lucaPass99", name: "Luca", surname: "Neri"},
    {id: 5, username: "alice123", email: "alice.verdi@example.com", password: "alicePwd1", name: "Alice", surname: "Verdi"},
    {id: 6, username: "carloM", email: "carlo.mancini@dominio.it", password: "cMancini2025", name: "Carlo", surname: "Mancini"},
    {id: 7, username: "francesca_r", email: "francesca.rossi@site.com", password: "franRossi!", name: "Francesca", surname: "Rossi"},
    {id: 8, username: "giovanni.t", email: "giovanni.testa@example.com", password: "gioTesta#123", name: "Giovanni", surname: "Testa"},
    {id: 9, username: "elena_l", email: "elena.longo@prova.com", password: "elenaL987", name: "Elena", surname: "Longo"},
    {id: 10, username: "davide.z", email: "davide.zatti@domain.com", password: "dzattiSecure", name: "Davide", surname: "Zatti"},
];

function login(emailUser, password) {
    let account = accounts.find(acc => (acc.email === emailUser || acc.username === emailUser) && acc.password === password) || null;
    if (account) {
        localStorage.setItem('currentUser', JSON.stringify(account));
        return {success: true, account: account};
    } else {
        return {success: false, message: "Invalid email/username or password."};
    }
}

function register(username, email, password, name, surname) {
    if (accounts.some(acc => acc.email === email)) {
        return {success: false, message: "Email already in use."};
    }
    if (accounts.some(acc => acc.username === username)) {
        return {success: false, message: "Username already taken."};
    }
    let newAccount = {
        id: accounts.length + 1,
        username: username,
        email: email,
        password: password,
        name: name,
        surname: surname
    };
    localStorage.setItem('currentUser', JSON.stringify(newAccount));
    return {success: true, account: newAccount};
}

function logout() {
    localStorage.removeItem('currentUser');
    return {success: true, message: "Logged out successfully."};
}

function auth() {
    let account = JSON.parse(localStorage.getItem('currentUser')) || null;
    if (account) {
        return {success: true, account: account};
    } else {
        return {success: false, message: "No user logged in."};
    }
}