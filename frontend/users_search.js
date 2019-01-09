class UsersSearch {
  constructor(el) {
    this.el = $(el);
    this.searchInput = $(el).find('input');
    this.usersUl = $(el).find('.users');

  }
}

module.exports = UsersSearch;