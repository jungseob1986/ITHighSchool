var show = function(i, callback) {
	console.log('SHOW: ',i);
	return callback(i+1);
}

show(1, function(i) {
	show(i, function(i) {
		show(i, function(i) {
			show(i, function(i) {
				show(i, function(i) {
					show(i, function(i) {
						show(i, function(i) {
							show(i, function(i) {
								show(i, function(i) {
									show(i, function(i) {
										console.log('it\'s callback hell...');
									});
								});
							});
						});
					});
				});
			});
		});
	});
});

