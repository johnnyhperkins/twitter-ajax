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
    if(this.followState === "unfollowing" 
        || this.followState === "following") {
          this.el.attr('disabled', true)
        } else {
          this.el.attr('disabled', false)
        }
    return this.followState === 'followed' ? this.el.text('Unfollow') : this.el.text('Follow!');
  }

  handleClick(e) {
    this.el.on('click', (e) => {
      e.preventDefault();
      if(this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render()
        APIUtil.followUser(this.userId).then((res) => {
          this.followState = 'followed';
          this.el.attr({'data-initial-follow-state': this.followState});
          this.render();
        })
      } else {
        this.followState = 'unfollowing';
        this.render()
        APIUtil.unfollowUser(this.userId).then((res) => {
          if(res.status === 200) {
            this.followState = 'unfollowed';
            this.el.attr({'data-initial-follow-state': this.followState});
            this.render();
          } else {
            console.log(res);
          }
        })
      }
      
      
    })
    
  }
}

module.exports = FollowToggle;