
var ele=[];

function getValue() {

     var conversation = document.getElementById("check1")
     if(conversation.checked){
           ele.push(conversation.value);
    }
    var business = document.getElementById("check2")
     if(business.checked){
           ele.push(" " + business.value);
    }
    var intensive = document.getElementById("check3")
    if(intensive.checked){
          ele.push(" " + intensive.value);
   }
   var lehrbuch = document.getElementById("check4")
   if(lehrbuch.checked){
         ele.push(" " + lehrbuch.value);
  }
  var grammar = document.getElementById("check5")
  if(grammar.checked){
        ele.push(" " + grammar.value);
 }
 var test = document.getElementById("check6")
 if(test.checked){
       ele.push(" " + test.value);
}
var kultur = document.getElementById("check7")
if(kultur.checked){
      ele.push(" " + kultur.value);
}
var einzelunterricht = document.getElementById("check8")
if(einzelunterricht.checked){
      ele.push(" " + einzelunterricht.value);
}
var arbitur = document.getElementById("check9")
if(arbitur.checked){
      ele.push(" " + arbitur.value);
}
var other = document.getElementById("check10")
if(other.checked){
      ele.push(" " + other.value);
}
localStorage.setItem("eleKey", JSON.stringify(ele));

      if(ele.length>0){
        document.getElementById("p0").innerHTML = "Recommended courses: "
       document.getElementById("p1").innerHTML = ele;

       document.getElementById("submit2").addEventListener("click", giveRecommendations);
       function giveRecommendations(){

       if (ele.includes('conversation')){
        document.getElementById("p4").innerHTML = "course 1";
       }
       
}
      }
      else{
      document.getElementById("p1").innerHTML = "Please select 1 or more options";
      }
}



    function getSecondValue() {
        var ele2=[]
         var csh = document.getElementById("secondcheck1")
         if(csh.checked){
               ele2.push(csh.value);
        }
        var socialMedia = document.getElementById("secondcheck2")
         if(socialMedia.checked){
               ele2.push(" " + socialMedia.value);
        }
        var google = document.getElementById("secondcheck3")
        if(google.checked){
              ele2.push(" " + google.value);
       }
       var cshEvent = document.getElementById("secondcheck4")
       if(cshEvent.checked){
             ele2.push(" " + cshEvent.value);
      }
      var poster = document.getElementById("secondcheck5")
      if(poster.checked){
            ele2.push(" " + poster.value);
     }
     var printAd = document.getElementById("secondcheck6")
     if(printAd.checked){
           ele2.push(" " + printAd.value);
    }
    var newsletter = document.getElementById("secondcheck7")
    if(newsletter.checked){
          ele2.push(" " + newsletter.value);
    }
    var einzelunterricht2 = document.getElementById("secondcheck8")
    if(einzelunterricht2.checked){
          ele2.push(" " + einzelunterricht2.value);
    }
    var freund = document.getElementById("secondcheck9")
    if(freund.checked){
          ele2.push(" " + freund.value);
    }
    var other2 = document.getElementById("secondcheck10")
    if(other2.checked){
          ele2.push(" " + other2.value);
    }
    
       
          if(ele2.length===0){
          document.getElementById("p3").innerHTML = "Please select 1 or more options";
          }

}

let testClick =document.querySelector("#test-btn");
testClick.addEventListener("click", reloadInfo);

function reloadInfo(event){
event.preventDefault();
var eleReload = JSON.parse(localStorage.getItem('eleKey'));
console.log(eleReload);
document.getElementById("test-reload").innerHTML = (eleReload);
}
        

