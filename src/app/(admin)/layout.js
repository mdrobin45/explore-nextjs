import Link from "next/link";

const AdminLayout = ({ children }) => {
   return (
      <div>
         <Link href="/about">About</Link>
         {children}
         <h2>Admin footer</h2>
      </div>
   );
};

export default AdminLayout;
