import Link from "next/link";

const MarketingLayout = ({ children }) => {
   return (
      <div>
         <Link href="/users">Users</Link>
         {children}
         <h2>Marketing footer</h2>
      </div>
   );
};

export default MarketingLayout;
