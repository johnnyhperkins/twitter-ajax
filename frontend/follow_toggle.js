class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');
    this.handleClick();
    this.render();
    
  }

  render() {
    return this.followState ? this.el.text('Follow!') : this.el.text('Unfollow');
  }

  handleClick(e) {
    this.el.on('click', (e) => {
      e.preventDefault();
      $.ajax({
        type: this.followState ? "POST" : "DELETE",
        url: "/users/:id/follow",
        dataType: "json",
        success: function (response) {
          console.log(response);
          // this.followState = 
        },
        error: (e) => {
          console.log(e);
        }
      });
    })
    
  }
}

module.exports = FollowToggle;