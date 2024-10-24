$(document).ready(function() {
  let items = $('.diary-entries-data'); 
  let itemsPerPage = 6; // Number of items to show per load
  let currentIndex = 0; 
  
  function showItems() {
    items.slice(currentIndex, currentIndex + itemsPerPage).show(); 
    currentIndex += itemsPerPage; 
    if (currentIndex >= items.length) {
      $('#loadMoreBtn').hide(); 
    }
  }
  // Initial load
  showItems();

  $('#loadMoreBtn').on('click', function() {
    showItems();
  });
});