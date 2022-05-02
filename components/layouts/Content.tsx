import React, { FC, ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}
const Content: FC<ContentProps> = ({ children }: ContentProps) => {
  return (
    <div className="main-content flex flex-col flex-grow px-6 py-6 h-screen">
      {children}
    </div>
  );
};

export default Content;
