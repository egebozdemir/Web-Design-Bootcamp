// görev 1
function gorev1(){
    var article = document.getElementsByTagName("article")
    var list = document.getElementById("gorev1").lastElementChild
    for (let index = 0; index < 3; index++) {
        const header = article[0].getElementsByTagName("h2")[index].innerHTML
        var li = document.createElement("li")
        li.innerHTML = header
        list.appendChild(li)
        
    }
}

// görev 2
function gorev2(){
    var headerNumber = document.getElementsByTagName("article")[0].getElementsByTagName("h2").length
    document.getElementById("gorev2").lastElementChild.setAttribute("value",headerNumber)
}

// görev 3
function gorev3(){
    var title = document.getElementsByTagName("h1")[0].innerHTML
    document.getElementById("gorev3").lastElementChild.setAttribute("value",title)
}

// görev 4
function gorev4(){
    //var liste = document.getElementById("gorev4").lastElementChild
    var paragraphs = document.getElementsByTagName("article")[0].getElementsByTagName("p")
    for (let index = 0; index < paragraphs.length; index++) {
        const charCount = paragraphs[index].innerHTML.length
        document.getElementsByTagName("article")[0].getElementsByTagName("h2")[index].innerHTML +=  " (" + charCount + " karakter)"
        // var li = document.createElement("li")
        // li.innerHTML = charCount
        // liste.appendChild(li)    
    }
}
// görev 5
function gorev5(){
    var article = document.getElementsByTagName("article")
    document.getElementsByTagName("h1")[0].style.color = "red"
    var headers = article[0].getElementsByTagName("h2")
    //console.log(headers.length);
    //console.log(headers);
    for (let index = 0; index < headers.length ; index++) {
        if (index % 2 != 0){
            headers[index].style.color ="orange"
        }
        else{
            headers[index].style.color = "blue"              
        }  
    }
}

// görev 6
function gorev6(){
    var makale = document.getElementsByTagName("article")[0]
    var silinecek = makale.getElementsByTagName("div")[0]
    $(silinecek).fadeOut()
}

// görev 7
function gorev7(){
    var list = document.getElementById("gorev7").lastElementChild
    var article = document.getElementsByTagName("article")
    var headers = article[0].getElementsByTagName("h2")
    for (let index = 0; index < headers.length; index++) {
        if(headers[index].innerHTML.includes("can")){
            var li =document.createElement("li")
            li.innerHTML = headers[index].innerHTML
            list.appendChild(li)
        }
    }
}

// görev 8
function gorev8(){
    var li = document.createElement("div")
    var baslik = document.createElement("h2")
    baslik.innerHTML = "Lorem"
    var p =document.createElement("p")
    p.setAttribute("id","paragraf")
    li.appendChild(baslik)
    li.appendChild(p)
    var article = document.getElementsByTagName("article")
    var node = article[0]
    node.insertBefore(li,node.childNodes[2])
    $.ajax({
        headers: { 'Accept': 'application/json',
        'Access-Control-Allow-Origin':"*"},
        Cache: false,
        async: true,
        url: "lorem.html",
        type: "GET",
        crossDomain: true,
        cors: true,
        contentType: 'application/json',
        secure: true,
        dataType: "jsonp",
        beforeSend: function(xhr){
            //xhr.withCredentials = true;
            xhr.setRequestHeader ("Authorization", "Basic" + btoa(""));
        },
        success: function(sonuc) {
            $("#paragraf").append(sonuc)
        }
    });
    //$("#paragraf").load("lorem.html");
}

// görev 9
$("h1,h2").on("mouseover",function(e){
    //console.log(e.target.innerText)
    var tabela = $("#gorev9 :input").attr("value", e.target.innerText) 
})

// görev 10
function gorev10(){
    var image = document.createElement("img")
    image.src = "check.png"
    image.style.width = "100px"
    image.style.height = "100px"
    image.style.position = "sticky"
    image.style.position = "-webkit-sticky"
    image.style.left = "1000000px"
    image.style.bottom = "10px"
    $("body").append(image)
}




