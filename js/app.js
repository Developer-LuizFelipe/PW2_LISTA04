window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const input = document.getElementById("new-tweet");
    const list = document.getElementById("posts-list");
    const sideButton = document.querySelector(".sidebar__tweet");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
      const tweet = input.value;
      if (!tweet) {
        alert("Porfavor digite o tweet!");
        return;
      }
      const newpost = createNewPost(tweet, sideButton);
      if (newpost) {
        list.appendChild(newpost);
        input.value = "";
      }
    });
  
    function createNewPost(tweet) {
      const div = document.createElement("div");
      div.classList.add("post");
      const postAvatar = document.createElement("div");
      postAvatar.classList.add("post__avatar");
      const img = document.createElement("img");
      img.src =
        "https://i.pinimg.com/236x/46/79/2e/46792edcfe7785860f0908dd31a7d53c.jpg";
      img.alt = "avatar";
      postAvatar.appendChild(img);
      div.appendChild(postAvatar);
  

      const postBody = document.createElement("div");
      postBody.classList.add("post__body");
      const postHeader = document.createElement("div");
      postHeader.classList.add("post__header");

      const postHeaderText = document.createElement("div");
      postHeaderText.classList.add("post__headerText");
  
      const span = document.createElement("span");
      span.classList.add("post__headerSpecial");
  
      const spanIcon = document.createElement("span");
      spanIcon.classList.add("material-icons");
      spanIcon.classList.add("post__badge");
      spanIcon.textContent = "verified";
      span.appendChild(spanIcon);
      span.appendChild(document.createTextNode("@wanderley"));
      const wy = document.createElement("Wy");
      wy.appendChild(span);
      wy.appendChild(document.createTextNode("Wanderley junior"));
      postHeaderText.appendChild(wy);
      postHeaderText.appendChild(span);
      postHeader.appendChild(postHeaderText);
  
      const postContent = document.createElement("div");
      postContent.classList.add("post-content");
      const content = document.createElement("div");
      content.classList.add("content");
      const postInput = document.createElement("input");
      postInput.classList.add("post__input");
      postInput.type = "text";
      postInput.value = tweet;
      postInput.setAttribute("readonly", "readonly");
      content.appendChild(postInput);
      postContent.appendChild(content);
  
      const postFooter = document.createElement("div");
      postFooter.classList.add("post__footer");
  
      const editTweet = document.createElement("button");
      editTweet.classList.add("material-icons");
      editTweet.classList.add("edit");
      editTweet.textContent = "edit";
  
      const deleteTweet = document.createElement("button");
      deleteTweet.classList.add("material-icons");
      deleteTweet.classList.add("delete");
      deleteTweet.textContent = "delete";
  
      deleteTweet.addEventListener("click", function(event) {
        event.preventDefault();
        div.remove();
      });
  
      postFooter.appendChild(editTweet);
      postFooter.appendChild(deleteTweet);
  
      const likeTweet = document.createElement("button");
      likeTweet.classList.add("material-icons");
      likeTweet.classList.add("favorite_border");
      likeTweet.textContent = "favorite_border";
      postFooter.appendChild(likeTweet);
  
      postBody.appendChild(postHeader);
      postBody.appendChild(postContent);
      postBody.appendChild(postFooter);
  
      div.appendChild(postBody);
      return div;
    }
  
  
  });
  
  function handleEditTweet(event, postInput) {
    event.preventDefault();
    const input = postInput;
    if (input.hasAttribute("readonly")) {
      input.removeAttribute("readonly");
      input.focus();
      input.classList.add("focus_input");
      input.addEventListener("blur", function() {
        input.setAttribute("readonly", "readonly");
        input.classList.remove("focus_input");
      });
    } else {
      input.setAttribute("readonly", "readonly");
      input.classList.remove("focus_input");
    }
  }
  
  
  editTweet.addEventListener("click", (event) => {
    handleEditTweet(event, postInput);
  });
  
  sideButton.addEventListener("click", (event) => {
    handleEditTweet(event, postInput);
  });