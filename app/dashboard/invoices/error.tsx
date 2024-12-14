'use client';
import React from 'react';
// import { useEffect } from 'react';
// import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const toastId = React.useRef(null);

/*   useEffect(() => {
    // Optionally log the error to an error reporting service
    if(!toast.isActive(toastId.current)) {
      toastId.current = toast.error(`${error}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        });
    }
  }, [error]);
 */
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
      
    </main>
  );
}