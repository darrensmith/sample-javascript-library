/* 
	====================================

	Sample Library
	Car Object
	Copyright 2017, Darren Smith

	====================================
*/

"use strict";

(function(){

	/*
		====================
		Extension Definition
		====================
	*/
	var moduleDefinition = {
		name: 'sampleLibrary',
		plugin: 'Car',
		version: '1.0',
		author: 'Darren Smith'
	};

	/*
		=================
		Initialise Module
		=================
	*/
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		var myModule = module.exports;
	} else {
		var myModule = this[moduleDefinition.name];
	}
	myModule.internal.pluginDescriptors[] = moduleDefinition;

	/*
		======================
		Car Object Definition
		======================
	*/

	myModule.car = function(){
	}

}).call(this);