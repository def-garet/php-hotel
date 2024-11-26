angular.module("paradis.contact",['ngRoute'])

    .controller('contactCtrl',function contactCtrl($scope,$http){

//console.log(data);
$scope.contact = {
    nom: "",
    email: "",
    sujet: "",
    message: "",
    today:""

//les objets qui va contenir nos informations....
}

$scope.showMessage= false;


$scope.saveContact = function () {

    $http.post("services/saveContact.php", $scope.contact)


        .then(function (response) {

            if(response.status==200){

                $scope.showMessage=true;
            }

        })

        .catch(function (data) {

            console.log(data);
            //console.log($scope.contact);
        });
    //$scope.getContact();

}



























});



//setTimeout( function() {
//    var dateFormat = "mm/dd/yy",
//        dateArrive = $( "#dateArrive" )
//            .datepicker({
//                defaultDate: "+1w",
//                changeMonth: true,
//                numberOfMonths: 2,
//                dateFormat: dateFormat,
//                minDate:0
//            })
//            .on( "change", function() {
//                dateDepart.datepicker( "option", "minDate", getDate( this ) );
//                $scope.reservation.dateArrive= this.value;
//
//            }),
//        dateDepart= $( "#dateDepart" ).datepicker({
//            defaultDate: "+1w",
//            changeMonth: true,
//            numberOfMonths: 2,
//            dateFormat: dateFormat,
//            minDate:0
//        })
//            .on( "change", function() {
//                dateArrive .datepicker( "option", "maxDate", getDate( this ) );
//                $scope.reservation.dateDepart= this.value;
//            });
//
//
//
//
//
//    function getDate( element ) {
//        var date;
//        try {
//            date = $.datepicker.parseDate(dateFormat, element.value);
//        } catch (error) {
//            date = null;
//        }
//
//        return date;
//    }
//},500);
