/* NEPA Engineering — interactions */
(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var bar = document.getElementById("scrollBar");

  /* Sticky header state + scroll progress bar */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 40);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Current year */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Contact form — graceful AJAX submit (works with Formspree or any POST endpoint) */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (ev) {
      var action = form.getAttribute("action") || "";
      // If no real endpoint configured yet, don't lose the user's message.
      if (action.indexOf("your-id-here") !== -1) {
        ev.preventDefault();
        if (status) {
          status.className = "form-status err";
          status.textContent =
            "Form endpoint not configured yet. Email us at info@nepaeng.com and we'll reply straight away.";
        }
        return;
      }
      ev.preventDefault();
      if (status) { status.className = "form-status"; status.textContent = "Sending…"; }
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            status.className = "form-status ok";
            status.textContent = "Thank you — your inquiry has been sent. We'll be in touch shortly.";
          } else {
            throw new Error("bad response");
          }
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = "Something went wrong. Please email info@nepaeng.com directly.";
        });
    });
  }
})();
