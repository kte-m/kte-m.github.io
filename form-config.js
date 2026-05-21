/**
 * Aloqa formasi — Formspree sozlamalari
 *
 * SOZLASH (bir marta):
 * 1. https://formspree.io saytiga kiring
 * 2. "+ New Form" → o'z emailingizni kiriting
 * 3. Tasdiqlash xatidagi havolani bosing
 * 4. Form sahifasidagi "Endpoint" manzilini nusxalang
 * 5. Quyidagi endpoint qiymatini shu manzil bilan almashtiring
 */
window.FORM_CONFIG = {
  endpoint: "https://formspree.io/f/mbdbgvvl",
  subject: "KTE sayti — yangi xabar",
  recipientEmail: "teacherfeedback2@gmail.com",
};

window.SITE_DISCLAIMER = {
  version: 2,
  storageKey: "kte_eslatma_qabul_v2",
  legacyStorageKeys: ["kte_disclaimer_accepted"],
  text:
    "Diqqat! Ushbu veb sayt Kompyuterni tashkil etish fani bo'yicha Ta'lim yo'nalishi " +
    "60610200 - Axborot tizimlari va texnologiyalari (moliya-bank tizimida) uchun " +
    "mo'ljallangan bo'lib unda mustaqil talim soatlari 90 soatni tashkil etadi. " +
    "Saytdan foydalanishdan oldin ushbu ogohlantirish bilan tanishib chiqing. " +
    "Davom etish uchun Ok tugmasini bosing.",
};

(function applyDisclaimerAcceptedState() {
  var cfg = window.SITE_DISCLAIMER;
  if (!cfg) {
    return;
  }
  try {
    var saved = localStorage.getItem(cfg.storageKey);
    if (saved === "1" || saved === String(cfg.version)) {
      document.documentElement.classList.add("disclaimer-accepted");
    }
  } catch (e) {
    /* localStorage bloklangan */
  }
})();

(function registerDisclaimerCtrlF5Clear() {
  var cfg = window.SITE_DISCLAIMER;
  if (!cfg) {
    return;
  }

  function clearDisclaimerStorage() {
    var keys = [cfg.storageKey];
    if (cfg.legacyStorageKeys) {
      keys = keys.concat(cfg.legacyStorageKeys);
    }
    keys = keys.filter(function (key, index, arr) {
      return key && arr.indexOf(key) === index;
    });
    try {
      keys.forEach(function (key) {
        localStorage.removeItem(key);
      });
    } catch (e) {
      /* localStorage bloklangan */
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
})();
