import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function LoggedInUser() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex items-center mb-6">
      <img src={user.picture} alt={user.name} width={40} height={40} />
      <div className="ml-2">
        <div>{user.name}</div>
        <div>Company_B</div>
      </div>
    </div>
  );
}
