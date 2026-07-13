// ==========================================
// GUEST IDENTIFICATION SYSTEM
// ==========================================


import { db } from "./firebase-config.js";


import {

doc,

getDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// Get guest ID from URL


const urlParams = 

new URLSearchParams(
window.location.search
);



const guestID =

urlParams.get("guest");





const guestArea =

document.getElementById(
"guestArea"
);





async function loadGuest(){


if(!guestID){


guestArea.innerHTML =

"";


return;

}





try{


const guestRef =

doc(
db,
"Guests",
guestID
);



const guestSnap =

await getDoc(guestRef);




if(guestSnap.exists()){


const guestData =

guestSnap.data();




window.currentGuest = {

    id: guestID,
    
    name: guestData.name
    
    };
    
    
    document.getElementById("guestName").innerHTML =
    guestData.name;



}

else{


guestArea.innerHTML =

`

<p>

Invitation not found.

</p>

`;



}



}

catch(error){


console.log(error);


guestArea.innerHTML =

`

<p>

Unable to load invitation.

</p>

`;


}


}





loadGuest();