document.getElementById('downloadButton').addEventListener('click', function() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'Library_Website.zip';
    link.download = 'Library_Website.zip';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Button feedback
    const btn = this;
    btn.innerHTML = '<i class="fas fa-check"></i> Download Started!';
    btn.style.background = '#4CAF50';
    
    // Reset button after 3 seconds
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-download"></i> Download Now';
        btn.style.background = 'linear-gradient(45deg, #6a11cb, #2575fc)';
    }, 3000);
});

// Initialize file icon animation
document.addEventListener('DOMContentLoaded', function() {
    const fileIcon = document.querySelector('.file-icon');
    fileIcon.style.animation = 'float 3s ease-in-out infinite';
});
