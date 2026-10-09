const menu = document.getElementById('menu');
const links = document.getElementById('links');
menu.addEventListener('click', () => { links.classList.toggle('open'); menu.textContent = links.classList.contains('open') ? '×' : '☰'; });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); menu.textContent = '☰'; }));
document.getElementById('copyEmail').addEventListener('click', async e => { const email=e.currentTarget.dataset.email; const feedback=document.getElementById('feedback'); if(email==='YOUR_EMAIL@example.com'){feedback.textContent='Replace YOUR_EMAIL@example.com in index.html with your real email first.';return;} try{await navigator.clipboard.writeText(email);feedback.textContent='Email copied to clipboard.';}catch{feedback.textContent='Your email: '+email;} });
