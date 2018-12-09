$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    //function updateInputProgress(){
        //var filledFields = 0;
        //var textFields =  $("#input-progress").find("input[type='text']");
        //var radioFields =  $("#input-progress .step-content").find("input[type='radio']");
        //var radioFieldsChecked =  $("radioFields:checked");
        //console.log(radioFields.length);
        //console.log(radioFieldsChecked.length);
        //var selectFields =  $("#input-progress .step-content").find("select option").filter(":selected").val();
        //console.log(selectFields);

        //var selectVal = "";
        //if (selectFields != 0) {
        //    selectVal = select.val();
        //}
        //var checkedRadioVal = "";
        //var checkedRadio = $("#input-progress input[type='radio']:checked");
        //if (checkedRadio.length > 0) {
        //    checkedRadioVal = checkedRadio.val();
        //}
        ////$("#input-progress").find("input[type='text'],checkedRadio, select option:selected").each(function(){
        //$("#input-progress").find("selectVal,input[type='text'],checkedRadio").each(function(){
        //    if($(this).val() != ""){
        //        filledFields++;
        //    }
        //});

        //var percent = Math.ceil(100 * filledFields / totalFields);
        ////var percent = Math.ceil(100 * filledFields / 3);
        //$("#progress-inputs .progress-bar").attr("aria-valuenow", percent).height(percent + "%");
        //return percent;
    //}

    //Input Progress
    //var totalFields = $("#input-progress").find("input[type='radio']:checked, select option:selected, input[type='text']").length;
    //$("#input-progress").click(function(){
    //    updateInputProgress();
    //});
    //$("#input-progress #validate").click(function(){
    //    var percent = updateInputProgress();
    //    if(percent == 100){
    //        alert("Finished inputs successfully!");
    //    }
    //})
    // $("#inputGroupSelect01").on('change', function () {
    //     $(this).closest('.step-content').attr('data-progress','complete');
    //     // $("#step1").find("input[type='radio']").attr('checked',false);
    // });


});