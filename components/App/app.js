define(
  ['libs/knockout'],
    function(ko){
      ko.components.register('dashboard-home',{
        viewModel: { require: 'components/Home/home'},
        template: { require: 'text!components/Home/home.html'}
      });

      ko.components.register('bluetooth-home',{
        viewModel: { require: 'components/Bluetooth/bluetooth'},
        template: { require: 'text!components/Bluetooth/bluetooth.html'}
      })

      return function(){
        var self = this;

        //TODO: Implement something to capture the current pill selected.
        //Then change the shown view bassed on that.

        self.currentPill = ko.observable("home");
      };
    });
