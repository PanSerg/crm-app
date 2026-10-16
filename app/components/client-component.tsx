'Use client';

import React from 'react';
import ServerComponentCopy from './server-component-copy';

export interface ClientComponentProps {
  children: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Rendering ClientComponent on the client');
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Client Component</h2>
      <ServerComponentCopy>{children}</ServerComponentCopy>
    </div>
  );
}
