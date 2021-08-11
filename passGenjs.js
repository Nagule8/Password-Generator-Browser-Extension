var alertBox = document.querySelector("alert-box");


document.getElementById("copy-pass").addEventListener("click",copyPassword);
document.getElementById("generate").addEventListener("click",getPassword);


function getPassword()
    {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:<>?;,./[]=-";
        const passwordLength = document.getElementById("length").value;
        const removeValue = document.getElementById("dollor").value;
        var passWord = "";

        for(var i=0; i<passwordLength; i++){
            var randomNumber = Math.floor(Math.random()*chars.length);
            passWord += chars.substring(randomNumber,randomNumber+1); 
        }

        if(removeValue){
            passWord.replace(removeValue,Math.floor(Math.random()*chars.length));
        }
        document.getElementById("rpg").value = passWord;
    }

function copyPassword()
    {
        const textarea = document.createElement('textarea');
        const password = document.getElementById("rpg").value;
        
        if(!password) { alert("Password is empty"); }
        else{
            textarea.value = password;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            textarea.remove();

            alert('Password copied to clipboard');
        }
    }