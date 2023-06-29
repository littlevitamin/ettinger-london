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
      return 'color-green';
    case 'London Tan':
      return 'color-orange';
    case 'Havana/London Tan':
      return 'color-brown';
    case 'Ettinger Grey/London Tan':
      return 'color-grey';
    case 'Black/London Tan':
      return 'color-black';
    case 'Red/London Tan':
      return 'color-red';
    case 'Nut/London Tan':
      return 'color-darkbrown';
    case 'Petrol Blue/London Tan':
      return 'color-blue';          
    case 'Navy/London Tan':
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
