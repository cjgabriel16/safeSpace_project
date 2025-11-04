document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Sidebar Active State Handling (Consistency with Notifications Page) ---
    // This script highlights the "Following" link in the sidebar.
    function highlightFollowingNav() {
        // Remove 'active' class from all sidebar links first
        const navLinks = document.querySelectorAll('.sidebar-nav a');
        navLinks.forEach(link => {
            link.classList.remove('active'); 
        });

        // Find and add 'active' class to the Following link
        // We look for an href containing 'following' or a specific ID/class
        const followingLink = document.querySelector('.sidebar-nav a[href*="following"]');
        if (followingLink) {
             followingLink.classList.add('active');
        } 
        // Note: You can add an alternative selector here if your navigation uses icons/different text
    }
    
    highlightFollowingNav();
    

    // --- 2. Heart Icon Interaction (Toggle "Active" State) ---
    const followingList = document.querySelector('.following-list');

    if (followingList) {
        followingList.addEventListener('click', function(event) {
            
            const heartIcon = event.target.closest('.following-heart');
            
            // Check if the click occurred specifically on the heart icon
            if (heartIcon) {
                event.stopPropagation(); // Prevent the click from bubbling up to the card itself
                
                heartIcon.classList.toggle('active');
                
                const followingItem = heartIcon.closest('.following-item');
                const userId = followingItem ? followingItem.dataset.userId : null;
                const newState = heartIcon.classList.contains('active') ? 'liked' : 'unliked';

                console.log(`User ID ${userId} heart status toggled to: ${newState}`);
                
                // --- Django AJAX Integration ---
                // You would implement an AJAX call here to update the user's "saved" or 
                // "featured" status for this followed account on the Django server.
                /* fetch(`/api/following/${userId}/toggle_favorite/`, {
                    method: 'POST',
                    // ... include headers, CSRF token, etc. ...
                })
                .then(response => {
                    // Handle server response
                });
                */
            }
        });
        
        // --- 3. Card Click (Navigate to Profile) ---
        // Clicking the main card body should take the user to the profile page.
        followingList.addEventListener('click', function(event) {
            const followingItem = event.target.closest('.following-item');
            if (!followingItem) return;

            // Ensure the click didn't land on an internal interactive element
            const isInternalLink = event.target.closest('.user-link') || event.target.closest('.following-heart');
            if (isInternalLink) return;

            const userId = followingItem.dataset.userId;
            const profileURL = `/user/${userId}/`; // Example URL pattern
            
            console.log(`Navigating to profile: ${profileURL}`);
            // window.location.href = profileURL; // Uncomment this line to enable navigation
        });
    }
    
    // Helper function to get the CSRF token from cookies (needed for Django POST requests)
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