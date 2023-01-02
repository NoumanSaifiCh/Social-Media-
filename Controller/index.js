function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function btnActive() {
  document.getElementById("Activity_div").style.display = "block";
  document.getElementById("PostDiv").style.display = "none";
  document.getElementById("Tag_div").style.display = "none";
  document.getElementById("Tag_div").style.display = "none";
  closeNav();
}
function btnTag() {
  document.getElementById("Tag_div").style.display = "block";
  document.getElementById("PostDiv").style.display = "none";
  document.getElementById("Activity_div").style.display = "none";
  closeNav();
}
///these function for side draw open and close in mobile screen
function postFeed() {
  document.getElementById("Tag_div").style.display = "none";
  document.getElementById("PostDiv").style.display = "block";
  document.getElementById("Activity_div").style.display = "none";
  closeNav();
}

///Comment Box function//

let commentArr = [];
function btnComment() {
  let commentValue = document.getElementById("commentInput").value;
  commentArr.push(commentValue);
  commentValue = "";
  document.getElementById("commentInput").value = "";

  const data = commentArr[commentArr.length - 1];
  const commentDisplay = `  <div style="display: flex"><div>
       <img src="/Asset/pic.jpg" style="border-radius:50%; margin-left: 28px;" width= 45px heigh= 45px>
   </div>
   <div  value="" style=" background-color: lightgray;border-radius: 10px; border-color: rgb(74, 72, 72); width: 350px; height: 38px; color: rgb(57, 55, 55); margin-left: 17px;">  
   <pre>${data}</pre>   
   </div></div>
     `;
  document.getElementById("commMainDiv").innerHTML += commentDisplay;
}

