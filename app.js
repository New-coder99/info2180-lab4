window.onload = function Search(){
    let SearchButton = document.getElementById("SearchButton");
    SearchButton.querySelector(".btn");
    let Request;
    let form = document.forms[0];
    
    


    SearchButton.addEventListener('click', function(){
        
        let text = form.elements['name'];
        let value = text.value;
        
        Request = new XMLHttpRequest(); 
        Request.onreadystatechange = loadData;
        Request.open('GET', 'superheroes.php?query='+value,true);
        Request.send();

      
    });

    function loadData() {
        if (Request.readyState === XMLHttpRequest.DONE) {
            let result = document.getElementById("result");
          if (Request.status === 200) {
            var response = Request.responseText;
            
            result.innerHTML='';
            result.innerHTML += response;
          } else {
            alert('Check the request.');
          }
        }
      }


     
    }

/*document.addEventListener('DOMContentLoaded', function () {
    var message=document.getElementById('result');

    document.getElementById('Search').addEventListener('click', function () {
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                var text =document.getElementById("text").value;
                if(text===""){
                    
                    var SResult =document.createElement('h3');
                    SResult=data;
                    message.innerHTML=(SResult);
                   // alert(data)
                    
                }
                else{
                    var text= new URLSearchParams()

                    fetch('superheroes.php',{
                        method :"post",
                        body: data
                    })
                    .then(response=> response.text())
                    .then(function(text){
                        console.log(text)
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                }
            })
    })
    });
    /*fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                var text =document.getElementById("text").value;
                if(text===""){
                    var SResult =document.createElement('h3');
                    SResult=data;
                    message.innerHTML=(SResult);
                    alert(data)
                    
                }
                else(text==="A")
                {
                    
                    console.log("Else")
                   var jsonString = '<?php echo $jsonString; ?>';
                    var jsArray = JSON.parse(jsonString);
                    console.log(jsArray);
                    alert('Hello'+jsArray);var searchinput=document.getElementById("text").value;
                    searchinput=encodeURIComponent(searchinput);
                    fetch('superheroes.php?query=' + searchinput)
                        .then(response=> response.text())   
                        .then(data => {
                        // Display the result in the "result" div
                        var resultDiv = document.getElementById('result');
    
                        // Clear previous results
                        resultDiv.innerHTML = '';
    
                        if (data.trim() !== '') {
                            
                            var resultParagraph = document.createElement('p');
                            resultParagraph.textContent = data;
    
                            // Append the result to the result div
                            resultDiv.appendChild(resultParagraph);
                        }  })

                    console.log("Not Empty",searchinput)
                }
                
            })
            .catch(error => console.error('Error:', error));
           
        }) */