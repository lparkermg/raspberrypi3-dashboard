define(
  ['libs/knockout'],
    function(ko){
      ko.components.register('dashboard-home',{
        viewModel: { require: 'components/Home/home'},
        template: { require: 'text!components/Home/home.html'}
      });

      ko.components.register('bluetooth-home',{
        viewModel: { require: 'components/Modules/Bluetooth/bluetooth'},
        template: { require: 'text!components/Modules/Bluetooth/bluetooth.html'}
      });

      ko.components.register('streams-home', {
        viewModel: { require: 'components/Modules/Streams/streams'},
        template: { require: 'text!components/Modules/Streams/streams.html'}
      });

      return function(){
        var self = this;

        //TODO: Implement something to capture the current pill selected.
        //Then change the shown view bassed on that.

        self.currentPill = ko.observable("home");

        self.changeTab = function(tabName){
          self.currentPill(tabName);
        }
      };
    });
