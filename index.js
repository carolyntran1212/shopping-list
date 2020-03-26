$(function () {
    $('#js-shopping-list-form').submit(function(event) {
      console.log('Add item button clicked')
      // stop the default form submission behavior
      event.preventDefault();
      // add item
      const item = $('#shopping-list-entry').val();
      $('.shopping-list').append(`<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
    // check
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      console.log('check button clicked');
      $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
    // delete
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      console.log('delete button clicked');
      $(this).closest('li').remove();
    });
  
  });
   