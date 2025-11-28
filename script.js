// Modal / Projects interaction script
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImage = document.getElementById('modal-image');
    const modalThumbs = document.getElementById('modal-thumbs');
    const modalVisit = document.getElementById('modal-visit');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    const closeBtn = document.querySelector('.modal-close');

    let images = [];
    let current = 0;

    function showImage(index) {
        current = (index + images.length) % images.length;
        modalImage.src = images[current];
        // mark thumbs
        const thumbs = modalThumbs.querySelectorAll('img');
        thumbs.forEach((t, i) => t.classList.toggle('selected', i === current));
    }

    function buildThumbs() {
        modalThumbs.innerHTML = '';
        images.forEach((src, i) => {
            const t = document.createElement('img');
            t.src = src;
            t.alt = `Imagem ${i + 1}`;
            t.addEventListener('click', () => showImage(i));
            modalThumbs.appendChild(t);
        });
    }

    function openModal(projectEl) {
        const title = projectEl.dataset.title || '';
        const desc = projectEl.dataset.desc || '';
        const url = projectEl.dataset.url || '#';
        const imgs = (projectEl.dataset.images || '').split(',').map(s => s.trim()).filter(Boolean);

        images = imgs.length ? imgs : ['img/zyora.png'];
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalVisit.href = url;
        buildThumbs();
        showImage(0);
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // attach openers
    document.querySelectorAll('.card-project .btn-info').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.card-project');
            if (card) openModal(card);
        });
    });

    // close handlers
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', (e) => {
        // only close when clicking overlay, not panel
        if (e.target === el) closeModal();
    }));

    // prev / next
    if (prevBtn) prevBtn.addEventListener('click', () => showImage(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showImage(current + 1));

    // keyboard
    document.addEventListener('keydown', (e) => {
        if (modal.getAttribute('aria-hidden') === 'false') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showImage(current - 1);
            if (e.key === 'ArrowRight') showImage(current + 1);
        }
    });

});

