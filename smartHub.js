const likeBtn = document.querySelectorAll('.like-btn');
const click = document.querySelectorAll('#click')
likeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});
click.forEach((each)=>{
  each.addEventListener(("click"),()=>{
    click.forEach((each)=>{
    each.classList.remove("purple")
    })
      each.classList.toggle("purple")
  })
})

const postButton = document.getElementById("")


// likeSection.addEventListener(("click"), (e)=>{
//         likeIcon.style.display = "block"
//         secondLike.style.display = "none"
// })
// postContainer.forEach((like)=>{
//     like.addEventListener(("click",(e)=>{
//         postContainer.forEach((like)=>{
//             alert("sakjs")
//         })
//     }))
// })
// likeSection.addEventListener(("click"), (e)=>{
//    likeSection.classList.toggle(".likeIcons")
// // alert("sajsak")
// })
// likeSection.forEach((eachPost)=> {
//     eachPost.addEventListener("click", (e)=>{
//            if(e.target.tagName === "DIV"){
//             alert("ob")
//             likeIcon.style.color = "red"
//         }
        
//     })
// });



// const toolsList = document.getElementById('toolsList');
// const dashboard = document.getElementById("dashboard")
// const sidebarlink = document.querySelectorAll('.sidebar-link');

// sidebarlink.forEach((each)=>{
//     each.addEventListener("click", (e)=>{
//         sidebarlink.forEach((each)=>{
//             each.classList.remove("active")
//         })
//         each.classList.add("active")
//     })
// })
// toolsList.addEventListener("click", (e) => {
    
//   if(dashboard.style.background === "none"){
//   dashboard.style.background = "#5B5FEF";
//   }else{
//     dashboard.style.background = "none"
//   }
//   if(e.target.tagName === "DIV"){
//   toolsList.classList.add("design")
  
//   }
  
  
// })



// sidebarlink.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     sidebarlink.forEach((link) => {
//       link.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });
