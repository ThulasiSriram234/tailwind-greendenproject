const container = document.getElementById("container")
const search = document.getElementById("search")
const productlist = container.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    const element=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent


        if(productname.toUpperCase().indexOf(element)<0)
        {
            productlist[count].style.display="none"
        }
    

        else{
            productlist[count].style.display="block"

        }
    }





})



