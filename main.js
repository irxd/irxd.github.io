VANTA.TRUNK({
  el: "#trunk",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xd7d7d7,
  backgroundColor: 0x202020,
  spacing: 8.00,
  chaos: 7.00
})

gsap.registerPlugin(ScrambleTextPlugin);

const scrambleRead = gsap.utils.toArray('.read');
scrambleRead.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"読む",
      chars:"読む"
    },
    paused: true
  });
  item.addEventListener('mouseenter', () => {
    tween.play();
  });
  item.addEventListener("mouseleave", () => {
    tween.reverse();
  });
});

const scrambleGithub = gsap.utils.toArray('.github');
scrambleGithub.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"ギットハブ",
      chars:"ギットハブ"
    },
    paused: true
  });
  item.addEventListener('mouseenter', () => {
    tween.play();
  });
  item.addEventListener("mouseleave", () => {
    tween.reverse();
  });
});

const scrambleLinkedin = gsap.utils.toArray('.linkedin');
scrambleLinkedin.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"リンクイン",
      chars:"リンクイン"
    },
    paused: true
  });
  item.addEventListener('mouseenter', () => {
    tween.play();
  });
  item.addEventListener("mouseleave", () => {
    tween.reverse();
  });
});

const scrambleExperiment = gsap.utils.toArray('.experiment');
scrambleExperiment.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"実験的な",
      chars:"実験的な"
    },
    paused: true
  });
  item.addEventListener('mouseenter', () => {
    tween.play();
  });
  item.addEventListener("mouseleave", () => {
    tween.reverse();
  });
});