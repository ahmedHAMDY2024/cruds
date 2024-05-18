let   title               =   document.getElementById     ("title");
let   price               =   document.getElementById     ("price");
let   taxes               =   document.getElementById     ("taxes");
let   ads                 =   document.getElementById     ("ads");
let   discount            =   document.getElementById     ("discount");
let   small               =   document.getElementById     ("small");
let   count               =   document.getElementById     ("count");
let   catigory            =   document.getElementById     ("catigory");
let   create              =   document.getElementById     ("create");
let   search_inpt         =   document.getElementById     ("search-inpt");
let   search_py_title     =   document.getElementById     ("search-py-title");
let   search_py_categore  =   document.getElementById     ("search-py-categore");
let   btnDeletAll         =   document.createElement      ("button")
let   deletAll            =   document.getElementById     ("deletAll");
let   table               =   document.getElementById     ("table");
let   mood                =   "create"
let   x ;
let   moodSearch          =   "title"
let   t_reed              =   document.getElementById     ("t_reed ")  




let t_title         =document   .getElementById("t_TITLE")
let t_price         =document   .getElementById("t_PRICE")
let t_taxes         =document   .getElementById("t_TAXAS")
let t_ads           =document   .getElementById("t_ADS")
let t_discount      =document   .getElementById("t_DISCOUNT")
let t_catigory      =document   .getElementById("t_CATEGORY")
let t_small         =document   .getElementById("t_TOTAL")
let t_ID            =document   .getElementById("t_ID")
let head            =document   .getElementById("head")
let t_show          =document   .getElementById("t_show")
let div_show        =document   .getElementById("show")



//جمع قيمة المنتج

let totle=function(){
    if(price.value !=""){
        let result= (+price.value   +   +taxes.value  +   +ads.value )
         -   +discount.value;
        small.innerHTML= result
        small.style.backgroundColor="#0f0"
        readData();

    }else{
        small.innerHTML="total"
        small.style.backgroundColor="#f00"
        readData();

    }

};




//تخزين المنتج فى lockalstorge

let dataPro;
if(localStorage.newPro!=null){
    dataPro=JSON.parse(localStorage.newPro)
}
else{
    dataPro=[]

}




//creat element

create.onclick=function(){
let newPro={
    title               :title.value      ,     
    price               :price.value      ,  
    taxes               :taxes.value      ,  
    ads                 :ads.value        ,  
    discount            :discount.value   ,  
    small               :small.innerHTML  ,     
    count               :count.value      ,  
    catigory            :catigory.value   ,  
 
}
if(title.value!="" && catigory.value!=""&& count.value<100){
if(mood==="create"){
    if(newPro.count>1){
        for(let i =0;i<newPro.count;i++){
            dataPro.unshift(newPro);
    
        }
    }else{
        dataPro.unshift(newPro);
     
    }


}
else{
    dataPro[x]=newPro
    create.innerHTML="create"
    create.style.background="#2a003d"
    count.style.display="block"

}
clearData();

}
 localStorage.setItem("newPro", JSON.stringify(dataPro))
 console.log(dataPro);

 readData();
}


//
//


//clear data aftar creat

function clearData(){
    title.value      =  ""    
    price.value      =  ""    
    taxes.value      =  ""    
    ads.value        =  ""    
    discount.value   =  ""    
    small.innerHTML  =  ""    
    count.value      =  ""    
    catigory.value   =  ""    
}


//read data
function readData(){
    let    tbody= "";
    for(       let i=0    ;    i <dataPro.length     ;  i++   ){
        tbody += `
         <tr>
         <td>         ${       [i+1]       }    </td>
         <td>         ${dataPro[i].title   }    </td>
         <td>         ${dataPro[i].price   }    </td>
         <td>         ${dataPro[i].taxes   }    </td>
         <td>         ${dataPro[i].ads     }    </td>
         <td>         ${dataPro[i].discount}    </td>
         <td>         ${dataPro[i].small   }    </td>
         <td>         ${dataPro[i].catigory}    </td>
         <td>        <button onclick="delet(${i})">delet</button>      </td>
         <td>        <button onclick="update(${i})">update</button>    </td>
         <td>        <button onclick="show(${i})">show</button>        </td>
         </tr>
        `
    }

        table.innerHTML=tbody


    if(dataPro.length>0)
        {
            deletAll.innerHTML=`<button onclick="deleteAll()" id="delete_all">delet All(${dataPro.length})</button>`
    
    
    
        }
        else
        {
            deletAll.innerHTML=""
            
        }
            
}

