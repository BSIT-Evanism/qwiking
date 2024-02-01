import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$, server$ } from "@builder.io/qwik-city";
import { Sonner, QtoastButton } from "~/integrations/react/Sonner";

export const useTestFunction = routeLoader$(async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();
  console.log(data);
  return data;
});

const serverGreet = server$((name: string) => {
  const grt = `Hello ${name}`;
  console.log(name);
  return grt;
});

interface Product {
  id: number;
  title: string;
  description: string;
}

export default component$(() => {
  const greet = useSignal("");
  const products = useTestFunction();

  return (
    <>
      <div>Home</div>
      <Sonner />
      <input type="text" placeholder="Input your name" bind:value={greet} />
      <button
        onClick$={async () => {
          const ret = await serverGreet(greet.value);
          alert(ret);
          greet.value = "";
        }}
      >
        Submit
      </button>
      <div>
        {products.value.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <QtoastButton productTitle={product.title} />
          </div>
        ))}
      </div>
    </>
  );
});
