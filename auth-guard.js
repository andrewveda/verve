// auth-guard.js
//
// By default this accepts a session from either provider (GitHub or
// Chess.com). A page that must be restricted to one provider can opt in
// by setting a global BEFORE including this script, e.g.:
//
//   <script>window.REQUIRED_AUTH_PROVIDER = 'chesscom';</script>
//   <script src="../../auth-guard.js"></script>
//
// Valid values: 'github', 'chesscom'. Leave unset to accept either.

(function () {

  const REQUIRED_PROVIDER = window.REQUIRED_AUTH_PROVIDER || null;

  const loggedIn =
    localStorage.getItem('logged_in');

  const provider =
    localStorage.getItem('auth_provider'); // 'github' | 'chesscom'

  // Pull identity from whichever provider actually authenticated this session.
  const username = provider === 'chesscom'
    ? localStorage.getItem('chess_username')
    : localStorage.getItem('github_username');

  const externalId = provider === 'chesscom'
    ? localStorage.getItem('chess_id')
    : localStorage.getItem('github_id');

  const profileUrl = provider === 'chesscom'
    ? localStorage.getItem('chess_profile')
    : localStorage.getItem('github_profile');

  const sessionValid =
    loggedIn === 'true' &&
    !!provider &&
    !!username &&
    !!externalId;

  const providerAllowed =
    !REQUIRED_PROVIDER || provider === REQUIRED_PROVIDER;

  // Invalid, incomplete, or wrong-provider authentication for this page
  if (!sessionValid || !providerAllowed) {

    // Only wipe storage for a genuinely broken/incomplete session. If the
    // session is valid but just for the wrong provider (e.g. a GitHub
    // login hitting a Chess.com-only quest), leave it alone — other pages
    // still rely on it — and just send the user to log in with the
    // required provider instead.
    if (!sessionValid) {
      localStorage.removeItem('logged_in');
      localStorage.removeItem('auth_provider');
      localStorage.removeItem('github_username');
      localStorage.removeItem('github_id');
      localStorage.removeItem('github_profile');
      localStorage.removeItem('chess_username');
      localStorage.removeItem('chess_id');
      localStorage.removeItem('chess_profile');
      localStorage.removeItem('avatar');
      localStorage.removeItem('userName');
      localStorage.removeItem('userDept');
    }

    // Preserve return URL
    const current =
      window.location.pathname +
      window.location.search;

    const returnTo =
      encodeURIComponent(current);

    const loginPage =
      REQUIRED_PROVIDER === 'chesscom' ? 'chess-auth.html' : 'auth.html';

    // Redirect to the right login page
    window.location.replace(
      `/verve/${loginPage}?return=${returnTo}`
    );

    return;
  }

  // Global helper object
  window.GH = {

    loggedIn: true,

    provider:
      provider,

    username:
      username,

    // Kept as `githubId` for backward compatibility: existing quest pages
    // already read window.GH.githubId as a generic external-account
    // identifier. It now holds whichever provider's id authenticated
    // this session.
    githubId:
      externalId,

    profile:
      profileUrl,

    avatar:
      localStorage.getItem('avatar'),

    name:
      localStorage.getItem('userName'),

    dept:
      localStorage.getItem('userDept')

  };

})();