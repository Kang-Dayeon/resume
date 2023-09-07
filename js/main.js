const controller = new ScrollMagic.Controller();

const animateElem = [".animate_01", ".animate_02"];
const triggerElem = [".trigger_01", ".trigger_02"];

for (let i = 0; i < 2; i++) {
  let currentAnimateElem = animateElem[i];
  let currentTriggerElem = triggerElem[i];

  const timeline = new TimelineMax();

  let scene = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "1100px"
  })
    .setTween(timeline)
    .addTo(controller)

  const tween_opacity = new TimelineMax();
  tween_opacity
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 0,
    })
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 0.7,
    })
    .to(currentAnimateElem, 0.5, {
      ease: Linear.easeNone,
      opacity: 1,
    })
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 0,
    }, "+=0.4");

  timeline.add(tween_opacity, 0)
  const tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
    ease: SlowMo.ease.config(0.7, 0.7, false),
    y: 50
  }, {
    ease: SlowMo.ease.config(0.7, 0.7, false),
    y: -50
  })

}

//input event 
function inputValue(input, message, user) {
  input.keydown(e => {
    if (e.keyCode == 13) {
      let inputValue = input.val();
      user.text(inputValue);
      input.removeClass('active');
      message.addClass('active');
    }
  });
};

// top scroll
function topScolling(topBtn) {
  topBtn.click(() => {
    $('html,body').animate({ scrollTop: 0 }, 500);
  });
};

// mouse event
function mouseMoving(el) {
  el.mousemove(e => {
    $('.cursor').css('top', e.clientY + 100);
    $('.cursor').css('left', e.clientX);
  });
};

// TweenMax
// function circleAnimation(el, circle) {
//   el.click(e => {
//     let tl = new TimelineLite;
//     tl.to(circle, 1.5, {
//       rotation: 180,
//       x: e.clientX,
//       y: e.clientY + 100,
//       width: 50,
//       height: 50,
//       ease: Back.easeOut.config(1)
//     }).to(circle, 2, {
//       rotation: 360,
//       width: 300,
//       height: 300,
//       ease: Back.easeOut.config(1.7),
//     });
//   });
// };




$(document).ready(function () {
  // aos적용
  AOS.init();
  // event function
  inputValue($('.name-input'), $('.message'), $('.user-name'));
  topScolling($('.top'));
  mouseMoving($('#mouseStart'));
  // circleAnimation($('#mouseStart'), '.circle-click')
});



