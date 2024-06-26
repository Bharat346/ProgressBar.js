const ProgressBarByFA = (containerID, data, labels, icons) => {
  let container = document.getElementById(containerID);
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "space-between";
//   container.style.alignItems = "center";
  container.style.gap = "20px";
  for (let i = 0; i < data.length; i++) {
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML = `
            <div class="CDNTOPROGRESS">
                <div class="label-CDN"><i class="${icons[i]}"></i>${labels[i]}</div>
                <progress value="${data[i]}" max="100"></progress> ${data[i]}%
            </div>
        `;
    container.appendChild(NewDiv);
  }
};

const ProgressBarByIMG = (container, data, labels, src) => {
  for (let i = 0; i < data.length; i++) {
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML = `
            <div class="CDNTOPROGRESS">
                <div class="label-CDN"><img src="${src[i]}"></img>${labels[i]}</div>
                <progress value="${data[i]}" max="100"></progress>
            </div>
        `;
    container.appendChild(NewDiv);
  }
};

function animateProgress(
  containerID,
  canva,
  targetProgress,
  duration,
  lineWidth = 5,
  BgarcClr = "#e0e0e0",
  ProgressarcClr = "#7711e4",
  radius = 80,
  InnerFontSize = 30
) {
  let container = document.getElementById(containerID);

  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";
  container.style.gap = "20px";
  const ctx = canva.getContext("2d");
  const startProgress = parseInt(canva.getAttribute("data-progress")) || 0;
  let startTime = null;

  function draw(progress) {
    ctx.clearRect(0, 0, canva.width, canva.height);

    const centerX = canva.width / 2;
    const centerY = canva.height / 2;
    const startAngle = -0.5 * Math.PI;
    const endAngle = startAngle + (progress / 100) * (2 * Math.PI);

    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = BgarcClr;
    ctx.stroke();

    // Progress arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = ProgressarcClr;
    ctx.stroke();

    // Progress text
    ctx.font = `${InnerFontSize}px Arial`;
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(`${progress}%`, centerX, centerY + 8);
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentProgress = Math.round(
      startProgress + progress * (targetProgress - startProgress)
    );
    draw(currentProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
const circularProgressBar = (
  containerID,
  data,
  labels,
  duration = 1000,
  lineWidth = 5,
  BgarcClr = "#e0e0e0",
  ProgressarcClr = "#7711e4",
  radius = 80,
  InnerFontSize = 30
) => {
  // Check if the container element exists
  let cont = document.getElementById(containerID);
  if (!cont) {
    console.error(`Container element not found with ID: ${containerID}`);
    return; // Exit the function early
  }

  // Proceed with the rest of the function
  for (let i = 0; i < data.length; i++) {
    let PROGRessDIV = document.createElement("div");
    PROGRessDIV.classList.add("CIRCULARBAR");
    PROGRessDIV.innerHTML = `
        <canvas class="progressCanvas" width="166" height="166"></canvas>
        `;
    cont.appendChild(PROGRessDIV);

    // Get the correct canvas element
    let canvas = PROGRessDIV.querySelector(".progressCanvas");

    animateProgress(
      containerID,
      canvas,
      data[i],
      duration,
      lineWidth,
      BgarcClr,
      ProgressarcClr,
      radius,
      InnerFontSize
    );

    let CIRCULARBAR = document.querySelectorAll(".CIRCULARBAR")[i];
    let p = document.createElement("p");
    p.innerText = `${labels[i]}`;
    CIRCULARBAR.appendChild(p);
  }
};
