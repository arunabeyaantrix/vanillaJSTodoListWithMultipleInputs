
    if(name === 'ok_button'){

        if(item.value === "EDIT"){
            
            // console.log(index_array[1])
            var nameToEdit = document.getElementById('renderedName'+index_array[1]);
            // console.log(nameToEdit)
            nameToEdit.innerHTML = children[0].value;

            var mailToEdit = document.getElementById("renderMail"+index_array[1]);
            console.log(mailToEdit)
            mailToEdit.innerHTML = children[1].value
        }

        
    }
}


const newInputDiv = document.createElement('div');
    newInputDiv.classList.add("add_inputs");
    newInputDiv.setAttribute("id",'mainDiv_' + divCounter++ )

    const newNameInput = document.createElement('input');
    newNameInput.setAttribute('id', 'nameBar_' + nameCounter++)
    newNameInput.type = "text";
    newNameInput.placeholder = "Enter Name";
    newNameInput.classList.add("child")
    
    
    //email
    const newEmailInput = document.createElement('input');
    newEmailInput.setAttribute('id', 'emailBar_' + emailCounter++)
    newEmailInput.type = "text";
    newEmailInput.placeholder = "Enter Email";
    newEmailInput.classList.add("child")
    
    newInputDiv.appendChild(newEmailInput)

    //button

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

    // console.log(newInputDiv)

    newInputDiv.appendChild(newTrashButton)

    wrapDiv.appendChild(newInputDiv);
    