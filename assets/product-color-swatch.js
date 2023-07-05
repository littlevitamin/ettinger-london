var inputs = document.querySelectorAll('input[name="Colour"]');
var labels = document.querySelectorAll('.variant-options');

function changeLabelBackground() {
  labels.forEach(function(label) {
    var labelText = label.innerText.split('<span')[0].trim();
    var colorClass = getColorClass(labelText);
    label.className = colorClass;
  });
}

function getColorClass(color) {
  switch (color) {
    case 'Green/London Tan':
      return 'color-green-london-tan';
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
    case 'Forest Green':
      return 'color-forest-green';
    case 'Marine Blue':
      return 'color-marine-blue';
    case 'Tan':
      return 'color-tan';
    case 'White':
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
    default:
      return '';
  }
}

// Set initial background color based on the checked input
inputs.forEach(function(input) {
  if (input.checked) {
    var selectedValue = input.value;

    labels.forEach(function(label) {
      var labelText = label.innerText.split('<span')[0].trim();
      var colorClass = getColorClass(labelText);
      label.className = colorClass;
    });
  }
});

// Attach change event listener to inputs
inputs.forEach(function(input) {
  input.addEventListener('change', changeLabelBackground);
});
