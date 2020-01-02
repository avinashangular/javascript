export var ModulePattern = (function(){
    'use strict';

    var _privateProperty = 'I am a private property';
    var publicProperty = 'I am public propery';

    function _privateMethod(){
        console.log(_privateProperty);
    }

    function publicMethod(){
        _privateMethod();
    }

    return {
        publicMethod : publicMethod,
        publicProperty : publicProperty
    }
}());