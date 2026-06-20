/** Shared gate — index.html sets this; protected pages require it. */
const FM_AUTH_KEY = 'fm_auth';
const FM_PASSWORD = 'Sebasaudivision2030';

function fmIsAuthed() {
  return sessionStorage.getItem(FM_AUTH_KEY) === '1';
}

function fmGrantAuth() {
  sessionStorage.setItem(FM_AUTH_KEY, '1');
}

function fmCheckPassword(value) {
  return value.trim() === FM_PASSWORD;
}

/** Call at the top of any protected page (e.g. falconmind-online.html). */
function fmRequireAuth(loginPage) {
  if (!fmIsAuthed()) {
    window.location.replace(loginPage || 'index.html');
  }
}
