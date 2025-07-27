
let ani = document.getElementById("skills");
let text =["An enthusiastic fresher in web design and development." , "I’m passionate about crafting innovative user-friendly digital experiences and excited to contribute to impactful projects."];
let i=0;

function addtext(){
    ani.textContent=text[i];
    i= i+1;
    if(i===text.length)
    {
        i=0;
    }
}

    setInterval(addtext,4000)
  
   addtext();



let resume = document.getElementById("resume");
function show(){
    resume.style.display = 'flex';
}

function hideCv(){
    resume.style.display = 'none';
}
       
