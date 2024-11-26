angular.module("paradis.reservation",['ngRoute'])

        .controller( 'reservationCtrl', function reservationCtrl($scope,$http) {
            //console.log(data);
            $scope.reservation = {

                nom:"",
                prenom:"",
                sexe:"",
                age:"",
                email:"",
                pays:"",
                phone:"",
                dateArrive:"",
                dateDepart:"",
                dateReservation:"",
                nbPersonne:"",
                idClient:"",
                idCategorie:"null",


//les objets qui va contenir nos informations....
            }

            $scope.showMessage= false;

            $scope.saveReservation = function () {

                $http.post("services/saveReservation.php", $scope.reservation) //POST is used to send data to a server to create/update a resource.
                                                                               //POST requests are never cached
                    .then(function (response) {                                //POST requests do not remain in the browser history
                                                                               //POST requests cannot be bookmarked
                        if(response.status==200){                              //POST requests have no restrictions on data length

                            $scope.showMessage=true;
                        }

                    })

                    .catch(function (data) {                                     //la methode catch est utilise pour recuperer les donnees

                        console.log(data);

                    });

                console.log($scope.reservation);
            }

        $scope.countries=[
            {code:"FR", name:"France"},
            {code:"EN", name:"Angleterre"},
            {code:"ES", name:"Espagne"},
            {code:"MR", name:"Mauritius"},
            {code:"AUS", name:"Australie"}

        ]

        setTimeout( function() {                                     //une fonction du javascript utilise pour etablir un delais pour un action ou execution d'un code place a l'interieur d'un autre JS fonction
            var dateFormat = "mm/dd/yy",
                dateArrive = $( "#dateArrive" )
                    .datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        numberOfMonths: 2,
                        dateFormat: dateFormat,
                        minDate:0
                    })
                    .on( "change", function() {
                        dateDepart.datepicker( "option", "minDate", getDate( this ) );
                        $scope.reservation.dateArrive= this.value;

                    }),
                dateDepart= $( "#dateDepart" ).datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 2,
                    dateFormat: dateFormat,
                    minDate:0
                })
                    .on( "change", function() {
                        dateArrive .datepicker( "option", "maxDate", getDate( this ) );
                        $scope.reservation.dateDepart= this.value;
                    });

       function getDate( element ) {
           var date;
           try {
               date = $.datepicker.parseDate(dateFormat, element.value);
           } catch (error) {
               date = null;
           }

           return date;
       }
        },500);

        $scope.submitForm= false;

        $scope.saveReservation = function () {

            $http.post("services/saveReservation.php", $scope.reservation)

                .then(function (response) {

                    if(response.status==200){

                        $scope.submitForm=true;
                    }

                })

                .catch(function (data) {

                    console.log(data);

                });

        }

    });
