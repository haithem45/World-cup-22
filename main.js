var image = document.createElement("IMG");
image.setAttribute('class', 'photo');
image.src="logo.webp";
$("#globLeft").html(image);
var data = [
{   nationalTeam:"Tunisia",
    continent:"Africa",
    imgSrc:"./images/Tunisia.jpg",
    presentation:""
},{   nationalTeam:"Germany",
    continent:"Europe",
    imgSrc:"./images/Germany.jpg",
    presentation:""
},{   nationalTeam:"France",
    continent:"Europe",
    imgSrc:"./images/France.jpg",
    presentation:""
},{   nationalTeam:"Senegal",
    continent:"Africa",
    imgSrc:"./images/Senegal.jpeg",
    presentation:""
},{   nationalTeam:"Cameroon",
    continent:"Africa",
    imgSrc:"./images/Cameroon.jpg",
    presentation:""
},{   nationalTeam:"Saudi arabia",
    continent:"Asia",
    imgSrc:"./images/Saudi arabia.jpg",
    presentation:""
},{   nationalTeam:"Marocco",
    continent:"Africa",
    imgSrc:"./images/Marocco.jpg",
    presentation:""
},{   nationalTeam:"Argentina",
    continent:"South america",
    imgSrc:"./images/Argentina.jpg",
    presentation:""
},{   nationalTeam:"Japan",
    continent:"Asia",
    imgSrc:"./images/Japan.jpg",
    presentation:""
},{   nationalTeam:"Brazil",
    continent:"South america",
    imgSrc:"./images/Brazil.jpg",
    presentation:""
},{   nationalTeam:"Poland",
    continent:"Europe",
    imgSrc:"./images/Poland.jpg",
    presentation:""
},{   nationalTeam:"Mexico",
    continent:"North america",
    imgSrc:"./images/Mexico.jpg",
    presentation:""
},{   nationalTeam:"Usa",
    continent:"North america",
    imgSrc:"./images/Usa.jpg",
    presentation:""
},{   nationalTeam:"Uruguay",
    continent:"South america",
    imgSrc:"./images/Uruguay.jpg",
    presentation:""
},{   nationalTeam:"Spain",
    continent:"Europe",
    imgSrc:"./images/Spain.jpg",
    presentation:""
},{   nationalTeam:"Qatar",
    continent:"Asia",
    imgSrc:"./images/Qatar.jpg",
    presentation:""
},{   nationalTeam:"Ecuador",
    continent:"South america",
    imgSrc:"./images/Ecuador.jpeg",
    presentation:""
},{   nationalTeam:"Netherlands",
    continent:"Europe",
    imgSrc:"./images/Netherlands.jpg",
    presentation:""
},{   nationalTeam:"England",
    continent:"Europe",
    imgSrc:"./images/England.jpg",
    presentation:""
},{   nationalTeam:"Iran",
    continent:"Asia",
    imgSrc:"./images/Iran.jpg",
    presentation:""
},{   nationalTeam:"Wales",
    continent:"Europe",
    imgSrc:"./images/Wales.jpg",
    presentation:""
},{   nationalTeam:"Australia",
    continent:"Asia",
    imgSrc:"./images/Australia.jpg",
    presentation:""
},{   nationalTeam:"Denmark",
    continent:"Europe",
    imgSrc:"./images/Denmark.jpg",
    presentation:""
},{   nationalTeam:"Costa rica",
    continent:"South america",
    imgSrc:"./images/Costarica.jpeg",
    presentation:""
},{   nationalTeam:"Belgium",
    continent:"Europe",
    imgSrc:"./images/Belgium.jpg",
    presentation:""
},{   nationalTeam:"Canada",
    continent:"North america",
    imgSrc:"./images/Canada.jpg",
    presentation:""
},{   nationalTeam:"Croitia",
    continent:"Europe",
    imgSrc:"./images/Croitia.jpg",
    presentation:""
},{   nationalTeam:"Serbia",
    continent:"Europe",
    imgSrc:"./images/Serbia.jpg",
    presentation:""
},{   nationalTeam:"Switzerland",
    continent:"Europe",
    imgSrc:"./images/Switzerland.jpg",
    presentation:""
},{   nationalTeam:"Portugal",
    continent:"Europe",
    imgSrc:"./images/Portugal.jpg",
    presentation:""
},{   nationalTeam:"Ghana",
    continent:"Africa",
    imgSrc:"./images/Ghana.jpg",
    presentation:""
},{   nationalTeam:"South korea",
    continent:"Asia",
    imgSrc:"./images/South korea.jpg",
    presentation:""
}
]


var staduim =[
{name : "Education City Stadium",imageSource :"./staduim/1.jpg" },
{name :"Ras Abu Aboud Stadium ",imageSource : "./staduim/2.jpg"},
{name : "AI Thumama Stadium" ,imageSource :"./staduim/3.jpg" },
{name : "Khalifa International Stadium",imageSource :"./staduim/4.jpg" },
{name :"Ahmad Bin Ali Stadium",imageSource :"./staduim/5.jpg" },
{name :"AI Janoub Stadium",imageSource : "./staduim/6.jpg"},
{name :"AI Bayt Stadium",imageSource :"./staduim/7.jpg"},
{name :" Lusail Stadium",imageSource:"./staduim/8.jpg"}
]


var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} 
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}


// 
//  function displayElement (array){
//     each(array, function(e,i){
//         var img= $("<img>")
//          img.attr("src",e.imageSource)  
//          var div = $(" <td class="globR">Tobias</td>") 
        
//          div.appendTo($('#globRight') )
//           })


// displayElement(staduim)




var id = 0
setInterval(function(){
    if(id<7) {
   
id++
$("#carousel").attr("src" , staduim[id].imageSource)
}
else {id=0}
}, 3000)


// function displayElement(array){
//     each(array,function(e,i){
//         var image=$("<img>")
//       image.attr("src",e.imgSrc)
//       var div=$("<div class='teams'></div>")
//       div.append(image)
//       div.appendTo($('.reset'))
//     })
//     }
//     displayElement(data);

//     $('searchTerm').click(function(){
//         var inpt=$('.searchButton').val()
//         var filt=[];
//         if(inpt==='North america'){
//             filt=  filter(data,function(e,i){
//             return e.continent==='North america'
//         })
//         } else if(inpt==='Africa'){
//             filt=filter(data,function(e,i){
//                 return e.nationalTeam==='Africa'
//             })
//         } else if(inpt==='>Europe'){
//             filt=filter(data,function(e,i){
//                 return e.nationalTeam==='Europe'
//             })
//         } else if(inpt==='South america'){
//             filt=filter(data,function(e,i){
//                 return e.nationalTeam==='South america'
//             })
//         } else if(inpt==='Asia'){
//             filt=filter(data,function(e,i){
//                 return e.nationalTeam==='Asia'
//             })
//         } 
      
        
//         displayElement(filt)
//     })





 var displayData = function (array){
    each(array,function(e,i){
   var img = $(`<img class="hello" id ="hi" src=${e.imgSrc}>`)
 
$("#rigthSide").append(img)
 
})
}

var target = data
displayData(target)


function filterArray(array){

target = filter (array,function(e){
    return e.continent === $("#searchTerm").val()
})
console.log(target)
}

$("#searchButton").click(function(){
    filterArray(data)
    $("#rigthSide").empty()
    displayData(target)
})

