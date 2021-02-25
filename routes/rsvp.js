var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
  var rsvpEmail = request.body.rsvpEmail;
  //This will print to your terminal whenver the POST request is made

  console.log(rsvpEmail);
  data.rsvp.push(rsvpEmail);
  //Let us send back some datat so that the browser knows it worked!
  response.send(rsvpEmail);
}
