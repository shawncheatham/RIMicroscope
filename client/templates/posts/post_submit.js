// Create form for submitting a post
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // Declare post variables
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
<<<<<<< HEAD
        Errors.throw(error.reason);

      // show this result but route anyway
      if (result.postExists)
        Errors.throw('This link has already been posted');
=======
        return alert(error.reason);

      // show this result but route anyway
      if (result.postExists)
        alert('This link has already been posted');
>>>>>>> parent of 9e7824e... Including Error notifications
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});