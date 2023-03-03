
let textarea = document.querySelector('.textarea');
let btn = document.querySelector('.submit');
let todocontainer = document.querySelector('.todocontainer');
let maincontainer = document.querySelector('.maincontainer');


const load = () => {
    todocontainer.innerHTML = null;
    for(let i=0; localStorage.getItem(i)!=null ;i++){
        if(localStorage.getItem(i) != ""){
            todocontainer.insertAdjacentHTML("afterbegin",`<div class='todoelement'>
                <div class='todoname' id='namethis${i}' contenteditable>${localStorage.getItem(i)}</div>
                    <div class="todooperations">
                        <div class="todoedit" id="editthis${i}"><a><img
                            src="images/checked.png" class="editimage" /></a>
                        </div>
                        <div class="tododelete" id="deletethis${i}"><a><img class='deleteimage' src="images/delete.png" /></a>
                        </div>
                    </div>
                </div>
              </div>`)
        }
        else{
            continue;
        }
    }

    maincontainer.style.height = todocontainer.style.height;
}
load();


const all = () =>{
    for(let l=0; localStorage.getItem(l) != null; l++){
        if(localStorage.getItem(l) != ""){
            const editClickHandler = (index) =>{
                localStorage.setItem(index,document.getElementById(`namethis${l}`).innerHTML);
            }
            
            document.getElementById(`editthis${l}`).addEventListener("click",()=>{
                editClickHandler(l);
                document.getElementById(`editthis${l}`).classList.remove('effect');
            });
            
        
            const deleteClickHandler = (index) =>{
                localStorage.setItem(index,'');
                load();
                all();
            }
        
            document.getElementById(`deletethis${l}`).addEventListener("click", ()=>{
                deleteClickHandler(l);
            })

            document.getElementById(`namethis${l}`).addEventListener("click", ()=>{
                document.getElementById(`editthis${l}`).classList.add('effect');
            })
        }
        else{
            continue;
        }
    }
}
all();



let i = 0;
if(localStorage.getItem(i)==null){
    var s = 0;
}
else{
    for(i; localStorage.getItem(i)!=null ; i++){
        continue;
    }
    var s = i;
}

function submitClickFunction(){
    if(textarea.value != ""){
        todocontainer.insertAdjacentHTML('afterbegin',`<div class='todoelement'>
        <div class='todoname' id='namethis${s}' contenteditable>${textarea.value}</div>
            <div class="todooperations">
                <div class="todoedit" id="editthis${s}"><a><img
                    src="images/checked.png" class="editimage" /></a>
                </div>
                <div class="tododelete" id="deletethis${s}"><a><img class="deleteimage" src="images/icons8-trash-24.png" /></a>
                </div>
            </div>
        </div>
      </div>`)
      localStorage.setItem(s,`${textarea.value}`);
      s+=1;
      textarea.value=null;
      load();
      all();
    }
    else{
        return;
    }
}

textarea.addEventListener("click",()=>{
    btn.classList.add('effect');
})


btn.addEventListener("click", function submitClickHandler(){
    submitClickFunction();
    btn.classList.remove('effect');
});

