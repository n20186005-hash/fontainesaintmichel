import { redirect } from 'next/navigation';

// Fallback for environments where the middleware is not executed.
// Keeps a single canonical entry point: / -> /en
export default function RootPage() {
  redirect('/en');
}
