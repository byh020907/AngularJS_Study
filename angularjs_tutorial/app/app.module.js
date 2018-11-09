'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'ngRoute',
    'core',
    'phoneList',
    'phoneDetail'
]);

Import("phone-list/phone-list.module.js");
Import("phone-list/phone-list.component.js");
Import("phone-detail/phone-detail.module.js");
Import("phone-detail/phone-detail.component.js");

Import("core/core.module.js");
Import("core/checkmark/checkmark.module.js");