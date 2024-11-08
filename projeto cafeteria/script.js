       // JavaScript para criar folhas caindo

       const leafContainer = document.querySelector('.falling-leaves');

       function createLeaf() {
           const leaf = document.createElement('div');
           leaf.classList.add('leaf');
           
           // Posição aleatória e duração da animação
           leaf.style.left = Math.random() * window.innerWidth + 'px';
           leaf.style.animationDuration = Math.random() * 5 + 3 + 's'; // Entre 3s e 8s
           
           leafContainer.appendChild(leaf);
       
           // Remover folha após a animação
           setTimeout(() => {
               leaf.remove();
           }, 8000); // Mesmo valor máximo da duração de animação
       }
       
       // Criar folhas a cada intervalo de tempo
       setInterval(createLeaf, 500); // A cada 500ms, uma nova folha é criada