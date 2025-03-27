const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too <3";
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZ5cWN6OG9qeGgyMXg5ZGMydGRyaDNrdHR2Z2c0d3pxNXdua3VxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KDteE5sy0H1gW8kxQV/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
