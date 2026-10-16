import React from 'react';

export interface ServerComponentProps {
  children: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Rendering ServerComponent on the server');
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Server Component</h2>
      {children}
    </div>
  );
}
