define(
  ['libs/knockout'],
    function BluetoothViewModel(ko){
      ko.components.register('bluetooth-scanner', {
        viewModel: {require: 'components/Modules/Bluetooth/Scanner/scanner'},
        template: {require: 'text!components/Modules/Bluetooth/Scanner/scanner.html'}
      });

      ko.components.register('bluetooth-status', {
        viewModel: {require: 'components/Modules/Bluetooth/Status/status'},
        template: {require: 'text!components/Modules/Bluetooth/Status/status.html'}
      });

      return function(){
        var self = this;

      };
  });
