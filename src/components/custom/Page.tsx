import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className=" p-8 w-full flex flex-col gap-8 bg-secondary min-h-[80vh]">
      {children}
    </div>
  );
}
