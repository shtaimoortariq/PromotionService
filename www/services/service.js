/**
 * Created by taimoortariqdev on 1/18/2017.
 */

//
// (function () {
//   'use strict'
//
//   angular.module('app.sendReport')
//     .factory('dataservice', dataservice);
//
//   dataservice.$inject = ['$http', 'logger'];
//
// })();

/*

 angular.module('app')
 .factory('FileService', function() {
 var images;
 var IMAGE_STORAGE_KEY = 'images';

 function getImages() {
 var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
 if (img) {
 images = JSON.parse(img);
 } else {
 images = [];
 }
 return images;
 }

 function addImage(img) {
 images.push(img);
 window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
 }

 return {
 storeImage: addImage,
 images: getImages
 }

 })


 .factory('ImageService', function($cordovaCamera, FileService, $q, $cordovaFile) {

 function makeid() {
 var text = '';
 var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

 for (var i = 0; i < 5; i++) {
 text += possible.charAt(Math.floor(Math.random() * possible.length));
 }
 return text;
 }

 function optionsForType(type) {
 var source;
 switch (type) {
 case 0:
 source = Camera.PictureSourceType.CAMERA;
 break;
 case 1:
 source = Camera.PictureSourceType.PHOTOLIBRARY;
 break;
 }
 return {
 destinationType: Camera.DestinationType.FILE_URI,
 sourceType: source,
 allowEdit: false,
 encodingType: Camera.EncodingType.JPEG ,
 popoverOptions: CameraPopoverOptions,
 saveToPhotoAlbum: false
 };
 }

 function saveMedia(type) {
 return $q(function(resolve, reject) {
 var options = optionsForType(type);

 $cordovaCamera.getPicture(options).then(function(imageUrl) {
 var name = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);

 if(name.indexOf('?') != -1) {
 name = name.substr(0, name.lastIndexOf('?'));
 newName = makeid() + name;
 }

 var namePath = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
 var newName = makeid() + name;


 $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, newName)
 .then(function(info) {
 FileService.storeImage(newName);
 resolve();
 }, function(e) {
 reject();
 });
 });
 })
 }
 return {
 handleMediaDialog: saveMedia
 }
 });
 */


angular.module('app')
  .factory('FileService', function () {
    var images = [];
    var IMAGE_STORAGE_KEY = 'dav-images';

    function getImages() {
      var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
      if (img) {
        images = JSON.parse(img);
      } else {
        images = [];
      }
      return images;
    }

    function addImage(img) {
      console.log("add Image in service");
      images.push(img);
      window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
      console.log("ADDed")
    }

    return {
      storeImage: addImage,
      images: getImages
    }
  })

  .factory('ImageService', function ($cordovaCamera, FileService, $cordovaFile, $ionicLoading) {

    function optionsForType(type) {
      var source;
      switch (type) {
        case 0:
          source = Camera.PictureSourceType.CAMERA;
          break;
        case 1:
          source = Camera.PictureSourceType.PHOTOLIBRARY;
          break;
      }
      return {
        quality: 90,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: source,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
    }

    function saveMedia(type) {
      console.log("Open Library");

        var options = optionsForType(type);
        $cordovaCamera.getPicture(options).then(function (imageBase64) {
          FileService.storeImage(imageBase64);

        });

    }

    return {
      handleMediaDialog: saveMedia
    }
  });


