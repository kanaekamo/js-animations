const listItems = document.querySelectorAll('.list-item');
listItems.forEach((listItem)=>{
  listItem.addEventListener('click',()=>{
    const content = listItem.querySelector('.list-content');
    content.classList.toggle('active');
    if(content.classList.contains('active')){
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0px';
    }
  });
});