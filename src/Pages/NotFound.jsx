import React from "react";

export default function NotFound() {
  return (
    <div>
      <strong>
        <h1 className="text-center">404! Page not found</h1>
      </strong>
      <p className="text-center text-xl font-weight: 600;">
        Buddy! ye page ni hai mery pss
        <i
          class="fa-regular fa-face-smile fa-bounce"
          style={{ color: "#cb1a1a" }}
        ></i>
      </p>
    </div>
  );
}
