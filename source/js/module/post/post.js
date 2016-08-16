/**
* @module:   post
* @scss:     ./source/css/module/post.scss
* @html:     ./source/js/module/post/post.html
*/


var Module = require('../abstract-module');
var page 	= require('page');

module.exports = Module.extend({

    template: require('./post.html'),

    data: require('../../data/content.json'),

    oninit: function(){
        this.on('image', this.onImageClick);
        this.on('close', this.onCloseClick);
    },


    onrender: function() {
        var panel = document.querySelectorAll('.panel--info');
        var plus = document.querySelectorAll('.plus');
        var photoContainer = document.querySelectorAll('.post-photo');
        var lightBox = document.querySelector('.lightBox');


        // TOGGLING CLASS ON LIST ELEMENT CLICKED
        // for ( var i = 0; i < pluss.length; i++){
        //     console.log(panel[i]);
        //     plus[i].onclick = function(){
        //         console.log('mouseover');
        //         panel[i].classList.toggle("movePanel");
        //     }
        // };

        // ADDDING TRANSITION ON MOUSEOVER & MOUSEOUT STATE
        for ( var i = 0; i < photoContainer.length; i++){
            (function(index){
                photoContainer[i].onmouseover = function(){
                    for ( var i = 0; i < panel.length; i++){
                        if([i] == index){
                            panel[i].classList.add("movePanel");
                            // plus[i].classList.toggle("rotate");
                        }
                    }
                };
                photoContainer[i].onmouseout = function(){
                    for ( var i = 0; i < panel.length; i++){
                        if([i] == index){
                            panel[i].classList.remove("movePanel");
                            // plus[i].classList.toggle("rotate");
                        }
                    }
                };
            })(i);
        };

        //  CREATING NEW ELEMENT TO TRANSITION INTO FULL SCREEN
        // for ( var i = 0; i < photoContainer.length; i++){
        //     console.log(photoContainer);
        //     (function(index){
        //         photoContainer[i].onclick = function(){
        //             lightBox.style.display = "block";
        //             var clonedPicture = this.parentElement.cloneNode(true);
        //             lightBox.appendChild(clonedPicture);
        //
        //         }
        //     })(i);
        // }



    },

    onImageClick: function(){


  	},

    onGoContact: function(){
        page('/contact');
    },
});
