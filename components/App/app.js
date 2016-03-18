define(
  ['libs/knockout'],
    function(ko){
      ko.components.register('dashboard-home',{
        viewModel: { require: 'components/Home/home'},
        template: { require: 'text!components/Home/home.html'}
      });

      ko.components.register('streams-home', {
        viewModel: { require: 'components/Modules/Streams/streams'},
        template: { require: 'text!components/Modules/Streams/streams.html'}
      });

      //Register new component template here.

      //Adding a new view:
      //1. Copy the code below.
      //ko.components.register('sample-view', {
      //  viewModel: { require: 'components/Modules/Sample/sample'},
      //  template: { require: 'text!components/Modules/Sample/sample.html'}
      //});
      //2. Uncomment the copied code.
      //3. Change the sample stuff to the relavent module paths.

      return function(){
        var self = this;

        self.currentPill = ko.observable("home");

        self.changeTab = function(tabName){
          self.currentPill(tabName);
        }
      };
    });
