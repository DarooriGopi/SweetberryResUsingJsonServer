'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
                this.getDishes = function(){
                    
                    // return $http.get(baseURL+"dishes");
                     return $resource(baseURL+"dishes/:id", null , {'update':{method:'PUT'}});
                    
                };
    
//                this.getDish = function (index) {
//                    
//                    return $http.get(baseURL+"dishes/"+index);
//                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function(){
                    
                    return $resource(baseURL+"promotions/:id");
                };  
        }])
//        .constant("baseURL","http://localhost:3000/")
        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            
            corpfac.getLeaders= function(){
                 return $resource(baseURL + "leadership/:id")
                        
            };
                return corpfac;
        }])
    
    .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

          var feedfac = {};

          // Only need POST so no custom actions defined.
          feedfac.getFeedback = function () {
            return $resource(baseURL + 'feedback/:id');
          };

          return feedfac;
        }])

;
