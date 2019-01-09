import FollowToggle from './follow_toggle';

$(() => {
  $('button.follow-toggle').each((idx, el) => {
    new FollowToggle(el);
  })
})