PigE.factory('APIService', function($http,
                                    $q)
{
        var serverUrl = 'http://localhost:8080';

        function sendGet(path){
            $http.get(serverUrl + path).success(function(data){
                return data;
            })
        }

        function sendPost(path, postData){
            var defer = $q.defer();

            var config = {
                'Access-Control-Request-Headers': 'accept, content-type'
            };

            $http.post(serverUrl + path, postData, config).success(function(data){
                defer.resolve(data);
            }).error(function(){
                defer.reject('error in post');
            });

            return defer.promise;
        }

        return {
            registerUser: function(data){
                var promise = sendPost('/api/registerUser', data);
                promise.then(function(data){
                    console.log(data);
                })
            }
        };
});
