useEffect(() => {
    if (isAuthenticated) {
      const user_id = localStorage.getItem("userId");
      if (user_id) {
        usersService
          .getOneUser(user_id)
          .then((user) => {
            if (user.user_carts_ai_id) {
              setaisCarted(user.user_carts_ai_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isAuthenticated, aisCarted]);