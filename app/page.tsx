import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';

export default function Home() {
  return (
    <main>
      <h1 className="mb-2 text-2xl">Home page</h1>
      <div className="flex flex-wrap items-center gap-2">
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </div>
      <AddCompanyButton />
      <ServerComponent>
        <p>Content inside Server Component</p>
      </ServerComponent>

      <ClientComponent>
        <p>Content inside Client Component</p>
      </ClientComponent>
    </main>
  );
}
