const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainSection = document.getElementById("main-section");
mainSection.innerHTML = "";
let htmlContent = "";
posts.forEach((item) => {
   htmlContent += ` <div class="main-container">
        <section class="user-info">
          <img
            class="user-avatar"
            src="${item.avatar}"
            alt="avatar of ${item.name}"
          />
          <div class="user-info-container">
            <h1>${item.name}</h1>
            <p class="small-text">${item.location}</p>
          </div>
        </section>
        <section>
          <img
            src="${item.post}"
            class="post-image"
            alt="${item.name}'s post"
          />
        </section>
        <section class="reaction-body">
          <div class="reaction-btn-container">
            <img src="images/icon-heart.png" alt="heart shaped like button" />
            <img src="images/icon-comment.png" alt="comment button" />
            <img src="images/icon-dm.png" alt="direct message" />
          </div>
          <div class="comment-section">
            <p>
              <span class="bold-text">${item.likes} likes </span>
            </p>
            <p>
              <span class="bold-text">${item.username} </span>${item.comment}
            </p>
          </div>
        </section>
      </div>`;
}

);

mainSection.innerHTML = htmlContent;
