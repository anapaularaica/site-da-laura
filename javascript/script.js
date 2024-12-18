document.getElementById('showImagesBtn').addEventListener('click', function() {
    for (let i = 0; i < 20; i++) {  // Ajuste o número de imagens aqui
      let img = document.createElement('img');
      img.src = 'https://i.pinimg.com/736x/14/8b/67/148b67fd6cf0728a6836fd2f58974e22.jpg';
      img.alt = 'Laura Emoji';
      img.classList.add('floating-image');
  
      // Adiciona uma posição aleatória na tela
      img.style.left = Math.random() * window.innerWidth + 'px';
      img.style.top = Math.random() * window.innerHeight + 'px';
  
      document.body.appendChild(img);
  
      // Remover a imagem após a animação
      setTimeout(function() {
        img.remove();
      }, 4000); // Remove após o tempo da animação
    }
  });
  