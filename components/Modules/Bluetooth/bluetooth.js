define(['libs/knockout'],
  function BluetoothViewModel(ko){
    ko.components.register('bluetooth-scanner', {
      viewModel: {require: 'components/Modules/Scanner/scanner'},
      template: {require: 'text!components/Modules/Scanner/scanner.html'}
    });

    ko.components.register('bluetooth-status', {
      viewModel: {require: 'components/Modules/Status/status'},
      template: {require: 'text!components/Modules/Status/status.html'}
    });
    
    return function(){
      var self = this;

    };
  });
