angular.module("paradis.chambre",['ngRoute'])
    .controller('chambreCtrl',function chambreCtrl($scope,$http){

        setTimeout(function(){


        },500);

$scope.chambres=[
    //{nom:"Papillon",categorie:"Simple",tarif:"2000",superficie:"45m",img:"room_1.jpg"},
    //{nom:"Lune",categorie:"Simple",tarif:"2500",superficie:"50m",img:"room_2.jpg"},
    //{nom:"Desir",categorie:"Simple",tarif:"3000",superficie:"60m",img:"room_2.jpg"},
    //{nom:"Aphrodisiac",categorie:"Double comfort",tarif:"3500",superficie:"85m",img:"room_3.jpg"},
    //{nom:"Paradise",categorie:"Double comfort",tarif:"3500",superficie:"150m",img:"room_4.jpg"},
    //{nom:"Nature",categorie:"Double comfort",tarif:"3500",superficie:"60m",img:"room_4.jpg"},
    //{nom:"Blue Ciel",categorie:"Familiale",tarif:"3500",superficie:"75m",img:"room_4.jpg"},
    //{nom:"Saphire",categorie:"Familiale",tarif:"3500",superficie:"300m",img:"room_4.jpg"},
    //{nom:"Ecologique",categorie:"Familiale",tarif:"3500",superficie:"100m",img:"room_4.jpg"},
    //{nom:"Cocotier",categorie:"Double",tarif:"3500",superficie:"90m",img:"room_4.jpg"},
    //{nom:"Marlin",categorie:"Double",tarif:"3500",superficie:"250m",img:"room_4.jpg"},
    //{nom:"Tropical",categorie:"Double",tarif:"3500",superficie:"125m",img:"room_4.jpg"}
    //

]




        $scope.getChambre= function () {

            $http.get("services/getChambre.php")


                .then(function (response) {

                    $scope.chambres= response.data;


                })

                .catch(function (data) {



                });


        }

$scope.getChambre();





    });