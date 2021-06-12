import Car from './car';

export default function animate(image: HTMLDivElement, newTime: number, distance: number) {
  // const distance = 1450;

  let start: number = null;
  const state: { id: number } = { id: null };

  function step(timestamp: number) {
    const time = timestamp - start;
    const passed = Math.round(time * (distance / newTime));
    if (!start) start = timestamp;

    image.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
}
