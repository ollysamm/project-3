import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiUserCircle } from "react-icons/bi";

export function LoggedInUser() {
  const { user, isAuthenticated } = useAuth0();

  console.log(`Authenticated: ${isAuthenticated}`)

  return (
    <div className="flex items-center mb-6">
      <div>
        {JSON.stringify(user, null, 2)}
      </div>
      <BiUserCircle size={40} />
      <div className="ml-2">
        <div>TestUser</div>
        <div>Company_B</div>
      </div>
    </div>
  )
}
