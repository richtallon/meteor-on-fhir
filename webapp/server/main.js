import '/imports/startup/server';
import '/imports/api/users/methods';

import { BrowserPolicy } from 'meteor/browser-policy-common';

Meteor.startup(function(){
  console.log('Meteor app framework is initializing....');

  // pick up version info
  try {
    var version = {};
    version = JSON.parse(Assets.getText("version.json"));    
    Meteor.settings.public.version = version;
  } catch(e) { 
    Meteor.settings.public.version = {};
  }

  console.log('Configuring content-security-policy:');
  BrowserPolicy.content.allowSameOriginForAll();
  BrowserPolicy.content.allowDataUrlForAll()
  BrowserPolicy.content.allowOriginForAll('self');
  BrowserPolicy.content.allowObjectOrigin('self')
  BrowserPolicy.content.allowOriginForAll('font src');
  BrowserPolicy.content.allowOriginForAll('*.wikipedia.com');
  BrowserPolicy.content.allowOriginForAll('*.wikipedia.org');
  BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
  BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
  BrowserPolicy.content.allowImageOrigin("*")
  BrowserPolicy.content.allowEval();
  BrowserPolicy.content.allowInlineScripts()
  BrowserPolicy.content.allowInlineStyles()  
})