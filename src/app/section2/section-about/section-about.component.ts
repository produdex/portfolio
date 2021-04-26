import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section-about",
  templateUrl: "./section-about.component.html",
  styleUrls: ["./section-about.component.scss"],
})
export class SectionAboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    function ripple(element, color = "255,255,255", opacity = 0.3, stop = 120) {
      var rgb;
      var els = document.querySelectorAll(element);
      els.forEach((el) => {
        el.onclick = function (evt) {
          var x = evt.pageX - el.offsetLeft;
          var y = evt.pageY - el.offsetTop;

          var duration = 600;
          var animationFrame, animationStart;

          var animationStep = (timestamp) => {
            if (!animationStart) {
              animationStart = timestamp;
            }

            var frame = timestamp - animationStart;
            if (frame < duration) {
              var easing = (frame / duration) * (2 - frame / duration);

              var circle = "circle at " + x + "px " + y + "px";
              var clr = "rgba(" + color + "," + opacity * (1 - easing) + ")";
              var stp = stop * easing + "%";
              el.style.backgroundImage =
                "radial-gradient(" +
                circle +
                ", " +
                clr +
                " " +
                stp +
                ", transparent " +
                stp +
                ")";

              animationFrame = window.requestAnimationFrame(animationStep);
            } else {
              el.style.backgroundImage = "none";
              window.cancelAnimationFrame(animationFrame);
            }
          };

          animationFrame = window.requestAnimationFrame(animationStep);
        };
      });
    }
    ripple(".btn-green", "0,0,0");
    ripple(".btn-purple", "255,255,255");
  }
}
