// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Platform hint: the APK only works on Android
const note = document.getElementById('platformNote');
const btn = document.getElementById('downloadBtn');
const isAndroid = /android/i.test(navigator.userAgent);
const isApple = /iphone|ipad|ipod/i.test(navigator.userAgent);

if (isApple) {
    // iPhone / iPad: APK cannot be installed
    note.lastChild.textContent = ' Not available on iPhone — Android only';
    btn.setAttribute('aria-disabled', 'true');
    btn.style.opacity = '.55';
    btn.addEventListener('click', (e) => e.preventDefault());
} else if (!isAndroid) {
    // Desktop: let the user know to open the page on their phone
    note.lastChild.textContent = ' Open this page on your Android phone to install';
}

// Screenshots: remove images that fail to load, hide the section if none are left
const shotsSection = document.querySelector('.shots')?.closest('section');
const shotImgs = document.querySelectorAll('.shots img');
let remaining = shotImgs.length;

shotImgs.forEach((img) => {
    img.addEventListener('error', () => {
        img.remove();
        remaining--;
        if (remaining === 0 && shotsSection) shotsSection.hidden = true;
    });
});
