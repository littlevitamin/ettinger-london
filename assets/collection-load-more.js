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

var productItems = document.querySelectorAll('.grid__item');
var next_url = $('.products-on-page').data('next-url');
var load_more_btn = $('.load-more');

function updateProductCount() {
    var visibleProducts = 0;

    for (var i = 0; i < productItems.length; i++) {
        if (isVisible(productItems[i])) {
            visibleProducts++;
        }
    }

    var productCountElement = document.getElementById('productCount');
    productCountElement.textContent = `${visibleProducts}/{{ collection.all_products_count }} products`;
}

function isVisible(element) {
    return element.offsetWidth > 0 && element.offsetHeight > 0;
}

// Function to be called when the "VIEW MORE" button is clicked
function loadMoreProducts() {
    $.ajax({
        url: next_url,
        type: 'GET',
        dataType: 'html'
    }).done(function(next_page) {
        var new_products = $(next_page).find('.products-on-page');
        var new_url = new_products.data('next-url');

        next_url = new_url;

        var productGrid = document.getElementById("product-grid");
        productGrid.setAttribute("data-next-url", next_url);

        products_on_page.append(new_products.html());

        if (next_url === '') {
            load_more_btn.hide();
        }

        // Update product count after loading more products
        updateProductCount();
    });
}

// Call the updateProductCount function on page load to render initial product count
updateProductCount();
