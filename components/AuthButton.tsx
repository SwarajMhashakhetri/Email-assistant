'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button'; 

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>{session.user?.email}</p>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    );
  }

  return <Button onClick={() => signIn('google')}>Sign in with Google</Button>;
}