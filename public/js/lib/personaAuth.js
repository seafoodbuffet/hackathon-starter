$(document).ready(function() {
  $("#browserid").click(function() {
    navigator.id.get(function(assertion) {
      if (assertion) {
        $('input[name="assertion"]').val(assertion);
        $('form[action="/auth/browserid"]').submit();
      } else {
        location.reload();
      }
    });
  });
  
  $("#logout").click(function() {
    navigator.id.logout();
  })
});