readData()

//search

function searchMood(id){
    if(id=="search-py-title"){
        
        moodSearch = "title"
        search_inpt.placeholder="search py title"

    }else{
        moodSearch = "catigory"
        search_inpt.placeholder="search py category"
    }


    search_inpt.focus()

}

function searchData(value){
    let    tbody= "";

    if( moodSearch == "title")
        {


            for(let i=0;i<dataPro.length;i++){
                if(dataPro[i].title.includes(value)){
                    tbody += `
                    <tr>
                    <td>         ${       [i]         }    </td>
                    <td>         ${dataPro[i].title   }    </td>
                    <td>         ${dataPro[i].price   }    </td>
                    <td>         ${dataPro[i].taxes   }    </td>
                    <td>         ${dataPro[i].ads     }    </td>
                    <td>         ${dataPro[i].discount}    </td>
                    <td>         ${dataPro[i].small   }    </td>
                    <td>         ${dataPro[i].catigory}    </td>
                    <td>        <button onclick="delet(${i})">delet</button>     </td>
                    <td>        <button onclick="update(${i})">update</button>    </td>
                    </tr>
                   `
                    console.log(i);
            
                }




            }





        }
        else{
            for(let i=0;i<dataPro.length;i++){
                if(dataPro[i].catigory.includes(value)){
                    tbody += `
                    <tr>
                    <td>         ${       [i]         }    </td>
                    <td>         ${dataPro[i].title   }    </td>
                    <td>         ${dataPro[i].price   }    </td>
                    <td>         ${dataPro[i].taxes   }    </td>
                    <td>         ${dataPro[i].ads     }    </td>
                    <td>         ${dataPro[i].discount}    </td>
                    <td>         ${dataPro[i].small   }    </td>
                    <td>         ${dataPro[i].catigory}    </td>
                    <td>        <button onclick="delet(${i})">delet</button>     </td>
                    <td>        <button onclick="update(${i})">update</button>    </td>
                    </tr>
                   `
                    // console.log(i);
            
                }




            }



        }

        table.innerHTML=tbody

}


//delet
function delet(i)
{
    dataPro.splice(i,1);
    localStorage.newPro=JSON.stringify(dataPro);
    readData()

}


//update
function update(i){
    title.value      =  dataPro[i].title    
    price.value      =  dataPro[i].price
    taxes.value      =  dataPro[i].taxes 
    ads.value        =  dataPro[i].ads
    discount.value   =  dataPro[i].discount
    catigory.value   =  dataPro[i].catigory
    small.innerHTML  =  dataPro[i].small

    create.innerHTML="update"
    create.style.background="#05e282"
    count.style.display="none"
    mood="update"
    x=i
    readData()
    scroll({top:0,behavior:"smooth"})
}





//delete All

function deleteAll()
{
            localStorage.clear()
            dataPro.splice(0)
            readData()
            
        
}





//show

    console.log(t_title);
    function show(i){
        t_ID      .innerHTML      =  i+1
        t_title   .innerHTML      =  dataPro[i].title;    
        t_price   .innerHTML      =  dataPro[i].price;
        t_taxes   .innerHTML      =  dataPro[i].taxes ;
        t_ads     .innerHTML      =  dataPro[i].ads;
        t_discount.innerHTML      =  dataPro[i].discount;
        t_catigory.innerHTML      =  dataPro[i].catigory;
        t_small   .innerHTML      =  dataPro[i].small;
        div_show.classList.remove("displaynone");
        // t_reed .classList.remove("displaynone");
        scroll({top:195,behavior:"smooth"})
        console.log(dataPro[i].title);
    }


    function btnHead(){
        div_show.classList.add("displaynone");
        t_reed .classList.add("displaynone");
    }