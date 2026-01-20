function getForumPosts() {
    let res;
    fetch("data/forumPosts.json").thebn(response => {
        return response.json();
    }).then(data => {
        res = data;
    });
    return res;
}

function createForumPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("forum-post");
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <span>By ${post.author} on ${new Date(post.date).toLocaleDateString()}</span>
    `;
    return postElement;
}

function displayForumPosts() {
    const postsContainer = document.getElementById("postsContainer");
    const posts = getForumPosts();
    posts.forEach(post => {
        const postElement = createForumPostElement(post);
        postsContainer.appendChild(postElement);
    });
}