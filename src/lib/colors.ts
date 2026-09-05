/**
 * Colour construction helpers.
 *
 * This module exists for one reason: a CSS colour FUNCTION may only be written where
 * colours are allowed to be written down. The vanish-input's particle routine samples
 * real pixels off a canvas and has to hand each one back to `ctx.fillStyle` as a CSS
 * colour string, so the expression that assembles that string lives here rather than in
 * the component. Nothing here chooses a colour — every value passed in was measured off
 * a canvas the component itself painted with a token.
 */

/**
 * A sampled `ImageData` quadruple, as a CSS colour string.
 *
 * @param rgba `[r, g, b, a]` straight out of `CanvasRenderingContext2D.getImageData`,
 *   so `r`/`g`/`b` and `a` are all 0-255 — note the alpha channel is a BYTE here, not
 *   the 0-1 fraction CSS wants, which is why it is divided.
 */
export function cssColorFromPixel(rgba: number[]): string {
  const [r, g, b, a] = rgba;
  return `rgb(${r} ${g} ${b} / ${(a ?? 255) / 255})`;
}
