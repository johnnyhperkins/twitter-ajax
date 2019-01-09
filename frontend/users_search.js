const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.el = $(el);
    this.searchInput = $($(el).find('input')[0]);
    this.usersUl = $($(el).find('.users')[0]);
    this.handleInput();
  }

  handleInput() {
    this.searchInput.on('input', (e) => {
      APIUtil.searchUsers($(e.currentTarget).val(), this.renderResults);
    })
  }
  renderResults(res) {
    this.usersUl
    console.log(res);
  }
}

module.exports = UsersSearch;