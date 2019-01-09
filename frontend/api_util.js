const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      type: "POST",
      url: `/users/${id}/follow`,
      dataType: "json",
      error: (e) => {
        console.log(e);
      }
    });

  },
  unfollowUser: (id) => {
    return $.ajax({
      type: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json",
      error: (e) => {
        console.log(e);
      }
    });
  },
  searchUsers: (queryVal, success) => {
    return $.ajax({
      type: "get",
      url: "/users/search",
      data: "query=" + queryVal,
      dataType: "json",
      success: (res) => {
        return success(res)
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}

module.exports = APIUtil;