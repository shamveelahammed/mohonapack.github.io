// Handle PDF downloads
document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('a[download]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const pdfUrl = this.getAttribute('href');
            
            if (!pdfUrl) {
                alert('PDF file not found. Please contact support.');
                return;
            }
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = pdfUrl.split('/').pop() || 'document.pdf';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});