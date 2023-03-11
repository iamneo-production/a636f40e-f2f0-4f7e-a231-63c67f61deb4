import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
      </header>
    </div>
  );
}

// Fetch comments from the API or database
async function fetchComments() {
  const response = await fetch('https://example.com/comments');
  const comments = await response.json();
  return comments;
}

// Add a new comment to the API or database
async function addComment(text) {
  const response = await fetch('https://example.com/comments', {
    method: 'POST',
    body: JSON.stringify({ text: text })
  });
  const comment = await response.json();
  return comment;
}

// Show the comments in the container element
async function showComments() {
  const comments = await fetchComments(); // fetch comments from API or database

  // Get the container element for the comments
  const commentsContainer = document.getElementById('comments-container');

  // Clear the container element to avoid duplicate comments
  commentsContainer.innerHTML = '';

  // Create an HTML element for each comment
  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <h4>${comment.name}</h4>
      <p>${comment.body}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
}

// Add a new comment when the form is submitted
function submitComment(event) {
  event.preventDefault(); // prevent default form submission behavior

  // Get the new comment text from the input element
  const newCommentText = document.getElementById('new-comment-text').value;

  // Add the new comment to the database or API
  addComment(newCommentText);

  // Clear the input element
  document.getElementById('new-comment-text').value = '';

  // Refresh the comments section to show the new comment
  showComments();
}
window.onload = function() {
  showComments();
};



export default App;
