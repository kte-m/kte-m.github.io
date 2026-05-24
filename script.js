/**
 * kte_bozorov — Kompyuterni tashkil etish ta'limiy sayti
 */

(function () {
  "use strict";

  const MARUZALAR = [
    { path: "pdf/ma'ruzalar/1- mavzu.pdf", badge: "1-ma'ruza", title: "Kompyuterni tashkil etilishi va klassifikasiyasi" },
    { path: "pdf/ma'ruzalar/2- mavzu.pdf", badge: "2-ma'ruza", title: "Kompyuterni tashkil etilishining mantiqiy asoslari" },
    { path: "pdf/ma'ruzalar/3-mavzu.pdf", badge: "3-ma'ruza", title: "Buyruqlar tizimi arxitekturasi" },
    { path: "pdf/ma'ruzalar/4-mavzu.pdf", badge: "4-ma'ruza", title: "Buyruqlar tizimi arxitekturasi" },
    { path: "pdf/ma'ruzalar/5-mavzu.pdf", badge: "5-ma'ruza", title: "Xotiraning tashkil etilishi va turlari" },
    { path: "pdf/ma'ruzalar/6-mavzu.pdf", badge: "6-ma'ruza", title: "Xotiraning tashkil etilishi va turlari" },
    { path: "pdf/ma'ruzalar/7-mavzu.pdf", badge: "7-ma'ruza", title: "Tizim interfeyslari va shinalarni tashkil etilishi" },
    { path: "pdf/ma'ruzalar/8-mavzu.pdf", badge: "8-ma'ruza", title: "Tizim interfeyslari va shinalarni tashkil etilishi" },
    { path: "pdf/ma'ruzalar/9-mavzu.pdf", badge: "9-ma'ruza", title: "Kompyuterga ma’lumotlarni kiritish-chiqarish tizimlari" },
    { path: "pdf/ma'ruzalar/10-mavzu.pdf", badge: "10-ma'ruza", title: "Prosessorlar, turlari va xususiyatlari" },
    { path: "pdf/ma'ruzalar/11-mavzu.pdf", badge: "11-ma'ruza", title: "Prosessorlar, turlari va xususiyatlari" },
    { path: "pdf/ma'ruzalar/12-mavzu.pdf", badge: "12-ma'ruza", title: "Tashqi qurilmalar turlari va vazifalari" },
    { path: "pdf/ma'ruzalar/13-mavzu.pdf", badge: "13-ma'ruza", title: "Tashqi qurilmalar turlari va vazifalari" },
    { path: "pdf/ma'ruzalar/14-mavzu.pdf", badge: "14-ma'ruza", title: "Assembler tilida dasturlash asoslari" },
    { path: "pdf/ma'ruzalar/15-mavzu.pdf", badge: "15-ma'ruza", title: "Assembler tilida dasturlash asoslari" },
  ];

  const AMALIY_ISHLAR = [
    {
      path: "pdf/amaliyishlar/1-amaliy ish.pdf",
      badge: "1-amaliy ish",
      title: "Kompyuter tizimining tuzilishini tashkil etish",
    },
    {
      path: "pdf/amaliyishlar/2-amaliy ish.pdf",
      badge: "2-amaliy ish",
      title: "Zamonaviy protsessorlar va ularning ishlash prinsipi",
    },
    {
      path: "pdf/amaliyishlar/3-amaliy ish.pdf",
      badge: "3-amaliy ish",
      title: "Kompyuterni tashkil qilishning arifmetik asoslari",
    },
    {
      path: "pdf/amaliyishlar/4-amaliy ish.pdf",
      badge: "4-amaliy ish",
      title: "Kompyuterni tashkil qilishning arifmetik asoslari",
    },
    {
      path: "pdf/amaliyishlar/5-amaliy ish.pdf",
      badge: "5-amaliy ish",
      title: "Kompyuterning arifmetik va mantiqiy asoslari",
    },
    {
      path: "pdf/amaliyishlar/6-amaliy ish.pdf",
      badge: "6-amaliy ish",
      title: "Kompyuterning arifmetik va mantiqiy asoslari",
    },
    {
      path: "pdf/amaliyishlar/7-amaliy ish.pdf",
      badge: "7-amaliy ish",
      title: "Buyruqlar tizimining arxitekturasi",
    },
    {
      path: "pdf/amaliyishlar/8-amaliy ish.pdf",
      badge: "8-amaliy ish",
      title: "Assembler tilida murakkab arifmetik amallarni bajarish",
    },
    {
      path: "pdf/amaliyishlar/9-amaliy ish.pdf",
      badge: "9-amaliy ish",
      title: "Assembler tilida murakkab arifmetik amallarni bajarish",
    },
    {
      path: "pdf/amaliyishlar/10-amaliy ish.pdf",
      badge: "10-amaliy ish",
      title: "Xotira turlari va ularning xususiyatlari",
    },
    {
      path: "pdf/amaliyishlar/11-amaliy ish.pdf",
      badge: "11-amaliy ish",
      title: "Xotira turlari va ularning xususiyatlari",
    },
    {
      path: "pdf/amaliyishlar/12-amaliy ish.pdf",
      badge: "12-amaliy ish",
      title: "Protsessorning imkoniyatlarini o'rganish",
    },
    {
      path: "pdf/amaliyishlar/13-amaliy ish.pdf",
      badge: "13-amaliy ish",
      title: "Shinalar va portlarning turlarini o'rganish",
    },
    {
      path: "pdf/amaliyishlar/14-amaliy ish.pdf",
      badge: "14-amaliy ish",
      title: "Shinalar va portlarning turlarini o'rganish",
    },
    {
      path: "pdf/amaliyishlar/15-amaliy ish.pdf",
      badge: "15-amaliy ish",
      title: "Kompyuterning tashqi qurilmalari va ma'lumotlar almashish jarayonlari",
    },
  ];

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const backToTop = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");
  const currentYear = document.getElementById("currentYear");

  function encodePdfPath(path) {
    return encodeURI(path);
  }

  function createPdfCard(item) {
    const href = encodePdfPath(item.path);
    const fileName = item.path.split("/").pop();
    return (
      '<article class="card card--pdf" data-pdf="' +
      item.path +
      '">' +
      '<span class="card__badge">' +
      item.badge +
      "</span>" +
      '<h3 class="card__title">' +
      item.title +
      "</h3>" +
      '<div class="card__actions">' +
      '<a href="' +
      href +
      '" class="btn btn--primary" target="_blank" rel="noopener">PDF ni ochish</a>' +
      '<a href="' +
      href +
      '" class="btn btn--secondary" download="' +
      fileName +
      '">Yuklab olish</a>' +
      "</div>" +
      "</article>"
    );
  }

  function renderPdfGrids() {
    const maruzaGrid = document.getElementById("maruzaGrid");
    const amaliyGrid = document.getElementById("amaliyGrid");

    if (maruzaGrid) {
      maruzaGrid.innerHTML = MARUZALAR.map(createPdfCard).join("");
    }
    if (amaliyGrid) {
      amaliyGrid.innerHTML = AMALIY_ISHLAR.map(createPdfCard).join("");
    }
  }

  function initMobileNav() {
    if (!navToggle || !mainNav) return;

    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Menyuni yopish" : "Menyuni ochish");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initScrollSpy() {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            const href = link.getAttribute("href");
            link.classList.toggle("is-active", href === "#" + id);
          });
        });
      },
      {
        rootMargin:
          "-" +
          (parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
            10
          ) || 72) +
          "px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initBackToTop() {
    if (!backToTop) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.removeAttribute("hidden");
      } else {
        backToTop.setAttribute("hidden", "");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3500);
  }

  function isFormConfigured() {
    const cfg = window.FORM_CONFIG;
    if (!cfg || !cfg.endpoint) return false;
    return cfg.endpoint.indexOf("REPLACE_FORM_ID") === -1;
  }

  function setFormStatus(message, type) {
    const statusEl = document.getElementById("formStatus");
    if (!statusEl) return;
    if (!message) {
      statusEl.hidden = true;
      statusEl.textContent = "";
      statusEl.className = "form-status";
      return;
    }
    statusEl.hidden = false;
    statusEl.textContent = message;
    statusEl.className = "form-status form-status--" + (type || "info");
  }

  function initContactForm() {
    if (!contactForm) return;

    const submitBtn = document.getElementById("contactSubmitBtn");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameField = contactForm.querySelector('[name="name"]');
      const emailField = contactForm.querySelector('[name="email"]');
      const messageField = contactForm.querySelector('[name="message"]');
      let valid = true;

      [nameField, emailField, messageField].forEach(function (field) {
        field.classList.remove("is-invalid");
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          valid = false;
        }
      });

      if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.classList.add("is-invalid");
        valid = false;
      }

      if (!valid) {
        setFormStatus("Iltimos, barcha maydonlarni to'g'ri to'ldiring.", "error");
        showToast("Maydonlarni tekshiring.");
        return;
      }

      const honeypot = contactForm.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value.trim()) {
        return;
      }

      if (!isFormConfigured()) {
        setFormStatus(
          "Forma hali sozlanmagan. form-config.js faylida Formspree endpoint ni kiriting.",
          "error"
        );
        showToast("Formspree endpoint sozlanmagan.");
        return;
      }

      const cfg = window.FORM_CONFIG;
      const fd = new FormData();
      fd.append("name", nameField.value.trim());
      fd.append("email", emailField.value.trim());
      fd.append("message", messageField.value.trim());
      fd.append("_replyto", emailField.value.trim());
      fd.append("_subject", cfg.subject || "Sayt orqali yangi xabar");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Yuborilmoqda...";
      }
      setFormStatus("Xabar yuborilmoqda, kuting...", "info");

      fetch(cfg.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok) {
              var msg =
                (data && data.error) ||
                (data && data.errors && data.errors[0] && data.errors[0].message) ||
                "Yuborishda xatolik yuz berdi (HTTP " + response.status + ").";
              throw new Error(msg);
            }
            if (data && data.error) {
              throw new Error(data.error);
            }
            return data;
          });
        })
        .then(function () {
          contactForm.reset();
          setFormStatus(
            "Rahmat! Xabaringiz qabul qilindi. Xabar administrator emailiga yuborildi.",
            "success"
          );
          showToast("Habar yuborildi!");
        })
        .catch(function (err) {
          console.error("Forma xatosi:", err);
          setFormStatus(err.message || "Xabar yuborilmadi. Keyinroq qayta urinib ko'ring.", "error");
          showToast("Xabar yuborilmadi.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Yuborish";
          }
        });
    });
  }

  function initYear() {
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }
  }

  function initWelcomeDisclaimer() {
    const overlay = document.getElementById("welcomeDisclaimer");
    const textEl = document.getElementById("disclaimerText");
    const okBtn = document.getElementById("disclaimerOk");
    const config = window.SITE_DISCLAIMER;

    if (!overlay || !config) {
      return;
    }

    if (textEl && config.text) {
      textEl.textContent = config.text;
    }

    function clearDisclaimerStorage() {
      const keys = [config.storageKey];
      if (config.legacyStorageKeys) {
        keys.push(...config.legacyStorageKeys);
      }
      const uniqueKeys = keys.filter(function (key, index, arr) {
        return key && arr.indexOf(key) === index;
      });
      uniqueKeys.forEach(function (key) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          /* localStorage bloklangan */
        }
      });
    }

    function acceptDisclaimer() {
      try {
        localStorage.setItem(
          config.storageKey,
          config.version ? String(config.version) : "1"
        );
      } catch (e) {
        /* localStorage yo'q bo'lsa ham modal yopiladi */
      }
      document.documentElement.classList.add("disclaimer-accepted");
      overlay.setAttribute("hidden", "");
    }

    function showDisclaimerAgain() {
      clearDisclaimerStorage();
      document.documentElement.classList.remove("disclaimer-accepted");
      overlay.removeAttribute("hidden");
      if (okBtn) {
        okBtn.focus();
      }
    }

    function isCtrlF5(e) {
      return (
        e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        (e.key === "F5" || e.code === "F5")
      );
    }

    if (okBtn) {
      okBtn.addEventListener("click", acceptDisclaimer);
    }

    window.addEventListener(
      "keydown",
      function (e) {
        if (!isCtrlF5(e)) {
          return;
        }
        clearDisclaimerStorage();
        document.documentElement.classList.remove("disclaimer-accepted");
      },
      true
    );

    if (document.documentElement.classList.contains("disclaimer-accepted")) {
      overlay.setAttribute("hidden", "");
      return;
    }

    overlay.removeAttribute("hidden");
    if (okBtn) {
      okBtn.focus();
    }
  }

  function initMustaqilPdfLinks() {
    const openLink = document.getElementById("mustaqilOpenPdf");
    const downloadLink = document.getElementById("mustaqilDownloadPdf");
    const path = "pdf/ktemustaqiltalim.pdf?v=5";
    const href = encodePdfPath(path);

    if (openLink) {
      openLink.href = href;
    }
    if (downloadLink) {
      downloadLink.href = href;
    }
  }

  function init() {
    initWelcomeDisclaimer();
    renderPdfGrids();
    initMustaqilPdfLinks();
    initMobileNav();
    initScrollSpy();
    initBackToTop();
    initContactForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
