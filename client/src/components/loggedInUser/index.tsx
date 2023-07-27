import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function LoggedInUser() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex items-center mb-6">
      <img src={user.picture} alt={user.name} width={40} height={40} className="avatar"/>
      <div className="ml-2">
        <div><h1>{user.name}</h1></div>
        <div><h3>Demo Company</h3></div>
      </div>
    </div>
  );
}

export function UserAvatar() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div >
      <img src={user.picture} alt={user.name} width={40} height={40} className="avatar"/>
    </div>
  );
}
