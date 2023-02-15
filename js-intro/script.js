                // console.log("First Program");
                // console.log(window.document);
                // console.log(document.body.style.background="blue");
// //do something after some time
                //     window.setTimeout(function(){
                //         document.body.style.background= "green";
                //     }, 3000)//change color of browser after some time

// window.setInterval(function(){
//     document.body.innerHTML =`<h1>${ new Date()}</h1>`;
// })

// //take input from user
                // //window.alert("hello world");
                //     const result = window.confirm("Are you sure?");
                //     console.log(result);

                // const res = window.prompt("who are you?");
                // console.log(result);



// const  title =  document.getElementById("Title");
// title.style.fontSize = "100px";

// const  Title=  document.getElementsByClassName("red");
// Title[0].style.fontSize = "20px";

// const firstList = document.querySelector(".red");
// firstList.style.color = "purple";

// var firstList = document.querySelectorAll (".red")
// firstList.forEach(function (item) {
//     item.style.color = "red";
    
// });

//EVENTS

        // document.addEventListener("click",function(){
        //     console.log("you pressed clicked")
        // }
        // )

const button = document.querySelector('button');

document.addEventListener("keyup", function(event){
    console.log (event);
    document.body.style.background = "purple";
})