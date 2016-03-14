define(
  ['libs/knockout'],
    function StreamsViewModel(ko){
      ko.components.register('stream-favourites', {
        viewModel: {require: 'components/Modules/Streams/Favourites/favourites'},
        template: {require: 'text!components/Modules/Streams/Favourites/favourites.html'}
      });

      ko.components.register('stream-info', {
        viewModel: {require: 'components/Modules/Streams/Info/info'},
        template: {require: 'text!components/Modules/Streams/Info/info.html'}
      });

      return function(){
        var self = this;
      };
  });
