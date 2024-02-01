import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Slot />
    </div>
  );
});
