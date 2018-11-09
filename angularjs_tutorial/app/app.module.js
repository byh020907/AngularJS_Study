'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'ngRoute',
    'phoneList',
    'phoneDetail'
]);

Import("phone-list/phone-list.module.js");
Import("phone-list/phone-list.component.js");
Import("phone-detail/phone-detail.module.js");
Import("phone-detail/phone-detail.component.js");