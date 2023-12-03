import Link from "next/link";

const DashboardLayout = ({ children }) => {
   console.log("dashboard");
   return (
      <div>
         <ul>
            <li>
               <Link href="/dashboard/profile">Profile</Link>
               <Link href="/dashboard/settings">Settings</Link>
            </li>
         </ul>
         {children}
         <h2>Footer</h2>
      </div>
   );
};

export default DashboardLayout;
