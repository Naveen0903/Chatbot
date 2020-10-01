var data={
    id:"",
    res: {},
    messages:[]
};

function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            data.messages.push({m:JSON.parse(xmlHttp.responseText)["a"]});
            let parent = document.querySelector(".container");
            var renderElem = ""; 
            data.messages.map((qa, idx)=>{
                let {
                    m
                } = qa;
                if(m){
                    renderElem +=('<div class="'+(((idx%2)==0)?"align":"")+'"><i class="fa fa-user'+(((idx%2)==0)?"":" fa-color")+'" aria-hidden="true"></i><p id="message">'+ m +'</p></div><br />\n');
                }
            });
            parent.innerHTML = renderElem;
            parent.scrollTop = parent.scrollHeight;
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send();
}

var getMessage = document.querySelector('input[name="submit"]');
getMessage.addEventListener('click', (event)=>{
    event.preventDefault();
    let message = document.querySelector('input[name="query"]').value;
    data.messages.push({m: message});
    if(message){
        httpGetAsync("api/chat?q="+message);              
    }
});

var clearMessage = document.querySelector('input[name="endchat"]');
clearMessage.addEventListener('click', (event)=>{
    event.preventDefault();
    data.messages = [];
    document.querySelector(".container").innerHTML=""
})