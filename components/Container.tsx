export default function Container({ 
  children, 
  headingPadding = false 
}: { 
  children: React.ReactNode
  headingPadding?: boolean 
}) {
  const paddingClass = headingPadding ? "px-0 md:px-0" : "px-6 md:px-6";
  return (
    <div className={`max-w-7xl mx-auto w-full ${paddingClass}`}>
      {children}
    </div>
  );
}
