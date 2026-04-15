document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;
    if (link.target === '_blank') return;
    if (!link.href || link.href.includes('#')) return;

    e.preventDefault();
    const href = link.href;
    document.body.style.transition = 'opacity 0.25s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 250);
});
