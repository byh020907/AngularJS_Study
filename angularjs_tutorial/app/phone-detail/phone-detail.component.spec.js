/**
 * Created by INNO-2 on 2018-11-08.
 */
'use strict';
describe('phoneDetail', function() {
    // Load the module that contains the `phoneDetail` component before each test
    beforeEach(module('phoneDetail'));
    // Test the controller
    describe('PhoneDetailController', function() {
        var xyzPhoneData = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        };
        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);
            $routeParams.phoneId = 'xyz';
            ctrl = $componentController('phoneDetail');
        }));
        it('should fetch the phone details', function() {
            expect(ctrl.phone).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.phone).toEqual({name: 'phone xyz'});
        });
    });
});