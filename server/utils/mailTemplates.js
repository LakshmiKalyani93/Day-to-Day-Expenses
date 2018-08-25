'use strict';

exports.onCreateAdmin = (data)=>{
  const html = `
  <p>Dear ${data.firstname},

  </br><p>You are now assigned as an <b>Admin</b> for <b>Field Officers Application</b> for the ${data.department}.

  <p>Username 		:  ${data.username}
  <p>Password 		:	 ${data.password}

  <p>Admin Pin 	:  ${data.adminPin}

  <p>Download your <b>Admin Mobile Application </b> here:
  <p>Android users : <android icon>               
  <p>iOS users     : <apple playstore icon>

  <p>Admin Pin details should be shared to the Field Officers who are working for your department.

  <p>Don't share username and password details to anyone else

  <p>Regards
  <p>${data.tenantId}
  `;
  return html;
};
