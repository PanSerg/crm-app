import React from 'react';

export interface ServerComponentCopyProps {
  children: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Rendering ServerComponent copy on the server');
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Server Component Copy</h2>
      {children}
    </div>
  );
}
