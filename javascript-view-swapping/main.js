var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function () {
  // console.log('event.target:', event.target);
  // console.log('event.target.matches:', event.target.matches('.tab'));

  for (var i = 0; i < $tab.length; i++) {
    $tab[i].matches('.tab');
    $tab[i].className = 'tab ' + 'active';
    // if (event.target.tagName === 'DIV')
    // $tab[i].className = 'tab ' + 'active';
  }

  var $dataView = document.querySelectorAll('data-view');

  for (var j = 0; j < $view.length; j++) {
    $dataView[j].matches('.data-view');
    $view.className = 'view ' + 'hidden';
  }

});
