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
          this.followState = this.followState ? true : false;
          console.log('success is running');
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.log('complete is running');
          console.log(this.render);
          console.log(this.followState);
          console.log(this.el.data('initial-follow-state'));
          this.el.data('initial-follow-state', this.followState);
          return this.render();
        }
      });
    })
    
  }
}

module.exports = FollowToggle;