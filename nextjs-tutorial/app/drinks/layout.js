import React from "react";

function DrinkLayout({ children }) {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutotrial</code>
        </pre>
      </div>
      {children}
    </div>
  );
}

export default DrinkLayout;
