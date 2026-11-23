(function () {
  var enter = document.getElementById("enter");
  var snow = document.querySelector(".snow");
  var seen = false;

  try {
    seen = sessionStorage.getItem("entered") === "1";
  } catch (e) {}

  if (enter) {
    function close() {
      enter.classList.add("hidden");
      try {
        sessionStorage.setItem("entered", "1");
      } catch (e) {}
    }

    if (seen) {
      enter.classList.add("hidden");
    } else {
      enter.focus();
    }

    enter.addEventListener("click", close);
    enter.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        close();
      }
    });
  }

  if (
    snow &&
    !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)
  ) {
    for (var i = 0; i < 28; i++) {
      var f = document.createElement("span");
      f.className = "flake";
      f.textContent = "⌖°❅°⌖";
      f.style.left = Math.random() * 100 + "%";
      f.style.fontSize = 10 + Math.random() * 12 + "px";
      f.style.opacity = 0.25 + Math.random() * 0.7;
      f.style.animationDuration = 6 + Math.random() * 10 + "s";
      f.style.animationDelay = Math.random() * -12 + "s";
      f.style.setProperty("--drift", -80 + Math.random() * 160 + "px");
      snow.appendChild(f);
    }
  }
})();
