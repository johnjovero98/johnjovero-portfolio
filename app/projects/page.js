'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage with anchor
    router.push('/#projects');
  }, [router]);

  return null; // or a loading spinner while redirecting
}