document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('input[name="Colour"]');

  function changeLabelBackground(input) {
    var labelText = input.value.trim();
    var colorClass = getColorClass(labelText);
    var label = input.nextElementSibling;
    if (label.tagName === 'LABEL') {
      label.className = colorClass;
    }
  }

  // Define the function to handle quick view
  function handleQuickView() {
    // Find all quick view modals with the class 'quick-add__modal'
    var quickViewModals = document.querySelectorAll('.quick-add__modal');
  
    // Loop through all the modals
    quickViewModals.forEach(function(quickViewModal) {
      // Add an event listener for when each quick view modal is opened
      quickViewModal.addEventListener('modalOpened', function() {
        // Find the inputs in the current modal
        var inputs = quickViewModal.querySelectorAll('input[name="Colour"]');
  
        // Apply the changeLabelBackground function to the inputs
        inputs.forEach(function(input) {
          if (input.checked) {
            changeLabelBackground(input);
          }
          input.addEventListener('change', function() {
            changeLabelBackground(this);
          });
        });
      });
    });
  }
  
  // Add an event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Call the handleQuickView function to set up the event listener for quick view
    handleQuickView();
  });

  function getColorClass(color) {
    switch (color) {
      case 'Green/London Tan':
        return 'color-green-london-tan';
      case 'Bracken/Eggshell':
        return 'color-bracken-eggshell';
      case 'Havana/London Tan':
        return 'color-havana-london-tan';
      case 'Ettinger Grey/London Tan':
        return 'color-ettinger-grey-london-tan';
      case 'Black/London Tan':
        return 'color-black-london-tan';
      case 'Red/London Tan':
        return 'color-red-london-tan';
      case 'Nut/London Tan':
        return 'color-nut-london-tan';
      case 'Petrol Blue/London Tan':
        return 'color-petrol-blue-london-tan';
      case 'Navy/London Tan':
        return 'color-navy-london-tan';
      case 'Bordeaux':
        return 'color-bordeaux';
      case 'Black':
        return 'color-black';
      case 'Blue':
        return 'color-blue';
      case 'Ebony/Black':
        return 'color-black';
      case 'Forest Green':
        return 'color-forest-green';
      case 'Marine Blue':
        return 'color-marine-blue';
      case 'Tan':
        return 'color-tan';
      case 'White':
        return 'color-white';
      case 'Neutral/White':
        return 'color-white';
      case 'Chocolate':
        return 'color-chocolate';
      case 'Nut':
        return 'color-nut';
      case 'Hazelnut':
        return 'color-hazelnut';
      case 'Pink':
        return 'color-pink';
      case 'Pale Blue':
        return 'color-pale-blue';
      case 'Taupe':
        return 'color-taupe';
      case 'Madeira Blue':
        return 'color-madeira-blue';
      case 'Havana':
        return 'color-havana';
      case 'Chestnut':
        return 'color-chestnut';
      case 'Green':
        return 'color-green';
      case 'Yellow':
        return 'color-yellow';
      case 'Petrol Blue':
        return 'color-petrol-blue';
      case 'Red':
        return 'color-red';
      case 'Purple':
        return 'color-purple';
      case 'Turquoise':
        return 'color-turquoise';
      case 'Orange':
        return 'color-orange';
      case 'Silver':
        return 'color-silver';
      case 'Dark Brown':
        return 'color-dark-brown';
      case 'Dark Havana':
        return 'color-dark-havana';
      case 'London Tan':
        return 'color-london-tan';
      case 'Navy':
        return 'color-navy';
      case 'Black/London Tan':
        return 'color-black-london-tan';
      case 'Mahogany/Black':
        return 'color-mahogany-black';
      case 'Green/London Tan':
        return 'color-green-london-tan';
      case 'Ettinger Grey':
        return 'color-ettinger-grey';
      case 'Havana/London Tan':
        return 'color-havana-london-tan';
      case 'Nut/London Tan':
        return 'color-nut-london-tan';
      case 'Navy/London Tan':
        return 'color-navy-london-tan';
      case 'Petrol Blue/London Tan':
        return 'color-petrol-blue-london-tan';
      case 'Red/London Tan':
        return 'color-red-london-tan';
      case 'Tan/Sky Blue':
        return 'color-tan-sky-blue';
      case 'Dark Brown/London Tan':
        return 'color-dark-brown-london-tan';
      case 'Dark Tan/London Tan':
        return 'color-dark-tan-london-tan';
      case 'Black/Turquoise':
        return 'color-black-turquoise';
      case 'Black/Orange':
        return 'color-black-orange';
      case 'Black/Purple':
        return 'color-black-purple';
      case 'Black/Red':
        return 'color-black-red';
      case 'Deep Sea/Dry Stone':
        return 'color-deep-sea-dry-stone';
      case 'Bracken/Eggshell':
        return 'color-bracken/eggshell';
      case 'Sand/Havana':
        return 'color-sand-havana';
      case 'Olive/Havana':
        return 'color-olive-havana';
      case 'Navy/Black':
        return 'color-navy-black';
      case 'White/Black':
        return 'color-white-black';
      case 'Ivory/Havana':
        return 'color-ivory-havana';
      case 'Madeira Blue/Milkwood':
        return 'color-madeira-blue-milkwood';
      case 'Taupe/Milkwood':
        return 'color-taupe-milkwood';
      case 'Forest Green/Ecru':
        return 'color-forest-green-ecru';
      case 'Marine Blue/Ecru':
        return 'color-marine-blue-ecru';
      case 'Black/Ecru':
        return 'color-black-ecru';
      case 'Olive/Yellow':
        return 'color-olive-yellow';
      case 'Turquoise/Silver':
        return 'color-turquoise-silver';
      case 'Orange/Silver':
        return 'color-orange-silver';
      case 'Red/Silver':
        return 'color-red-silver';
      case 'Purple/Silver':
        return 'color-purple-silver';
      case 'Pale Blue/Silver':
        return 'color-pale-blue-silver';
      case 'Oxblood/Silver':
        return 'color-oxblood-silver';
      case 'Acorn/Silver':
        return 'color-acorn-silver';
      case 'Pink/Silver':
        return 'color-pink-silver';
      case 'London Tan/Silver':
        return 'color-london-tan-silver';
      case 'Chestnut/Silver':
        return 'color-chestnut-silver';
      case 'Navy/Silver':
        return 'color-navy-silver';
      case 'Black/Silver':
        return 'color-black-silver';
      case 'Dark Tan':
        return 'color-dark-tan';
      default:
        return '';
    }
  }

  // Set initial background color based on the checked input
  inputs.forEach(function(input) {
    if (input.checked) {
      changeLabelBackground(input);
    }
  });

  // Attach change event listener to inputs
  inputs.forEach(function(input) {
    input.addEventListener('change', function() {
      changeLabelBackground(this);
    });
  });

  // Loop through all inputs and update their labels initially
  inputs.forEach(function(input) {
    changeLabelBackground(input);
  });
});
