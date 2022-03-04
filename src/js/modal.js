$(function(){
    var modal = {
        self: $('#modal'),

        showModal: function(content){
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function(){
            this.self.fadeOut(200);
            this.self.find('#innerModal').html('');
        }
    };



    $(".showModal").on('click', function(e){
        var id = $(this).data('id');
        var content = $('#cont' + id).html();
        modal.showModal(content);
    });


    $('#modal').on('click', function(e){
        if($(e.target).attr('id') === 'modal' || $(e.target).hasClass('closeModal')){
            modal.hideModal();
        }else{
            return false;
        }
    });
});



          