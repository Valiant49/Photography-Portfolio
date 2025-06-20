const picData = {
    pic1: {
        cover: "Pic1.webp",
        description: "Author to | Date to",
    },
}

function openPicModal(picId) {
    const modal = document.getElementById('picModal');
    const pic = picData[picId];
    
    // Update modal content
    document.getElementById('modalPicCover').src = pic.cover;
    document.getElementById('modalPicDescription').textContent = pic.description;
    
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking the X button
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('picModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('picModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Add this function to update book display
function displayResults(results, container) {
    container.innerHTML = '';

    results.forEach(([picId, pic]) => {
        const picCard = document.createElement('div');
        picCard.className = 'pic-card';
        picCard.setAttribute('onclick', `openPicModal('${picId}')`);
        
        picCard.innerHTML = `
            <div class="pic-cover">
                <img src="${pic.cover}" width="200" height="300" />
            </div>
            <div class="pic-content">
                <p>${pic.author}</p>
            </div>
        `;
        
        container.appendChild(picCard);
    });
}
