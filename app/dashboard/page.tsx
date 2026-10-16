import React from 'react';

export interface PageProps {
  children: React.ReactNode;
}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="mb-2 text-2xl">Dashboard Page</h1>
    </main>
  );
}
