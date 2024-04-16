// Définir une classe BlogPost pour représenter un article de blog
class BlogPost {
    constructor(text) {
        this.text = text;
        this.date = new Date().toLocaleString(); // Date actuelle
    }

    // Méthode pour afficher l'article de blog dans le DOM
    display() {
        var blogPosts = document.getElementById('blogPosts');
        var postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-content">${this.text}</div>
            <div class="post-date">Date: ${this.date}</div>
        `;
        blogPosts.appendChild(postElement);

        // Ajouter la nouvelle entrée dans le tableau
        var blogTableBody = document.getElementById('blogTableBody');
        var newRow = blogTableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
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
        var post = new BlogPost(text);
        this.posts.push(post);
        post.display();
    }
}

// Instance de la classe Blog
var blog = new Blog();

// Récupérer les éléments du DOM
var blogTextArea = document.getElementById('blogText');
var saveButton = document.getElementById('saveBtn');

// Ajouter un écouteur d'événements au bouton "Enregistrer"
saveButton.addEventListener('click', () => {
    var text = blogTextArea.value;
    if (text.trim() !== '') {
        blog.addPost(text);
        blogTextArea.value = ''; // Effacer le champ de texte après l'enregistrement
    } else {
        alert('Veuillez écrire quelque chose avant d\'enregistrer.');
    }
});