let page = 0;
async function getPost(page = 0, tag) {
  try {
    let postUrl = `https://dummyapi.io/data/v1/post?page=${page}&limit=10`;
    if (tag)
      postUrl = `https://dummyapi.io/data/v1/tag/${tag}/post?page=${page}&limit=10`;

    const posts = await fetch(postUrl, {
      method: "GET",
      headers: {
        "app-id": "6377395759a794603dfaf63d",
      },
    });

    // comment fetch //
    const getComment = await fetch(
      `https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "6377395759a794603dfaf63d",
        },
      }
    );
    let commentData = await getComment.json();
    console.log("comment", commentData);
    let comments = commentData.data;

    // comment end //
    let data = await posts.json();
    let datapost = data.data;

    datapost.forEach((element) => {
      let postElement = `<div class="cardbox shadow-lg bg-white">
			 
                    <div class="cardbox-heading">
                    
                     <div class="dropdown float-right">
                      <button class="btn btn-flat btn-flat-icon" type="button"  aria-expanded="false">
                       <i class="fa fa-ellipsis-h"></i>
                      </button>
                     </div>
                     <div class="media m-0">
                      <div class="d-flex mr-3 ml-1 mt-1">
                       <a href="#"><img class="img-fluid rounded-circle" src="${
                         element.owner.picture
                       }" alt="User"></a>
                      </div>
                      <div class="media-body">
                       <p class="m-0">${
                         element.owner.firstName + " " + element.owner.lastName
                       }</p>
                       <small><span><i class="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
                       <small><span><i class="icon ion-md-time"></i> 10 hours ago</span></small>
                      </div>
                     </div>
                    <div class="cardbox-item" id="ImgDiv">
                    <img class="img-fluid p-2"  src="${
                      element.image
                    }" alt="Image"> 
                    </div>
                    <div class="p-2"><p>${element.text}</p></div>
                    <div class="p-2"><b>Tag:</b> ${element.tags?.map(
                      (item) => `<button class="m-1 tagStyle">${item}</button>`
                    )}
                    </div>
                    <div class="cardbox-base">
                     <ul class="float-right">
                      <li><a><i class="fa fa-comments"></i></a></li>
                      <li><a><em class="mr-5">12</em></a></li>
                      <li><a><i class="fa fa-share-alt"></i></a></li>
                      <li><a><em class="mr-3">03</em></a></li>
                     </ul>
                     <ul>
                      <li><a><i class="fa fa-thumbs-up"></i></a></li>
                      <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" class="img-fluid rounded-circle" alt="User"></a></li>
                      <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
                      <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
                      <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
                      <li><a><span>${element.likes} Likes</span></a></li>
                     </ul>			   
                    </div>
                
                    <p class="pl-5 mb-0" style="font-size: 12px; text-decoration: none; color: #000000">${
                      comments[0]?.owner?.firstName
                    } ${comments[0]?.owner?.lastName}</p>
                    <div class="cardbox-comments">
                     <span class="comment-avatar float-left">
                      <a href="#"><img class="rounded-circle" src="${
                        comments[0]?.owner?.picture
                      }" alt="...">                       
                     </span> 
                     <div class="search">
                      <input placeholder="Write a comment" type="text" class="commentInputBorder" id="commentInput" value="${
                        comments[0]?.message
                      }">
                      <button  type="submit" onclick="btnComment()"><i class="fa fa-send"></i></button>
                     </div>
                     </a> 
                    </div>
                    <p class="pl-5 mb-0" style="font-size: 12px; text-decoration: none; color: #000000">${
                      comments[1]?.owner?.firstName
                    } ${comments[1]?.owner?.lastName}</p>
                    <div class="cardbox-comments">
                     <span class="comment-avatar float-left">
                      <a href="#"><img class="rounded-circle" src="${
                        comments[1]?.owner?.picture
                      }" alt="...">                       
                     </span> 
                     <div class="search">
                      <input placeholder="Write a comment" type="text" class="commentInputBorder" id="commentInput" value="${
                        comments[1]?.message
                      }">
                      <button  type="submit" onclick="btnComment()"><i class="fa fa-send"></i></button>
                     </div>
                     </a> 
                    </div>
                    
                    <div id="commMainDiv" class="container-fluid"  >
                    <div id="newComment" value="" style="display: none; background-color: lightgray;border-radius: 10px; border-color: rgb(74, 72, 72); width: 350px; height: 38px; color: rgb(57, 55, 55); margin-left: 17px;">     
                    </div> 
                </div>	  
                     
                
                   </div>`;

      ////// comment pic commented
      // <div>
      //         <img src="/Asset/pic.jpg" style="border-radius:50%; margin-left: 28px;" width= 45px heigh= 45px>
      //      </div>

      document.getElementById("postDiv").innerHTML += postElement;
    });
  } catch (error) {
    console.log("Posts Error:", error.message);
  }
}
getPost();

function loadMore() {   ///when the scroll down hit this function call and get more post
  page = page + 1;
  getPost(page);
  console.log("i am load more", page);
}

function getPostByTag(tag) {  //// i have implement tag post function but not geeting data in console empty object show 
  console.log("tag:", tag);
  page = 0;
  getPost(page, tag);
}

//Tag API Fect

async function getTag() {    //all tag getting here
  try {
    const tagData = await fetch(`https://dummyapi.io/data/v1/tag?limit=50`, {
      method: "GET",
      headers: {
        "app-id": "6377395759a794603dfaf63d",
      },
    });

    let tagsDataResult = await tagData.json();
    let tagsData = tagsDataResult.data;

    tagsData.slice(10, 40).forEach((tag) => {
      const tagDisplay = `<button class="m-1 tagStyle" onclick="getPostByTag('${tag}')">${tag}</button>`;
      document.getElementById("tagID").innerHTML += tagDisplay;
    });
  } catch (error) {
    console.log("Tag fetch Error:", error.message);
  }
}
getTag();

// Active User Profile API fetch
async function getUserList() {
  try {
    const UserListData = await fetch(
      `https://dummyapi.io/data/v1/user?limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "6377395759a794603dfaf63d",
        },
      }
    );
    let dataList = await UserListData.json();
    let dataUser = dataList.data;

    dataUser.forEach((ele) => {
      const displayUser = `
                        <div>
                        <div class="contaner-fluid  activeUserStyle ">
                            <div  class="innerUserStyle ">
                              <img class='active-chat-image' src='${
                                ele.picture
                              }' alt=''>
                              <h6 class="userText" >${
                                ele.firstName + " " + ele.lastName
                              }</h6>
                            </div>
                          </div>
                    </div>`;
      document.getElementById("userID").innerHTML += displayUser;
    });
  } catch (error) {
    console.log("User fetch Error:", error.message);
  }
}
getUserList();

// Handle logout//
function handleLogout() {
  localStorage.setItem("key", 0);
  window.location.href = "login.html";
}
