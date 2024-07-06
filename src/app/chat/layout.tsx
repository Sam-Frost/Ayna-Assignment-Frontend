// layout.tsx

"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/localStorageHook';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser, clearUser] = useLocalStorage('user', '');

  useEffect(() => {
    async function isUserAuthenticated() {
      let token;

      if (typeof window !== 'undefined') {
        token = localStorage.getItem("jwtToken");
      }

      if (token) {
        token = token.substring(1, token.length - 1);
      }

      console.log("Token : ", token);

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Returning true");
        console.log(response);
        setLoading(false); // User is authenticated, stop loading
      } catch (err) {
        console.log(err);
        console.log("Returning false");
        router.push('/login');
      }
    }

    isUserAuthenticated();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner if you have one
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen w-screen bg-[#0F0F0F]">
      {children}
    </div>
  );
}
