import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);

  console.log("another way", users2);
  return (
    <div>
      <h2>This is users data loading 2</h2>
    </div>
  );
};

export default Users2;
