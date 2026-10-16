import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

const statusClasses: Record<Status, string> = {
  [Status.Active]: 'text-green-700 bg-green-100',
  [Status.NotActive]: 'text-red-700 bg-red-100',
  [Status.Pending]: 'text-orange-900 bg-orange-100',
  [Status.Suspended]: 'text-blue-900 bg-blue-100',
};

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <span
      className={`inline-grid shrink-0 grid-cols-[4px_auto] items-center gap-x-2 rounded-full px-3.5 py-1 text-sm font-medium ${statusClasses[status]}`}
    >
      <span aria-hidden="true" className="size-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
