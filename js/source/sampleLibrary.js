/* 
	==================================================================

	Sample Javascript Library v1.0
	Copyright 2017, Darren Smith

	==================================================================
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
		version: '1.0',
		author: 'Darren Smith'
	};


	/*
		==========================
		Initialise module skeleton
		==========================
	*/
	var root = this;
	var previous_myModule = root.myModule;
	var myModule = function() {
	};
	myModule.noConflict = function() {
	  root.myModule = previous_myModule;
	  return myModule;
	}
	myModule.internal = {};
	myModule.internal.pluginDescriptors = [];
	myModule.library = {};

	/*
		=============
		Expose Module
		=============
	*/
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = myModule;
	} else {
		this[moduleDefinition.name] = myModule;
	}

}).call(this);