"use client";

import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

export default function Home() {
  const handleClick = () => {
    toast.success("Success request");
  };

  return (
    <div className="p-4">
      <p>Hello Doctor</p>
      <Button
        className="my-4"
        variant="destructive"
        size="lg"
        onClick={handleClick}
      >
        Click me!
      </Button>
    </div>
  );
}
