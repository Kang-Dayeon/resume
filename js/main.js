const controller = new ScrollMagic.Controller();

const animateElem = [".animate_01", ".animate_02", ".animate_03"];
const triggerElem = [".trigger_01", ".trigger_02", ".trigger_03"];

console.log(animateElem.length);
for (let i = 0; i < animateElem.length; i++) {
  let currentAnimateElem = animateElem[i];
  let currentTriggerElem = triggerElem[i];

  const timeline = new TimelineMax();

  let scene = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "1000px"
  })
    .setTween(timeline)
    .addTo(controller)

  const tween_opacity = new TimelineMax();
  tween_opacity
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 0
    })
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 1
    })
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 0
    }, "+=0.4");

  timeline.add(tween_opacity, 0)
  const tween_move = TweenMax.fromeTo(currentAnimateElem, 1, {
    ease: SlowMo.ease.config(0.7, 0.7, false),
    y: 50
  }, {
    ease: SlowMo.ease.config(0.7, 0.7, false),
    y: -50
  })

}

