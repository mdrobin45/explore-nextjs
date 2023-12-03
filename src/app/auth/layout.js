const AuthLayout = ({ children }) => {
   return (
      <div>
         <h2>Auth header</h2>
         {children}
         <h2>Auth footer</h2>
      </div>
   );
};

export default AuthLayout;
