const APIUtil = {
  followUser: (id) => {
    $.ajax({
      type: "POST",
      url: `/users/${id}/follow`,
      dataType: "json",
      error: (e) => {
        console.log(e);
      },
      complete: (res) => {
        return res;
      }
    });

  },
  unfollowUser: (id) => {
    $.ajax({
      type: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json",
      error: (e) => {
        console.log(e);
      },
      complete: (res) => {
        return res;
      }
    });
  }
}

module.exports = APIUtil;