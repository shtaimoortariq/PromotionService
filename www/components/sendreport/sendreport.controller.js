(function () {
    'use strict';

    angular
        .module('app.sendreport')
        .controller('SendReportController', SendReportController);

    SendReportController.$inject = ['$cordovaGeolocation', '$cordovaImagePicker','$scope' ,'$cordovaDevice', '$cordovaFile', '$ionicPlatform', '$cordovaEmailComposer', '$ionicActionSheet', 'ImageService', 'FileService', '$cordovaToast'];

    /* @ngInject */
    function SendReportController($cordovaGeolocation, $cordovaImagePicker, $scope, cordovaDevice, $cordovaFile, $ionicPlatform, $cordovaEmailComposer, $ionicActionSheet, ImageService, FileService, $cordovaToast) {
      var vm = this;

      this.hideDetails = false;
      this.category = '';
      this.type = '';
      this.description = '';
      this.location = '';
      this.flagLocation = false;
      this.collection = {
        selectedImage: ''
      };


      //GET CORDOVA  http://ngcordova.com/docs/install/
      //GET LOCATION CORDOVA FUNCTION http://ngcordova.com/docs/plugins/geolocation/

      this.currentLocation = function () {
        console.log(vm.category);
        console.log(vm.type);
        console.log(vm.description);
        console.log(vm.location);
        console.log(vm.hideDetails);
        console.log(vm.flagLocation);
        if (vm.flagLocation) {
          var posOptions = {timeout: 1000, enableHighAccuracy: false};
          $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log("Latitute" + lat);
            console.log("Longitute" + long);
          }, function (err) {
            console.log(err);
            $cordovaToast.showLongBottom('PERMISSION DENIED');
            vm.flagLocation = false;

          });
        }
      };


      this.hideMyDetails = function () {
        console.log(vm.hideDetails);
        console.log("ASDASDASDASDASDASDASDAS")
      };


      //IMAGE CODE

      /* $ionicPlatform.ready(function() {
       $scope.images = FileService.images();
       $scope.$apply();
       });

       $scope.urlForImage = function(imageName) {
       var trueOrigin = cordova.file.dataDirectory + imageName;
       return trueOrigin;
       };

       $scope.addMedia = function() {
       $scope.hideSheet = $ionicActionSheet.show({
       buttons: [
       { text: 'Take photo' },
       { text: 'Photo from library' }
       ],
       titleText: 'Add images',
       cancelText: 'Cancel',
       buttonClicked: function(index) {
       $scope.addImage(index);
       }
       });
       };

       $scope.addImage = function(type) {
       $scope.hideSheet();
       ImageService.handleMediaDialog(type).then(function() {
       $scope.$apply();
       });
       };

       $scope.sendEmail = function() {
       if ($scope.images != null && $scope.images.length > 0) {
       var mailImages = [];
       var savedImages = $scope.images;
       if ($cordovaDevice.getPlatform() == 'Android') {
       // Currently only working for one image..
       var imageUrl = $scope.urlForImage(savedImages[0]);
       var name = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
       var namePath = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
       $cordovaFile.copyFile(namePath, name, cordova.file.externalRootDirectory, name)
       .then(function(info) {
       mailImages.push('' + cordova.file.externalRootDirectory + name);
       $scope.openMailComposer(mailImages);
       }, function(e) {
       reject();
       });
       } else {
       for (var i = 0; i < savedImages.length; i++) {
       mailImages.push('' + $scope.urlForImage(savedImages[i]));
       }
       $scope.openMailComposer(mailImages);
       }
       }
       };

       $scope.openMailComposer = function(attachments) {
       var bodyText = '<html><h2>My Images</h2></html>';
       var email = {
       to: 'some@email.com',
       attachments: attachments,
       subject: 'Devdactic Images',
       body: bodyText,
       isHtml: true
       };

       $cordovaEmailComposer.open(email).then(null, function() {
       for (var i = 0; i < attachments.length; i++) {
       var name = attachments[i].substr(attachments[i].lastIndexOf('/') + 1);
       $cordovaFile.removeFile(cordova.file.externalRootDirectory, name);
       }
       });
       }*/

      $ionicPlatform.ready(function() {
        //window.localStorage.clear();
        $scope.images = FileService.images();

      });


      $scope.addMedia = function () {
        $scope.hideSheet = $ionicActionSheet.show({
          buttons: [
            {text: 'Take photo'},
            {text: 'Photo from library'}
          ],
          titleText: 'Add images',
          cancelText: 'Cancel',
          buttonClicked: function (index) {
            console.log("index");
            console.log(index);
            $scope.addImage(index);

          }
        });
      };

      $scope.addImage = function (type) {
        console.log("first add Image in SendReport");
        $scope.hideSheet();
        ImageService.handleMediaDialog(type).then(function () {
          $scope.$apply();
        });
      };

      $scope.sendEmail = function () {
        if ($scope.images != null && $scope.images.length > 0) {
          var mailImages = [];
          var savedImages = $scope.images;
          for (var i = 0; i < savedImages.length; i++) {
            mailImages.push('base64:attachment' + i + '.jpg//' + savedImages[i]);
          }
          $scope.openMailComposer(mailImages);
        }
      };

      $scope.openMailComposer = function (attachments) {
        var bodyText = '<html><h2>My Images</h2></html>';
        var email = {
          to: '',
          attachments: attachments,
          subject: 'Devdactic Images',
          body: bodyText,
          isHtml: true
        };

        $cordovaEmailComposer.open(email, function () {
          console.log('email view dismissed');
        }, this);
      }
    }
})();
