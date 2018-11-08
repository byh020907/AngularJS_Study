'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'phoneList'
]);

Import("phone-list/phone-list.module.js");
Import("phone-list/phone-list.component.js");