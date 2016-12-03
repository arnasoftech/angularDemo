(function () {
    "use strict";
    app.controller("moviesCtrl", moviesCtrl);
    moviesCtrl.$inject = ['$scope', '$log'];
    function moviesCtrl($scope, $log) {
        var mc = this;
        mc.maxRating = 10;
        mc.movies = [
            {
             title: "The Matrix",
             description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
             'imageUrl': "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX640_SY720_.jpg",
             rating: 7.5, 
             category: "Action"
            },
            { 
            title: "Focus", 
            description: "In the midst of veteran con man Nicky's latest scheme, a woman from his past - now an accomplished femme fatale - shows up and throws his plans for a loop.",
            'imageUrl': "http://ia.media-imdb.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_SX640_SY720_.jpg",
            rating: 6.9,
            category: "Comedy"
            },
            {
                title: "The Lazarus Effect",
                description: "A group of medical students discover a way to bring dead patients back to life.",
                'imageUrl': "http://ia.media-imdb.com/images/M/MV5BMjM2ODM1OTA0M15BMl5BanBnXkFtZTgwMDMxMDI5MzE@._V1_SX640_SY720_.jpg",
                rating: 6.4,
                category: "Thriller"
            },
            { 
                title: "Everly", 
                description: "An action/thriller centered on a woman who faces down hitmen sent by her ex, a mob boss, while holed up in her apartment.",
                'imageUrl': "http://ia.media-imdb.com/images/M/MV5BMjEyNTU4NTE5NV5BMl5BanBnXkFtZTgwNzY4NzIxNDE@._V1_SX640_SY720_.jpg",
                rating: 5.0,
                category: 'Action'
            },
            {
                title: "Maps to the Stars",
                description: "A tour into the heart of a Hollywood family chasing celebrity, one another and the relentless ghosts of their pasts.",
                'imageUrl': "http://ia.media-imdb.com/images/M/MV5BMTY3MjQwNzYyNV5BMl5BanBnXkFtZTgwNTY3NDQ5MzE@._V1_SX640_SY720_.jpg",
                rating: 7.5,
                category: 'Drama'
            }
                        ];
        mc.rating = 0;
        mc.ratings = [{
            current: 5,
            max: 10
        }, {
            current: 3,
            max: 5
        }];
        mc.options = {
            sourceProp: 'imageUrl',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 3,
             //dir: 'ltr',
            dir: 'rtl',
            width: 360,
            height: 270,
            space: 220,
            autoRotationSpeed: 2500,
            loop: true
        };
         mc.selectedClick = selectedClick;
         mc.slideChanged = slideChanged;
         mc.beforeChange = beforeChange;
         mc.lastSlide = lastSlide;
         mc.getSelectedRating = getSelectedRating;

         function getSelectedRating(rating) {
             $log.log(rating);
         }
        function lastSlide(index) {
            $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }
        function beforeChange(index) {
            $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }
        function selectedClick(index) {
            $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }
        function slideChanged(index) {
            $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }
      
    }


})();