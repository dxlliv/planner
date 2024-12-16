<script setup lang="ts">
// credits: https://codepen.io/stealy/pen/povYwJj

let canvas: HTMLCanvasElement;
let ctx;
const bubbles = [];
const bubbleCount = 20;
const bubbleSpeed = 0.8;

const createBubble = () => {
  return {
    position: { x: 0, y: 0 },
    radius: 15 + Math.random() * 10,
    xOff: Math.random() * canvas.width - 20,
    yOff: Math.random() * canvas.height,
    distanceBetweenWaves: 50 + Math.random() * 40,
    count: canvas.height + Math.random() * canvas.height,
    maxRotation: 85,
    rotation: Math.random() * 170 - 85, // [-85, 85]
    rotationDirection: 'forward',

    render() {
      // Update rotation
      if (this.rotationDirection === 'forward') {
        if (this.rotation < this.maxRotation) {
          this.rotation++;
        } else {
          this.rotationDirection = 'backward';
        }
      } else {
        if (this.rotation > -this.maxRotation) {
          this.rotation--;
        } else {
          this.rotationDirection = 'forward';
        }
      }

      // Draw the bubble
      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate((this.rotation * Math.PI) / 180);

      ctx.beginPath();
      ctx.fillStyle = 'rgb(165, 165, 165)';
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    },
  };
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const bubble of bubbles) {
    bubble.position.x =
      Math.sin(bubble.count / bubble.distanceBetweenWaves) * 50 + bubble.xOff;
    bubble.position.y = bubble.count;
    bubble.render();

    if (bubble.count < 0 - bubble.radius) {
      bubble.count = canvas.height + bubble.yOff;
    } else {
      bubble.count -= bubbleSpeed;
    }
  }

  requestAnimationFrame(animate);
};

const initializeCanvas = () => {
  canvas = document.querySelector('canvas.dx-app-background');
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  ctx = canvas.getContext('2d');

  // Create bubbles
  for (let i = 0; i < bubbleCount; i++) {
    bubbles.push(createBubble());
  }

  // Start animation
  requestAnimationFrame(animate);
};

const handleResize = () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
};

onMounted(() => {
  initializeCanvas();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})
</script>

<template>
  <canvas class="dx-app-background" />
</template>

<style scoped lang="scss">
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  opacity: 0.065;
  pointer-events: none;
}
</style>