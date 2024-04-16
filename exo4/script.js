// Définir une classe BlogPost pour représenter un article de blog
class BlogPost {
    constructor(text) {
        this.text = text;
        this.date = new Date().toLocaleString(); // Date actuelle
    }

    // Méthode pour afficher l'article de blog dans le DOM
    display() {
        const blogPosts = document.getElementById('blogPosts');
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-content">${this.text}</div>
            <div class="post-date">Date: ${this.date}</div>
        `;
        blogPosts.appendChild(postElement);

        // Ajouter la nouvelle entrée dans le tableau
        const blogTableBody = document.getElementById('blogTableBody');
        const newRow = blogTableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = this.text;
        cell2.textContent = this.date;
    }
}

// Définir une classe Blog pour gérer les opérations liées au blog
class Blog {
    constructor() {
        this.posts = [];
    }

    // Méthode pour ajouter un nouvel article de blog
    addPost(text) {
        const post = new BlogPost(text);
        this.posts.push(post);
        post.display();
    }
}

// Instance de la classe Blog
const blog = new Blog();

// Récupérer les éléments du DOM
const blogTextArea = document.getElementById('blogText');
const saveButton = document.getElementById('saveBtn');

// Ajouter un écouteur d'événements au bouton "Enregistrer"
saveButton.addEventListener('click', () => {
    const text = blogTextArea.value;
    if (text.trim() !== '') {
        blog.addPost(text);
        blogTextArea.value = ''; // Effacer le champ de texte après l'enregistrement
    } else {
        alert('Veuillez écrire quelque chose avant d\'enregistrer.');
    }
});
