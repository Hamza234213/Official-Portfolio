const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('userMessage').value.trim();

  if (name && email && message) {
    addComment(name, message);
    commentForm.reset();
  }
});

function addComment(name, message) {
  const li = document.createElement('li');
  li.className = 'list-group-item comment-card mb-3 text-white';

  li.innerHTML = `
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <strong>${name}</strong>
        <p style="margin: 4px 0;">${message}</p>
      </div>
      <button class="btn btn-sm btn-danger delete-btn">Delete</button>
    </div>
  `;

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  commentList.appendChild(li);
}