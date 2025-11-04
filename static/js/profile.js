document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Follow/Unfollow Button Logic ---
    const followButton = document.querySelector('.btn-unfollow');

    if (followButton) {
        followButton.addEventListener('click', function() {
            const isFollowing = followButton.textContent.trim() === 'Following';
            const profileUserId = followButton.closest('.profile-banner-card').dataset.userId || 'placeholder-id';

            if (isFollowing) {
                // If currently 'Following', change to 'Follow'
                followButton.textContent = 'Follow';
                followButton.classList.remove('btn-unfollow');
                followButton.classList.add('btn-follow-new'); // Add a class for the new state style

                console.log(`Unfollowing user ID: ${profileUserId}`);
                // Implement AJAX call to unfollow
            } else {
                // If currently 'Follow', change to 'Following'
                followButton.textContent = 'Following';
                followButton.classList.remove('btn-follow-new');
                followButton.classList.add('btn-unfollow');

                console.log(`Following user ID: ${profileUserId}`);
                // Implement AJAX call to follow
            }
            
            // You'd also need to update the button's background/border in CSS 
            // for the '.btn-follow-new' state if necessary.
        });
    }

    // --- 2. Article Card Click Navigation ---
    const articleList = document.querySelector('.article-list');

    if (articleList) {
        articleList.addEventListener('click', function(event) {
            
            const articleCard = event.target.closest('.article-card');
            if (!articleCard) return;
            
            // Prevent navigation if clicking on the heart icon
            if (event.target.closest('.following-heart')) {
                event.target.closest('.following-heart').classList.toggle('active');
                // Implement AJAX call to toggle article like/clap
                return;
            }

            const articleId = articleCard.dataset.articleId;
            const articleURL = `/article/${articleId}/`; // Example URL pattern
            
            console.log(`Navigating to article: ${articleURL}`);
            // window.location.href = articleURL; // Uncomment this line to enable navigation
        });
    }
});