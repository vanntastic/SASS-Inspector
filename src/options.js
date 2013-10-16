$(document).ready(function() {
    var sassInspectorURI = $('#sassInspectorURI');
    var sassInspectorURIVal = localStorage['sassInspectorUri'] || 'txmt';
    sassInspectorURI.focus();
    sassInspectorURI.val(sassInspectorURIVal);

    $('#update').on('click', function(e) {
    	var self = $(this);
    	localStorage['sassInspectorUri'] = sassInspectorURI.val();
    	self.html("Updated!");
    	setTimeout(function(){
    		self.html("Update");
    	},3000);
    });
});
