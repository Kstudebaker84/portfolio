var $grid = $('#projects').isotope({
  // // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.filter-buttons').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
