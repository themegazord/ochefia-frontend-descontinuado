<template>
  <div id="home">
      <div class="principal-left-container">
          <!-- <span class="typed-text"></span><span class="cursor">&nbsp;</span> -->
          <h1 class="main-text-left-container">O sistema feito sob medida para controlar seu bar.</h1>
          <h3 class="info-text-left-container">Controle seus pedidos delivery, vendas, estoque de uma forma fácil e rápida, no seu computador ou celular.</h3>
      </div>
      <div class="principal-right-container">
          <img class="img-system-mockup" src="https://i.ibb.co/g64NzdV/image.png" alt="image">
      </div>
  </div>
</template>
<script>
export default {
  // mounted () {
  //     const typedTextSpan = document.querySelector(".typed-text");
  //     const cursorSpan = document.querySelector(".cursor");

  //     const textArray = ["seu bar.", "seu restaurante.", "sua sorveteria.", "sua tabacaria.", "seu botequim."];
  //     const typingDelay = 200;
  //     const erasingDelay = 100;
  //     const newTextDelay = 2000; // Delay between current and next text
  //     let textArrayIndex = 0;
  //     let charIndex = 0;

  //     function type() {
  //     if (charIndex < textArray[textArrayIndex].length) {
  //         if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  //         charIndex++;
  //         setTimeout(type, typingDelay);
  //     }
  //     else {
  //         cursorSpan.classList.remove("typing");
  //         setTimeout(erase, newTextDelay);
  //     }
  //     }

  //     function erase() {
  //     if (charIndex > 0) {
  //         if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
  //         charIndex--;
  //         setTimeout(erase, erasingDelay);
  //     }
  //     else {
  //         cursorSpan.classList.remove("typing");
  //         textArrayIndex++;
  //         if(textArrayIndex>=textArray.length) textArrayIndex=0;
  //         setTimeout(type, typingDelay + 1100);
  //     }
  //     }

  //     document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  //     if(textArray.length) setTimeout(type, newTextDelay + 250);
  //     });
  // }
}
</script>
<style>
#home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(100vh - 7rem);
  background-color: var(--light-grayish-orange);
}

.principal-left-container {
  display: flex;
  width: 32rem;
  padding: 4.5rem 1.5625rem 4.5rem 1.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.main-text-left-container {
  width: 28.8125rem;
  color: var(--primary-black);
  font-size: 3.25rem;
  font-family: var(--primary-font);
}

span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes blink {
  0%  { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #ccc; }
}

.info-text-left-container {
  display: flex;
  flex-direction: column;
  width: 27.3125rem;
  color: var(--primary-black);
  font-size: 1.625rem;
  font-family: var(--primary-font);
}

.img-system-mockup {
  width: 48.5rem;
  height: 38.25rem;
}
</style>
