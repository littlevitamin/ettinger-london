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

// var products_on_page = $('.products-on-page');
// var next_url = products_on_page.data('next-url');
// var load_more_btn = $('.load-more');

// var pageSize = {{ paginate.page_size }}; // Initial page size (26)
// var productsLoaded = pageSize; // Count of products initially loaded

// function loadMoreProducts() {
//     $.ajax(
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

//         if (next_url === '') {
//             load_more_btn.hide();
//         }

//         // Update the displayed product count after loading
//         updateProductCount();
//     });
// }

// function updateProductCount() {
//     productsLoaded += 26; // Increment count by 26
//     var totalCount = {{ collection.all_products_count }};
//     var countElement = document.getElementById('product-count');
//     countElement.textContent = productsLoaded + ' / ' + totalCount + ' PRODUCTS';
// }

