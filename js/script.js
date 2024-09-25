document.getElementById('donateButton').addEventListener('click', function() {
    // Hide the donation section
    document.getElementById('donationSection').style.display = 'none';

    // Show the thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');
});
