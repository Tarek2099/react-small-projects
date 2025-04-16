// Take two boolean props: isLoggedIn and isAdmin
// Use the && operator to display a message for admin and normal users
// If isLoggedIn is true and isAdmin is true, display "Welcome Admnin"
// If it's just isLoggedIn, display "Welcome User"
// If neither is true, display "Please Log In"

import React from "react";

const UserStatus = ({ isLoggedIn, isAdmin }) => {
  return (
    <div>
      {isLoggedIn && isAdmin ? (
        <h1>Welcome Admin</h1>
      ) : isLoggedIn ? (
        <h1>Welcome User</h1>
      ) : (
        <h1>Please Log In</h1>
      )}
    </div>
  );
};

export default UserStatus;
