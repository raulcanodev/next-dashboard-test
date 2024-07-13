import { CartCounter } from "@/app/shopping-cart";



export const metadata = {
  title:"Counter",
  description:"A simple counter page",
}

export default function CounterPage() {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Count</span>

        <CartCounter value={20} />

      </div>
    </>
  );
}
