export default function FullWidthHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-0">
      {children}
    </div>
  );
}
