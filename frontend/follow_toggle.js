class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');
    this.handleClick();
    this.render();
    
  }

  render() {
    return this.followState ? this.el.text('Unfollow') : this.el.text('Follow!');
  }

  handleClick(e) {
    this.el.on('click', (e) => {
      e.preventDefault();
      $.ajax({
        type: this.followState ? "DELETE" : "POST",
        url: `/users/${this.userId}/follow`,
        dataType: "json",
        success: function (response) {
          console.log(response);
          this.followState = this.followState ? true : false;
          this.render();
        },
        error: (e) => {
          console.log(e);
        }
      });
    })
    
  }
}

module.exports = FollowToggle;