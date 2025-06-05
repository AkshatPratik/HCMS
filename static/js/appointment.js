$(document).ready(function () {

    var table


    function addAppointment(data) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "appointment",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "2612534b-9ccd-ab7e-1f73-659029967199"
            },
            "processData": false,
            "data": JSON.stringify(data)
        }

        $.ajax(settings).done(function (response) {
           $.notify("Appointment Added Successfully", {"status":"success"});

           $('.modal.in').modal('hide')
           table.destroy();
            $('#datatable4 tbody').empty(); // empty in case the columns change
            getAppointment()
        });

    }

    function deleteAppointment(id) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "appointment/" + id,
            "method": "DELETE",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "28ea8360-5af0-1d11-e595-485a109760f2"
            }
        }

        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this data",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function() {
           $.ajax(settings).done(function (response) {
             swal("Deleted!", "Appointment has been deleted.", "success");
             table.destroy();
            $('#datatable4 tbody').empty(); // empty in case the columns change
            getAppointment()
        });


       });

    }



    function getAppointment() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "appointment",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache"
            }
        };
    
        $.ajax(settings).done(function (response) {
            console.log("Response Data:", response); // Debugging
    
            if (!response || response.length === 0) {
                console.warn("No appointments found.");
                return;
            }
    
            // Modify response to add full names
            for (let i = 0; i < response.length; i++) {
                response[i].pat_fullname = response[i].pat_first_name + " " + response[i].pat_last_name;
                response[i].doc_fullname = response[i].doc_first_name + " " + response[i].doc_last_name;
            }
    
            // Destroy existing DataTable to avoid duplicates
            if ($.fn.DataTable.isDataTable('#datatable4')) {
                $('#datatable4').DataTable().clear().destroy();
            }
    
            var table = $('#datatable4').DataTable({
                "destroy": true,
                'paging': true, // Enable pagination
                'ordering': true, // Enable column sorting
                'info': true, // Show bottom info text
                "data": response,
                "aaSorting": [],
                "columns": [
                    { "data": "app_id", "title": "Appointment ID" }, // ✅ Added appointment ID
                    { "data": "doc_fullname", "title": "Doctor Name" },
                    { "data": "pat_fullname", "title": "Patient Name" },
                    { "data": "appointment_date", "title": "Appointment Date" },
                    {
                        "data": null,
                        "title": "Actions",
                        "render": function (data, type, row) {
                            return `<button class="btn-xs btn btn-danger delete-btn" data-app-id="${row.app_id}" type="button">Delete</button>`;
                        }
                    }
                ]
            });
    
            // Handle delete button click
            $('#datatable4 tbody').off('click').on('click', '.delete-btn', function () {
                var appId = $(this).data('app-id');
                console.log("Deleting Appointment ID:", appId);
                deleteAppointment(appId);
            });
    
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching appointments:", textStatus, errorThrown);
        });
    }
    
    // Call function on page load
    $(document).ready(function() {
        getAppointment();
    });
    




    $("#addpatient").click(function () {
        $('#detailform input,textarea').val("")
        $('#myModal').modal().one('shown.bs.modal', function (e) {

            $("#doctor_select").html(doctorSelect)
            $("#patient_select").html(patientSelect)

            $(".form_datetime").datetimepicker({
               format: 'yyyy-mm-dd hh:ii:ss',
               startDate:new Date(),
               initialDate: new Date()
           });
            console.log("innn")
            $("#savethepatient").off("click").on("click", function(e) {
                console.log("inn")
                var instance = $('#detailform').parsley();
                instance.validate()
                if(instance.isValid()){
                    jsondata = $('#detailform').serializeJSON();
                    addAppointment(jsondata)
                }

            })

        })



    })


    var doctorSelect=""
    function getDoctor() {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "doctor",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache"
            }
        }

        $.ajax(settings).done(function (response) {

            for(i=0;i<response.length;i++){

                response[i].doc_fullname=response[i].doc_first_name+" "+response[i].doc_last_name
                doctorSelect +="<option value="+response[i].doc_id+">"+response[i].doc_fullname+"</option>"
            }


        })
    }
    var patientSelect=""
    function getPatient() {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "patient",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache"
            }
        }

        $.ajax(settings).done(function (response) {
           for(i=0;i<response.length;i++){
              response[i].pat_fullname=response[i].pat_first_name+" "+response[i].pat_last_name
              patientSelect +="<option value="+response[i].pat_id+">"+response[i].pat_fullname+"</option>"
          }

      })
    }

    getDoctor()
    getPatient()
    getAppointment()
})