console.log(`Hey Geek,

If you're interested in working with us, please reach out to me at techilyfly@gmail.com

Cheers,
TechilyFly Team ❤️`);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(".thank-you").hide();
submitBtn.addEventListener("click", function(){
  let email = nme.value;
  if(!validateEmail(email)) return;
  var link='https://forms.gle/XsJxgSHUZPCd3dnEA';
  jQuery.ajax({
        url: link,
        data: {"entry.749522810" : email},
        type: "POST",
        dataType: "xml",
        crossDomain:true,
        statusCode: {
            0: function (){
                //console.log("response 0");
            },
            200: function (){
                  //console.log("response 200");
            }
        }
    });
  $(".email-form").hide();
  $(".thank-you").show('slow');
});

