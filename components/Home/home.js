define(['libs/knockout'],
  function HomeViewModel(ko){
    return function(){
      var self = this;

      self.deviceName = ko.observable("N/A");
      self.spaceText = ko.observable("N/A");
      self.hostUpTime = ko.observable("N/A");
      self.btDeviceStatus = ko.observable("N/A");
      self.connectedDevice = ko.observable("N/A");
      self.btConnectionTime = ko.observable("N/A");

      function GrabStatusData(){
        var request = new XMLHttpRequest();
        request.open('GET', '/status', true);
        request.setRequestHeader('Accept', 'application/json');
        request.onload = function(){
          if(this.status >= 200 && this.status < 400){
            //Success
            var data = JSON.parse(this.response);
            self.deviceName(data.devName);
            self.spaceText(data.space);
            self.hostUpTime(data.hostUpTime);
            self.btDeviceStatus(data.btDevStatus);
            self.connectedDevice(data.connectedDevice);
            self.btConnectionTime(data.btConnTime);
            console.log("Done...")
          } else {
            //Error on the target server.
          }
        };

        request.onerror = function(){
          //Connection error...
        };

        request.send();
      }

      GrabStatusData();
      setInterval(function(){GrabStatusData();}, 60*1000);
    };
  });
