
function indexchap1(response){
    let section = document.getElementById("indexIntro1");
    let count = 0
    
    let Paragraphs = response.split("~");
    for(const para of Paragraphs){
        if( count == 0){
        
        let temp = para.substring("0","5")
        
        section.insertAdjacentHTML("beforeend", "<h3 id='getid'><br></h3>")
        let temp2 = document.getElementById("getid");
        temp2.id = temp;
        console.log(temp2.id)
        temp2.textContent = para
        count += 1
        }
        else{
        count += 1
        let temp = para.substring("10","15");
        
        section.insertAdjacentHTML("beforeend", "<pre id='getid'></pre>")
        let temp2 = document.getElementById("getid");
        temp2.id = temp;
        console.log(temp2.id)
        temp2.textContent = para
        console.log(Paragraphs.length)
        
        }   
    }
}
function onResponse(response){
    response.text().then(indexchap1);
}
function onError(){}
function afetch(){

    fetch('chap1intro.txt')
    .then(onResponse,onError);
    
}
afetch()