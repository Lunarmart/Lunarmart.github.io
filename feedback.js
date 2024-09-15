      //set item template
      let feedbackTemplate = (prod, index) => {

        var star1 = 'img/star.png';
        var star2 = 'img/star2.png';
        var star3 = 'img/star3.png';
        var star4 = 'img/star4.png';
        var star5 = 'img/star5.png';
        let score = prod.score;
        
        var totalscore;
        switch(score) {
          case score = 5:
            totalscore = star5;
          break;
          case score = 4:
            totalscore = star4;
          break;
          case score = 3:
            totalscore = star3;
          break;
          case score = 2:
            totalscore = star2;
          break;
          default:
            totalscore = star1;
        }

        let replyText = prod.reply && prod.reply !== 'none' ? `<h4>${prod.reply} <span>- - reply from the seller</span> </h4>` : '';
        
        
        let item = `


            <div class="review">
                <div class="top-part">
                  <div class="stars">
                      <img src="${totalscore}" alt="">
                  </div>

                  <div class="text">
                      <h1>Verified Purchase</h1>
                  </div>
              </div>

              <p>${prod.message}</p>
             
              ${replyText}
              </div>
      
   
        ` 
        for (var counter = 1; counter <= 20; counter++) 
        {
          return item;
        }
     
    }



    let getFeedback = () => {
      fetch('getFeedback.html')
      .then(response => response.json())
      .then(response => {
        let feedback = response.data.feedback;

        feedback.map(prod => {
          if (!prod.appeal_outcome || prod.appeal_outcome !== 'APPROVED') {
            console.log(prod)
            $(".reviews").append(feedbackTemplate(prod))  
          }
        })

        sellixLoad1();
      });
    }

    $(window).on('load', function () {
        getFeedback();
    });


    //Sellix shits
    let sellixLoad1 = function(){var e=document.createElement("div");e.setAttribute("id","sellix-container"),document.getElementsByTagName("body")[0].appendChild(e),setTimeout(function e(t){if(document.querySelector("[data-sellix-product]")&&!t){SellixButtons=document.querySelectorAll("[data-sellix-product]");for(var n=0;n<SellixButtons.length;n++)SellixButtons[n].addEventListener("click",function(e){console.log("Sellix Product ID: ",e.target.getAttribute("data-sellix-product"));for(var t,n=e.target.getAttribute("data-sellix-product"),l="?",i=0,o=e.target.attributes,a=o.length;i<a;i++)(t=o[i]).nodeName.indexOf("data-sellix-custom")>-1&&(l+=t.nodeName.replace("data-sellix-custom-","")+"="+t.nodeValue+"&");var r,d="https://embed.sellix.io/product/"+n+l,s='<div class="sellix-fallback-button-container"><a class="sellix-fallback-button" href="'+d+'" target="_blank" >Go to product</a></div>';(r=document.createElement("div")).setAttribute("id","sellix-modal-"+n),r.setAttribute("style","display:none; position:fixed; top: 0; left:0; width: 100%; height:100%; z-index:-1050"),r.innerHTML='<div id="backdrop" class="sellix-backdrop"></div><style>.sellix-iframe {\n    width:100%;\n    height:100%;\n    border:none;\n}\n\n.sellix-iframe-content {\n    height: 100%;\n}\n\n.sellix-iframe-wrapper {\n    top:20px;\n    margin:auto;\n    width: 100%;\n    height:100%;\n    z-index: 1;\n}\n\n.sellix-iframe-loader-container {\n    z-index: 1;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.sellix-backdrop {\n    background: #00000075;\n    backdrop-filter: blur(3px);\n    width:100%;\n    height:100%;\n    position:absolute;\n}\n\n.sellix-fallback-button {\n    font-family: "Open Sans";\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    text-decoration: none;\n}\n\n.sellix-fallback-button-container {\n    position: absolute;\n    z-index: 2;\n    display: none;\n    top: 50%;\n    height: 50px;\n    line-height: 40px;\n    max-height: 50px;\n    box-sizing: border-box;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #613bea;\n    padding: .375rem .75rem;\n    border-radius: 3px;\n}</style><div class="sellix-iframe-loader-container"><img src="https://cdn.sellix.io/static/logo/single.svg" alt="Loader" class="sellix-iframe-loader" style="width: 35px;" /></div>'+s+'<div class="sellix-iframe-wrapper"><div class="sellix-iframe-content"><iframe scrolling="auto" src="'+d+'" class="sellix-iframe" id="sellix-iframe" onerror="(e) => console.log(e)"></div></div>',document.getElementById("sellix-container").appendChild(r),(r=document.getElementById("sellix-modal-"+n)).style.display="flex",r.style.zIndex="99999",document.querySelector("#sellix-iframe").addEventListener("load",function(e){document.querySelector(".sellix-iframe-loader").style.display="none"}),document.querySelector("#sellix-iframe").addEventListener("error",function(e){document.querySelector(".sellix-iframe-loader").style.display="none",document.querySelector(".sellix-fallback-button-container").style.display="flex"}),window.addEventListener("message",function(e){"close-embed"==e.data&&(r.style.display="none",r.style.zIndex="-1050",r.parentNode.removeChild(r)),console.log(e)},!1)});t=!0}document.querySelector("[data-sellix-product]")||(t=!1),setTimeout(e,100,t)},100,!1)};




    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
   