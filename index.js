
const input = document.querySelector('input');
const addBtn = document.querySelector('.container-search');
const ul = document.querySelector('ul');
const empty = document.querySelector('.parrafo');




addBtn.addEventListener('click', (e) => {

const text = input.value;


  if(text !== ''){


const li = document.createElement('li');
const p = document.createElement('p');
p.textContent = text;

li.appendChild(p);
li.appendChild(addDeleteBtn());
ul.appendChild(li);



  input.value = "";
  empty.style.display = 'none';
  }
  else{
    alert('Agregue una tarea');
  }

});

function addDeleteBtn()
{
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'x';
  deleteBtn.className = 'btn-delete';

  deleteBtn.addEventListener('click', (a) => {
    const item = a.target.parentElement;
    ul.removeChild(item);


    const items = document.querySelectorAll('li');

    if(items.length === 0)
    {
      empty.style.display = 'contents';
    }
     else
     {
     empty.style.display = 'none';
    }

  })

  
  return deleteBtn

}
