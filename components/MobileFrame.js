export default function MobileFrame({ children }) {
  return (
    <div className="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-teal-600 shadow-xl">
      {children}
    </div>
  );
}
