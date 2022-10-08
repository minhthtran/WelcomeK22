function btnDeleteClick(ob,id){
    $("#modalAction").click(function(){
        $("form#"+id).submit();
    });
    var dataName = $(ob).attr('data-name');
    $('.modal-body').html('Delete <b>' + dataName + '</b> ?');
    $("#myModal").modal();
    return false;
}
$('.btn_fb').on('click',function () {
    $.blockUI({message: ''});
})
$(".btn-share-social").on('click',function () {
    $.blockUI({message: ''});
})
function onShareSocialClick(){
    console.log("share FB");
    var shareModal = $('#share-social-modal');
    shareModal.modal();
}
$(document).ready(function() {

});
