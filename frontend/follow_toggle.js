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
        error: (e) => {
          console.log(e);
        },
        complete: (res) => {
          console.log(res);
          if(res.status === 200) {
            this.followState = !this.followState;
            this.el.attr({'data-initial-follow-state': this.followState});
            return this.render();
          } else {
            console.log(res);
          }
        }
      });
    })
    
  }
}

module.exports = FollowToggle;