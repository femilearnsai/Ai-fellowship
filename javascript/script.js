const abt= document.getElementById('myBtn');
const cont= document.getElementById('contact');
const skl = document.getElementById('skill');
const abtout = document.getElementById('myParagraph');
const contout = document.getElementById('contact-details');
const sklout = document.getElementById('skills-details');


abt.onclick = function(){
    abtout.style.display = "block";
    contout.style.display = "none";
    sklout.style.display = "none";

}

cont.onclick = function(){
    abtout.style.display = "none";
    contout.style.display = "block";
    sklout.style.display = "none";
}

skl.onclick = function(){
    abtout.style.display = "none";
    contout.style.display = "none";
    sklout.style.display = "block";

}