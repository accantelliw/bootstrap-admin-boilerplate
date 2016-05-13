(function () {
	
	$('[data-toggle="offcanvas"]').click(function() {
		$('#side-menu').toggleClass('hidden-xs');
	});

	// load tooltips
	$('[data-toggle="tooltip"]').tooltip(); 

	var mySampleTree = [
		{
			text: "Parent 1",
			nodes: [{
				text: "Child 1",
				nodes: [
					{ text: "Grandchild 1" },
					{ text: "Grandchild 2" }
				]},
			{ text: "Child 2" }]	
		},
		{ text: "Parent 2" },
		{ text: "Parent 3" },
		{ text: "Parent 4" },
		{ text: "Parent 5" }
	];
    
    if ($('#tree').length > 0) 
    {
    	// Load Bootstrap Treeview data
		$('#tree').treeview({
			data: mySampleTree,
			icon: "glyphicon glyphicon-stop"
		});
	}

	if ($('#summernote').length > 0) 
	{
		// Setup Summernote Editor
		$('#summernote').summernote({
		  minHeight: 400,
	  	  toolbar: [
		    ['style', ['bold', 'italic', 'underline', 'clear']],
		    ['font', ['strikethrough', 'superscript', 'subscript']],
		    ['fontsize', ['fontsize']],
		    ['color', ['color']],
		    ['para', ['ul', 'ol', 'paragraph']],
		    ['height', ['height']]
		  ]
		});
	}
	
}());


