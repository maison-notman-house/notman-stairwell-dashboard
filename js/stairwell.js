DISPLAY_STATES = [ 'here', 'upstairs' ];
DISPLAY_CYCLE_MILLISECONDS = 4000;

/* displays the IP address. makes it easier when we need to remote connect */
function displayAddress() {
    var searchParams = new URLSearchParams(location.search);
    var address = searchParams.get('address');
    if (address && address.length > 0 ) {
        var elem = document.getElementById('address');
        if (elem) {
            elem.innerHTML = address;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    displayAddress();
});

angular.module('stairwell', [])

  // Stairwell controller
  .controller('StairwellCtrl', function($scope, $interval) {
    $scope.display = DISPLAY_STATES[0];

    // Update the content of the display
    function updateDisplay() {
      var currentIndex = DISPLAY_STATES.indexOf($scope.display);
      var nextIndex = ++currentIndex % DISPLAY_STATES.length;
      $scope.display = DISPLAY_STATES[nextIndex];
    }

    $interval(updateDisplay, DISPLAY_CYCLE_MILLISECONDS);
  });
