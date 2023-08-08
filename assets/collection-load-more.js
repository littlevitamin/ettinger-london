// var products_on_page = $('.products-on-page');
// var next_url = products_on_page.data('next-url');
// var load_more_btn = $('.load-more');

// function loadMoreProducts() {
//     $.ajax (
//         {
//             url: next_url,
//             type: 'GET',
//             dataType: 'html'
//         }
//     ).done(function(next_page) {
//         var new_products = $(next_page).find('.products-on-page');
//         var new_url = new_products.data('next-url');

//         next_url = new_url;

//         var productGrid = document.getElementById("product-grid");
//         productGrid.setAttribute("data-next-url", next_url);

//         products_on_page.append(new_products.html());

//         if(next_url === '') {
//             load_more_btn.hide()
//         }
//     })
// }

  let clickCount = 0;
  let initialPageSize = {{ paginate.page_size }};
  let next_url = $('.products-on-page').data('next-url');
  
  function loadMoreProducts() {
    clickCount++;
    let newPageSize = initialPageSize * (clickCount + 1);
    
    let updatedNextUrl = next_url.replace(/\d+$/, newPageSize);
    
    $.ajax({
      url: updatedNextUrl,
      type: 'GET',
      dataType: 'html'
    }).done(function(next_page) {
      let new_products = $(next_page).find('.products-on-page');
      let new_url = new_products.data('next-url');
      
      next_url = new_url;
      let productGrid = document.getElementById("product-grid");
      productGrid.setAttribute("data-next-url", next_url);
      
      $('.products-on-page').append(new_products.html());
      
      if (next_url === '') {
        $('.load-more').hide();
      }
    });
  }