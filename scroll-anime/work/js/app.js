document.addEventListener("DOMContentLoaded",()=>{
  const observer = new IntersectionObserver((entrise)=>{
    entrise.forEach((entry)=>{
      if (entry.isIntersecting){
        entry.target.classList.add("displayed");
      }else{
        entry.target.classList.remove("displayed");
      }
    });
  },{threshold:1});
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box)=>{
    observer.observe(box);
  });
});
