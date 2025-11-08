// 1. Initialize last scroll position

// 2. Get the header element

// 3. Listen for scroll events
      // 3.1 Get current scroll position

      // 3.2 Determine scroll direction
          // 3.2.1 Scrolling down → hide header
          // 3.2.2 Scrolling up → show header

      // 3.3 Update last scroll position

let header=document.querySelector('header');

let lastScrollPosition=0;

window.addEventListener('scroll',function(){
  const currentScrollPosition=this.window.scrollY;

  if(currentScrollPosition>lastScrollPosition){
    header.classList.add('hidden');
  }else{
    header.classList.remove('hidden');
  }
  lastScrollPosition=currentScrollPosition;
});
