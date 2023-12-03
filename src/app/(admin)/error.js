"use client";
const AdminErrorPage = ({ error, reset }) => {
   return (
      <div>
         <h2 className="text-2xl font-red-500">Something went wrong</h2>
         <button onClick={() => reset()}>Try again</button>
      </div>
   );
};

export default AdminErrorPage;
