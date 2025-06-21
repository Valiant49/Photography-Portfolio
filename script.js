const picData = {
    pic1: {
        cover: "./imgs/afternoon-clouds-1.webp",
        description: "Author to | Date to",
    },

    pic2: {
        cover: "./imgs/bread-1.webp",
        description: "",
    },

    pic3: {
        cover: "./imgs/456-hotel-food-1.webp",
        description: "",
    },

    pic4: {
        cover: "./imgs/cvsu-indang-sky.webp",
        description: "",
    },

    pic5: {
        cover: "./imgs/batangas-waters.webp",
        description: "",
    },

    pic6: {
        cover: "./imgs/baguio-market.webp",
        description: "",
    },

    pic7: {
        cover: "./imgs/food-in-a-container.webp",
        description: "",
    },

    pic8: {
        cover: "./imgs/38th-street.webp",
        description: "",
    },

    pic9: {
        cover: "./imgs/tff-yang-chow-rice.webp",
        description: "",
    },

    pic10: {
        cover: "./imgs/456-hotel.webp",
        description: "",
    },

    pic11: {
        cover: "./imgs/camp-john-hay-amphitheater.webp",
        description: "",
    },

    pic12: {
        cover: "./imgs/church-facade.webp",
        description: "",
    },

    pic13: {
        cover: "./imgs/clouds-1.webp",
        description: "",
    },

    pic14: {
        cover: "./imgs/sunset-orange.webp",
        description: "",
    },

    pic15: {
        cover: "./imgs/sunset-orange.webp",
        description: "",
    },

    pic16: {
        cover: "./imgs/456-hotel-food.webp",
        description: "",
    },

    pic17: {
        cover: "./imgs/cvsu-indang-resort.webp",
        description: "",
    },

    pic18: {
        cover: "./imgs/house-by-the-cliff.webp",
        description: "",
    },

    pic19: {
        cover: "./imgs/mukbang.webp",
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
