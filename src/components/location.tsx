import { createSignal, Component } from "solid-js";

export const Location: Component = () => {
  const [time, setTime] = createSignal(
    new Date().toLocaleTimeString("id-ID", {
      timeZone: "Indonesia/Jakarta",
    })
  );

  setInterval(
    () =>
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          timeZone: "Indonesia/Jakarta",
        })
      ),
    1000
  );

  return (
    <div>
      <p class="text-sm text-accent-400 font-mono">{time} Jakarta, Indonesia</p>
    </div>
  );
};
