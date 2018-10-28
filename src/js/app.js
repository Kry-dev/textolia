$(document).ready(function () {
    // $('#desiredContent').selectpicker('');
    // $('#categorySite').selectpicker('');
    $('.selectpicker').selectpicker({
        size: 4
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    // function updateInputProgress(){
    //
    // }

    //Input Progress
    // var totalFields = $("#input-progress").find("input, select, textarea").length;
    // var updateInputProgress = $("#input-progress").click(function(){
    //     var filledFields = 0;
    //     $("#input-progress").find("input[type='text'],input[type='radio']:checked, select option:selected").each(function(){
    //         if($(this).val() != ''){
    //             console.log(filledFields.length);
    //             filledFields++;
    //         }
    //     });
    //
    //     // var percent = Math.ceil(100 * filledFields / totalFields);
    //     var percent = Math.ceil(100 * filledFields / 5);
    //     $("#progress-inputs .progress-bar").attr("aria-valuenow", percent).height(percent + "%");
    //     if(percent >= 26){
    //         $('.step-number-1').addClass('complete');
    //     }
    //     if(percent >= 50){
    //         $('.step-number-2').addClass('complete');
    //     }
    //     if(percent >= 75){
    //         $('.step-number-3').addClass('complete');
    //     }
    //     return percent;
    // });
    // $("#validate").click(function(){
    //     var percent = updateInputProgress();
    //     if(percent == 100){
    //         alert("Finished inputs successfully!");
    //     }
    // })


});