document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // Event listener for adding a new post
    const newPostForm = document.getElementById('new-post-form');
    if (newPostForm) {
        newPostForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Capture the form data
            const title = document.getElementById('post-title').value.trim();
            const content = document.getElementById('post-content').value.trim();

            if (title && content) {
                // Send a POST request to the API endpoint
                const response = await fetch('/api/posts', {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // If successfully added post, reload the page to show the new post
                    document.location.reload();
                } else {
                    alert('Failed to create post.');
                }
            }
        });
    }

    // Event listener for the delete post button
    const deletePostButtons = document.querySelectorAll('.delete-post-btn');

    deletePostButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const postId = e.target.getAttribute('data-id');

            if (postId) {
                // Send a DELETE request to the API endpoint
                const response = await fetch(`/api/posts/${postId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // If successfully deleted the post, reload the page to update the post list
                    document.location.reload();
                } else {
                    alert('Failed to delete post.');
                }
            }
        });
    });
});
