define(['myjslab'], function (MyJSLab) {
    
    console.log('Loaded MyJSLab.');

	var benzene = new MyJSLab.molecule();
	benzene.listen(function(evt){
		console.log('molecule updated',evt);
	});
	benzene.import('nativeJson',[
		{
			id: 1,
			element: 'C',
			bonds: [
				{toId: 6, type: 'double'},
				{toId: 2, type: 'single'}
			]
		},
		{
			id: 2,
			element: 'C',
			bonds: [
				{toId: 1, type: 'single'},
				{toId: 3, type: 'double'}
			]
		},
		{
			id: 3,
			element: 'C',
			bonds: [
				{toId: 2, type: 'double'},
				{toId: 4, type: 'single'}
			]
		},
		{
			id: 4,
			element: 'C',
			bonds: [
				{toId: 3, type: 'single'},
				{toId: 5, type: 'double'}
			]
		},
		{
			id: 5,
			element: 'C',
			bonds: [
				{toId: 4, type: 'double'},
				{toId: 6, type: 'single'}
			]
		},
		{
			id: 6,
			element: 'C',
			bonds: [
				{toId: 5, type: 'single'},
				{toId: 1, type: 'double'}
			]
		}
	]);
	console.log(benzene);
	console.log('molecular weight - '+ benzene.calculateMolecularWeight());

    return;
});