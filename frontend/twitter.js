import FollowToggle from './follow_toggle';
import UsersSearch from './users_search';

$(() => {
  $('button.follow-toggle').each((idx, el) => {
    new FollowToggle(el);
  })
  $('nav.users-search').each((idx, el) => {
    new UsersSearch(el);
  })
})