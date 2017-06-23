/* 
	====================================

	Sample Javascript Library
	AMD Wrapper v1.0
	Copyright 2017, Darren Smith

	====================================
*/

"use strict";

(function(){

	/*
		============================
		Initialise module definition
		============================
	*/
	var moduleDefinition = {
		name: 'sampleLibrary',
		plugin: 'AMDWrapper',
		version: '1.0',
		author: 'Darren Smith'
	};


	/*
		===============================================
		Expose Module to Browser Window, NodeJS and AMD
		===============================================
	*/
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		var myModule = module.exports;
	} else {
		var myModule = this[moduleDefinition.name];
	}
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return myModule;
		});
	}

}).call(this);