define(
  ['libs/knockout'],
    function(ko){
      ko.components.register('dashboard-home',{
        viewModel: { require: 'components/Home/home'},
        template: { require: 'text!components/Home/home.html'}
      });

      return function(){
        var self = this;
      };
    });
