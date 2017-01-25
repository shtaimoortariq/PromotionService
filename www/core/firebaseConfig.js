/**
 * Created by taimoortariqdev on 1/11/2017.
 */

var config = {
    apiKey: "AIzaSyA0eB29TUEjHNx7roIbItOtabGxTL9P9X8",
    authDomain: "promotion-service.firebaseapp.com",
    databaseURL: "https://promotion-service.firebaseio.com",
    storageBucket: "promotion-service.appspot.com",
    messagingSenderId: "477488430513"
};

var mainApp = firebase.initializeApp(config);
var referenceFirebase = mainApp.database().ref();
