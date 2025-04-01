const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too <3";
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZ5cWN6OG9qeGgyMXg5ZGMydGRyaDNrdHR2Z2c0d3pxNXdua3VxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KDteE5sy0H1gW8kxQV/giphy.gif";
  // Hide the No button with a fade out effect
  noBtn.style.transition = "opacity 0.5s ease";
  noBtn.style.opacity = "0";
  // Remove the button after the fade out
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 500);
});

// Function to get random position within viewport
function getRandomPosition() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Calculate the maximum allowed position within viewport
  const maxX = viewportWidth - noBtnRect.width;
  const maxY = viewportHeight - noBtnRect.height;
  
  // Generate random position within viewport bounds
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY)
  };
}

noBtn.addEventListener("mouseover", () => {
  // Get random position
  const randomPos = getRandomPosition();
  
  // Apply the new position with smooth transition
  noBtn.style.position = "fixed";
  noBtn.style.transition = "all 0.2s ease";
  noBtn.style.left = randomPos.x + "px";
  noBtn.style.top = randomPos.y + "px";
});

// Add mouse move event to make the button move away from cursor
noBtn.addEventListener("mousemove", (e) => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Get current button position
  const currentX = noBtnRect.left;
  const currentY = noBtnRect.top;
  
  // Calculate distance from cursor to button
  const cursorX = e.clientX;
  const cursorY = e.clientY;
  
  // Calculate the direction vector from cursor to button
  const dx = currentX - cursorX;
  const dy = currentY - cursorY;
  
  // Normalize the direction vector
  const length = Math.sqrt(dx * dx + dy * dy);
  const normalizedDx = dx / length;
  const normalizedDy = dy / length;
  
  // Check if button is near edges
  const isNearEdge = currentX < 20 || currentX > viewportWidth - noBtnRect.width - 20 ||
                    currentY < 20 || currentY > viewportHeight - noBtnRect.height - 20;
  
  // Calculate movement speed based on whether button is cornered
  const baseSpeed = 100;
  const cornerSpeed = 200;
  const movementSpeed = isNearEdge ? cornerSpeed : baseSpeed;
  
  // Calculate new position (move away from cursor)
  let newX = currentX + normalizedDx * movementSpeed;
  let newY = currentY + normalizedDy * movementSpeed;
  
  // If cornered, add extra movement away from the corner
  if (isNearEdge) {
    // Get a new random position when cornered
    const randomPos = getRandomPosition();
    newX = randomPos.x;
    newY = randomPos.y;
  }
  
  // Ensure the button stays within viewport bounds
  newX = Math.max(0, Math.min(viewportWidth - noBtnRect.width, newX));
  newY = Math.max(0, Math.min(viewportHeight - noBtnRect.height, newY));
  
  // Apply new position
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
});
