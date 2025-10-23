export default function AuthLayout({ children }) {
  return (
    <>
      <head>
        <title>Manatherapie - Espace Client</title>
      </head>
      <div className="bg-[#FFF7ED]">
          {children}
      </div>
    </>
  );
}