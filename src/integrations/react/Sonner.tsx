/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Toaster, toast } from "sonner";

function MainSonner() {
  return (
    <>
      <Toaster />
    </>
  );
}

function toastButton({ productTitle }: { productTitle: string }) {
  return (
    <button
      onClick={() => {
        console.log("test");
        toast.success(productTitle);
      }}
    >
      {productTitle}
    </button>
  );
}

export const QtoastButton = qwikify$(toastButton, { eagerness: "hover" });
export const Sonner = qwikify$(MainSonner, { eagerness: "load" });
