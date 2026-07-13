import { db } from "./firebase-config.js";


import {

doc,

updateDoc,

serverTimestamp

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";






window.submitRSVP = async function(answer){



const guest = window.currentGuest;



if(!guest){

alert("Guest not identified");

return;

}




const guestRef =

doc(
db,
"Guests",
guest.id
);





await updateDoc(

guestRef,

{

rsvp:answer,

respondedAt:serverTimestamp()

}


);




document.getElementById(
"guestRSVP"
).style.display="none";



document.getElementById(
"responseMessage"
).style.display="block";





if(answer==="YES"){


document.getElementById(
"thankText"
).innerHTML =

`
Dear ${guest.name}, ❤️

<br><br>

We are delighted that you will be joining us.

<br>

We can't wait to celebrate our special day with you.

`;

}


else{


document.getElementById(
"thankText"
).innerHTML =

`
Dear ${guest.name}, ❤️

<br><br>

Thank you for letting us know.

We will miss having you with us on our special day.

`;

}



};





window.changeResponse=function(){


document.getElementById(
"guestRSVP"
).style.display="block";


document.getElementById(
"responseMessage"
).style.display="none";


}