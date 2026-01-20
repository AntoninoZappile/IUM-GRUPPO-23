const tage = document.getElementById("tagarea");
const userArea = document.getElementById("userarea");
const dataArea = document.getElementById("dataarea");
const tagliste = document.getElementById("taglist");
let tagList = [];

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
            let tagHTML = "";
            tagList.forEach(element => {
                tagHTML += `<span class="flex align-center w-fit gap-2 bg-secondary text-base rounded-sm p-2 text-sm font-semibold mr-2 mb-2 hover:bg-secondary-50" onclick="removeTag('${element}')">${element}<i class="bi text-md bi-x-lg"></i></span>`;
            });
            tagliste.innerHTML = tagHTML;
            tagInput.value = "";
        }
    }
}

function removeTag(tag) {
    const tagTrim = tag.trim();
    tagList = tagList.filter(t => t !== tagTrim);
    let tagHTML = "";
    tagList.forEach(element => {
        tagHTML += `<span class="flex align-center w-fit gap-2 bg-secondary text-base rounded-sm p-2 text-sm font-semibold mr-2 mb-2 hover:bg-secondary-50" onclick="removeTag('${element}')">${element}<i class="bi text-md bi-x-lg"></i></span>`;
    });
    tagliste.innerHTML = tagHTML;
}

function toggleComment(btn, id) {
    const commentArea = document.getElementById(`comments-area-${id}`);
    const postArea = document.getElementById(`post-${id}`);
    console.log(commentArea);
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
    icon.classList.remove("bi-chevron-down");
    icon.classList.add("bi-chevron-up");
}