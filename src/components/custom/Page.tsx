import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className=" sm:p-8 p-4 w-full flex flex-col sm:gap-8 gap-2 bg-secondary min-h-[80vh]">
      {children}
    </div>
  );
}
