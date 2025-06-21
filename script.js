const picData = {
    pic1: {
        cover: "./imgs/afternoon-clouds-1.webp",
        description: "Author to | Date to",
    },

    pic2: {
        cover: "",
        description: "",
    },

    pic3: {
        cover: "",
        description: "",
    },

    pic4: {
        cover: "",
        description: "",
    },

    pic5: {
        cover: "",
        description: "",
    },

    pic6: {
        cover: "",
        description: "",
    },

    pic7: {
        cover: "",
        description: "",
    },

    pic8: {
        cover: "",
        description: "",
    },

    pic9: {
        cover: "",
        description: "",
    },

    pic10: {
        cover: "",
        description: "",
    },

    pic11: {
        cover: "",
        description: "",
    },

    pic12: {
        cover: "",
        description: "",
    },

    pic13: {
        cover: "",
        description: "",
    },

    pic14: {
        cover: "",
        description: "",
    },

    pic15: {
        cover: "",
        description: "",
    },

    pic16: {
        cover: "",
        description: "",
    },

    pic17: {
        cover: "",
        description: "",
    },

    pic18: {
        cover: "",
        description: "",
    },

    pic19: {
        cover: "",
        description: "",
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
