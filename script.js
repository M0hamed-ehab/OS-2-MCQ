let score = 0;
let totalAttempted = 0;

function toggle(btn) {
    const qBlock = btn.closest('.q-block');
    const panel = qBlock.querySelector('.ans-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

window.check = function (optionEl) {
    const qBlock = optionEl.closest('.q-block');
    const opts = qBlock.querySelectorAll('.option');
    const panel = qBlock.querySelector('.ans-panel');
    const ansText = qBlock.querySelector('[id^="ans-text"]')
        ?.textContent
        .trim()
        .toLowerCase();

    // Prevent double answering
    if (qBlock.dataset.answered) return;
    qBlock.dataset.answered = "true";

    const correctLetter = ansText[0];

    opts.forEach(opt => {
        const text = opt.textContent.trim().toLowerCase();

        if (text.startsWith(correctLetter)) {
            opt.classList.add('correct');
            if (opt === optionEl) score++;
        } else if (opt === optionEl) {
            opt.classList.add('incorrect');
        }
    });

    document.getElementById('score').innerText = score;

    panel.style.display = 'block';
};
