const d = new Date();
let year = d.getFullYear();
document.getElementById("copyr").innerHTML = `@ ${year} .:|:. Troy J. Nightingale .:|:. Minnesota`;

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;