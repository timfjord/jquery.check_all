(function( $ ){
  $.fn.check_all = function() {
    this.click(function() {
      var selector = $(this).data('check-all') || ':checkbox';
      $(selector).filter(':checkbox').prop('checked', this.checked);
    });
  };
})( jQuery );