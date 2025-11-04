document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Sidebar Active State Handling ---
    function highlightNotificationNav() {
        const navLinks = document.querySelectorAll('.sidebar-nav a');
        navLinks.forEach(link => {
            link.classList.remove('active'); 
        });

        // Try to find the Notifications link specifically,
        // either by href containing 'notifications' or by a specific data attribute/ID
        const notificationLink = document.querySelector('.sidebar-nav a[href*="notifications"]');
        if (notificationLink) {
             notificationLink.classList.add('active');
        } else {
            // Fallback: If not found by href, try targeting the link that contains a bell icon
            // This selector might need adjustment based on your actual sidebar HTML
            const bellIconLink = document.querySelector('.sidebar-nav a:has(.fa-bell)'); 
            if (bellIconLink) {
                bellIconLink.classList.add('active');
            }
        }
    }
    
    highlightNotificationNav();
    

    // --- 2. Client-Side Read/Unread Status Toggle (clicking anywhere on item) ---
    const notificationList = document.getElementById('notificationList');

    if (notificationList) {
        notificationList.addEventListener('click', function(event) {
            
            const item = event.target.closest('.notification-item');
            if (!item) return;

            // Prevent marking as read if clicking directly on a user link or the heart icon
            const isInteractiveElement = event.target.closest('.user-link') || event.target.closest('.notification-heart');
            if (isInteractiveElement) {
                // You could add specific logic for the heart click here if needed
                if (event.target.classList.contains('notification-heart')) {
                    event.target.classList.toggle('active'); // Toggle heart active state
                    // Add AJAX call here to update like status on server
                }
                return;
            }
            
            if (item.classList.contains('unread')) {
                const notificationId = item.dataset.id;
                
                item.classList.remove('unread');
                console.log(`Notification ID ${notificationId} marked as read.`);
                
                // --- Django AJAX Integration for marking as read ---
                // Uncomment and implement proper CSRF token handling if you need this
                /*
                fetch(`/api/notifications/${notificationId}/read/`, {
                    method: 'POST',
                    headers: {
                        'X-CSRFToken': getCookie('csrftoken'),
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    if (!response.ok) {
                        console.error('Failed to mark notification as read on server.');
                        item.classList.add('unread'); // Revert if server fails
                    }
                })
                .catch(error => {
                    console.error('Network error during mark as read:', error);
                    item.classList.add('unread'); // Revert on network error
                });
                */
            }
        });
    }

    // Helper function for CSRF token (remains the same)
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});