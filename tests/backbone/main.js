/**
 * Created by TuCChun on 2015/4/16.
 */
require.config({
    baseUrl: "",
    shim: {
        jquery: {
            exports: "jQuery"
        },
        underscore: {
            exports: "_"
        },
        text: {
            exports: "text"
        },
        backbone: {
            exports: "Backbone",
            deps: ["jquery", "text", "underscore"]
        }
    },
    paths: {
        jquery: "../../build/jquery/jquery/1.10.1/jquery-debug",
        underscore: "../../build/underscore/underscore",
        text: "../../build/backbone/text",
        backbone: "../../build/backbone/backbone"
    }
});

require([
    "view/headerView"
],function(HeaderView){
    //var header = new HeaderView();
});
