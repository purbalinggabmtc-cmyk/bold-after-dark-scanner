/* BOLD AFTER DARK
 * Central Navigation Reference
 * --------------------------------
 * Semua URL navigasi utama disimpan di satu tempat.
 */

const APP_NAVIGATION = {
  home: "https://boldafterdark.my.id/index.html",
  admin: "https://boldafterdark.my.id/admin.html",
  report: "https://boldafterdark.my.id/report.html"
};

function navigateTo(page) {
  const target = APP_NAVIGATION[page];

  if (!target) {
    console.error("Navigation target tidak ditemukan:", page);
    return;
  }

  window.location.assign(target);
}
