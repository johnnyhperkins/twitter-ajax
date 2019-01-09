const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');
    this.handleClick();
    this.render();
  }

  render() {
    if(this.followState === "unfollowing" || this.followState === "following") {
          this.el.prop('disabled', true)
        } else {
          this.el.prop('disabled', false)
        }
    this.followState === 'followed' ? this.el.text('Unfollow') : this.el.text('Follow!');
  }

  handleClick(e) {
    this.el.on('click', (e) => {
      e.preventDefault();
      if(this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render()
        return APIUtil.followUser(this.userId).then(() => {
          this.followState = 'followed';
          this.el.attr({'data-initial-follow-state': this.followState});
          this.render();
        })
      } else {
        this.followState = 'unfollowing';
        this.render()
        return APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = 'unfollowed';
          this.el.attr({'data-initial-follow-state': this.followState});
          this.render();
        })
      }
      
      
    })
    
  }
}

module.exports = FollowToggle;