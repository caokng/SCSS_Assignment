document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Could not fetch ${file}`);
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  });
});