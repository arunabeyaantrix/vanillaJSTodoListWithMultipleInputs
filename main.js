var wrapDiv = document.querySelector('.wrapDiv');
var mainDiv = document.querySelector('.mainDiv')
var addinputButton = document.querySelector('.addInputButton');
var renderDiv =document.querySelector('.renderDiv');

addinputButton.addEventListener('click',addInputs);
wrapDiv.addEventListener('click',UpdateList);

// console.log(wrapDiv)

var divCounter = 1;
var nameCounter = 1;
var emailCounter = 1;
var passCounter = 1;
var okCounter = 1;
var delCounter = 1;

var renderDivCounter = 0;
var renderNameCounter = 0;
var renderEmailCounter = 0;
var arr = []
function addInputs(event){
    
    const newInputDiv = document.createElement("div");
    newInputDiv.setAttribute("id", "mainDiv_" + divCounter ++)

   

    const newNameInput = document.createElement("input");
    newNameInput.setAttribute("id", "nameBar_" + nameCounter++)
    newNameInput.type = "text";
    newNameInput.placeholder = "Enter Name";
    newNameInput.classList.add("child")

    newInputDiv.appendChild(newNameInput)

    const newMailInput = document.createElement("input");
    newMailInput.setAttribute("id", "emailBar_" + emailCounter++)
    newMailInput.type = "text";
    newMailInput.placeholder = "Enter Mail";
    newMailInput.classList.add("child")

    newInputDiv.appendChild(newMailInput)

    const newPassInput = document.createElement("input");
    newPassInput.setAttribute("id", "passwordBar_" + passCounter++)
    newPassInput.type = "password";
    newPassInput.placeholder = "Enter password";
    newPassInput.classList.add("child")

    newInputDiv.appendChild(newPassInput)


    const newOkButton = document.createElement('input');
    newOkButton.setAttribute('id','okBar_' + okCounter ++);
    newOkButton.value = "OK";
    newOkButton.type= "button"
    newOkButton.classList.add("ok_button");

    newInputDiv.appendChild(newOkButton)

    const newTrashButton = document.createElement('button');
    newTrashButton.setAttribute('id','delBar_' + delCounter ++);
    newTrashButton.innerHTML = "DEL";
    newTrashButton.classList.add("trash_button");

    newInputDiv.appendChild(newTrashButton)

    wrapDiv.appendChild(newInputDiv);
    // console.log(divCounter)
    
    
}

function UpdateList(event){
    
    const item = event.target;
    // console.log(item)
    const name = item.classList[0];

    const item_array = item.parentElement;
    // console.log(item_array)

    const children = item_array.querySelectorAll('.child');

    // console.log(children);

    if(name === 'trash_button'){
        const id_name = item.id
        const index_array = id_name.split("_");
        console.log(index_array)
        console.log("mainRenderDiv_" + index_array[1]);
        const item_to_remove = document.getElementById("mainRenderDiv_" + index_array[1])
        console.log(item_to_remove)
        const div_to_remove = document.getElementById("mainDiv_" + index_array[1])
        console.log(div_to_remove);
        div_to_remove.remove()
        item_to_remove.remove()

    }
    if(name === 'ok_button'){
        if(item.value === "OK"){
            item.value = 'EDIT';
          
            const ok_id = parseInt(item.id.split("_")[1]);

            arr.push(ok_id) 
            arr.sort()

            var temp_arr = []

            for(i = 0; i <= arr.length; i++){
                if(arr[i] > ok_id){
                    temp_arr.push(arr[i])
                }
            }

            // console.log(temp_arr[0]);
            
            const nextRenderedSibling = document.getElementById("mainRenderDiv_" + temp_arr[0]);
            // console.log(nextRenderedSibling);
           
            
            const index_array = item.id.split("_");
            const newRenderDiv = document.createElement('div');
            newRenderDiv.classList.add("render_div");
            newRenderDiv.setAttribute("id",'mainRenderDiv_' + index_array[1] )

            const newRenderName = document.createElement('p');
            newRenderName.innerText = children[0].value;
            newRenderName.setAttribute("id", "renderedName" + index_array[1]);
            newRenderName.classList.add("rendered_child")
            newRenderDiv.appendChild(newRenderName)


            const newRenderMail = document.createElement('p');
            newRenderMail.innerText = children[1].value;
            newRenderMail.setAttribute("id", "renderMail"+ index_array[1]);
            newRenderMail.classList.add("rendered_child");
            newRenderDiv.appendChild(newRenderMail);

            // console.log(newRenderDiv)

            if(nextRenderedSibling != null){
                renderDiv.insertBefore(newRenderDiv,nextRenderedSibling)
            }
            else{
                renderDiv.appendChild(newRenderDiv);
            }
            


            // console.log(item_array)
            const edit_index = item_array.id.split("_");
            const name_to_edit = document.getElementById("nameBar_" + edit_index[1]);
        //    console.log(name_to_edit) 
            const newNameElement = document.createElement("p");
            newNameElement.innerHTML = "******";
            newNameElement.setAttribute("id", "nameBar_"+ edit_index[1])
            name_to_edit.parentElement.replaceChild(newNameElement,name_to_edit);

            const email_to_edit = document.getElementById("emailBar_" + edit_index[1]);
            const newMailElement = document.createElement("p");
            newMailElement.innerHTML = "******";
            newMailElement.setAttribute("id", "emailBar_"+ edit_index[1])
            email_to_edit.parentElement.replaceChild(newMailElement,email_to_edit);
            

           

        }
        else if(item.value === "EDIT"){
            

            const edit_index = item_array.id.split("_");
            const fetch_name = document.getElementById("renderedName"+ edit_index[1]);
            const fetch_mail = document.getElementById("renderMail"+ edit_index[1]);

            // console.log(fetch_name)
            
            const name_to_replace = document.getElementById("nameBar_" + edit_index[1]);
            // console.log(name_to_replace)

            const restoreNameElement = document.createElement("input");
            restoreNameElement.value = fetch_name.innerHTML;
            restoreNameElement.setAttribute("id", "nameBar_" + edit_index[1])
            restoreNameElement.classList.add("child")
            name_to_replace.parentElement.replaceChild(restoreNameElement,name_to_replace);


            const email_to_replace = document.getElementById("emailBar_" + edit_index[1]);
            // console.log(email_to_replace);
            const restoreMailElement = document.createElement("input");
            restoreMailElement.value = fetch_mail.innerHTML;
            restoreMailElement.setAttribute("id", "emailBar_" + edit_index[1])
            restoreMailElement.classList.add("child")
            email_to_replace.parentElement.replaceChild(restoreMailElement,email_to_replace);
           
            item.value = 'OK!';

            
           
            
        }
        else if(item.value === "OK!"){
            
            const item = event.target;
            console.log(item)
            const name = item.classList[0];

            const item_array = item.parentElement;
            console.log(item_array)

            const children = item_array.querySelectorAll('.child');
            const edit_index = item_array.id.split("_");
            var nameToEdit = document.getElementById('renderedName'+edit_index[1]);
            // console.log(nameToEdit)
            nameToEdit.innerHTML = children[0].value;

            var mailToEdit = document.getElementById("renderMail"+edit_index[1]);
            console.log(mailToEdit)
            mailToEdit.innerHTML = children[1].value;
            item.value = 'EDIT';

            

        }
    }

}