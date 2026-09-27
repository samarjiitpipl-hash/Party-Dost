<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Party Dost</title>
  <script>
    // Single Page App GitHub Pages redirect trick
    // Stores the intended path and redirects to index with the route
    (function () {
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
  <meta http-equiv="refresh" content="0; url=/Party-Dost/" />
</head>
<body>
  <p>Redirecting to Party Dost...</p>
</body>
</html>