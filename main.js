const smallScreen = window.matchMedia('(max-width: 600px)')

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
  spacing: smallScreen.matches ? 2.00 : 8.00,
  chaos: smallScreen.matches ? 3.00 : 7.00
})

gsap.registerPlugin(ScrambleTextPlugin);

const scrambleRead = gsap.utils.toArray('.read');
scrambleRead.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"read",
      chars:"ットハ"
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
      text:"github",
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
      text:"linkedin",
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

const scrambleProjects= gsap.utils.toArray('.projects');
scrambleProjects.forEach(item => {
  let tween = gsap.to(item, {
    duration: 1,
    scrambleText:{
      text:"projects",
      chars:"プロジェクト"
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