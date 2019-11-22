import React, { ReactChild } from "react";

type AppBodyProps = {
  header: string;
  quote?: string;
  children: ReactChild;
};

const AppBody: React.FC<AppBodyProps> = ({ header, quote, children }) => (
  <section className="app-body">
    <section className="body-content">
      <h2>{header}</h2>
      {quote && <blockquote>{quote}</blockquote>}
    </section>
    {children}
  </section>
);

export default AppBody;