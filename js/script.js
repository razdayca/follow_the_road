function drive(start, end) {
    gsap.set("#car", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    gsap.to("#car", {
        duration: 5,
        motionPath:{
            path:"#path",
            align: "#path",
            autoRotate: true,
            start: start,
            end: end
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(MotionPathPlugin);
    drive(0, 1);
});
MotionPathHelper.create("#car");