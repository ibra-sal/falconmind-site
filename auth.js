/** Gate flow: index.html (login) → home-page.html (site) */
const FM_AUTH_KEY = 'fm_auth';
const FM_PASSWORD = 'Sebasaudivision2030';
const FM_LOGIN_PAGE = '/';
const FM_SITE_PAGE = '/home-page';

function fmIsAuthed() {
  return sessionStorage.getItem(FM_AUTH_KEY) === '1';
}

function fmGrantAuth() {
  sessionStorage.setItem(FM_AUTH_KEY, '1');
}

function fmCheckPassword(value) {
  return value.trim() === FM_PASSWORD;
}

function fmEnterSite() {
  fmGrantAuth();
  window.location.href = FM_SITE_PAGE;
}

/** Redirect to login if this page requires auth. */
function fmRequireAuth(loginPage) {
  if (!fmIsAuthed()) {
    window.location.replace(loginPage || FM_LOGIN_PAGE);
  }
}

/** Already logged in — skip the gate. */
function fmRedirectIfAuthed() {
  if (fmIsAuthed()) {
    window.location.replace(FM_SITE_PAGE);
  }
}
