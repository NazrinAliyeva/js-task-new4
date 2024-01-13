const allTags=document.querySelectorAll("li")
const body=document.querySelector("body")
body.className='body';
body.style.backgroundColor="#000";
for(let i=0;i<allTags.length;i++){
    allTags[i].textContent='Hello';
}
const date = new Date();
for(let i=0;i<allTags.length;i++){
    allTags[i].className='item';
    allTags[i].style.color='#fff'
    allTags[i].style.listStyle='none'
    allTags[i].style.border="1px solid gray"
}
const timeTag=document.querySelector("h2")
timeTag.style.color="#fff"
timeTag.textContent=date;
let array=['yuxudan durmaq','mektebe getmek','mektebden qayitmaq','yemek yemek','derse getmek','dersden qayitmaq','tapsiriq etmek','yatmaq']
const allParagraphTags=document.querySelectorAll('p')
for(let i=0;i<allParagraphTags.length;i++){
    allParagraphTags[i].style.color='white'
}
allParagraphTags[1].textContent=array[0];
allParagraphTags[2].textContent=array[1]
allParagraphTags[3].textContent=array[2]
allParagraphTags[4].textContent=array[3]
allParagraphTags[5].textContent=array[4]
allParagraphTags[6].textContent=array[5]
allParagraphTags[7].textContent=array[6]
allParagraphTags[8].textContent=array[7]
allParagraphTags[9].textContent=array[8]






