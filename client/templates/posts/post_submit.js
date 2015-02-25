// Create form for submitting a post
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // Declare post variables
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    // Save post and return user to post discussion page
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});