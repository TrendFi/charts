import { PositionalElement, ScaleLinear, ScaleTime } from "@util/types";

export type Rule = {
  points: [Date, number][];
  color: string;
  dotWidth: number;
};

export class RuleElement implements PositionalElement {
  readonly buy: boolean;
  readonly sell: boolean;
  readonly short: boolean;
  readonly cover: boolean;
  readonly dotWidth: number;
  readonly x: Date;
  readonly x2: Date;
  readonly y: number;
  readonly y2: number;
  readonly color: string;

  constructor(cfg: any) {
    const { buy, sell, short, cover, dotWidth, x, x2, y, y2, color } = cfg;

    this.buy = buy;
    this.sell = sell;
    this.short = short;
    this.cover = cover;
    this.dotWidth = dotWidth;
    this.x = x;
    this.x2 = x2;
    this.y = y;
    this.y2 = y2;
    this.color = color;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    xScale: ScaleTime,
    yScale: ScaleLinear,
    pixelRatio: number = 1,
  ) {
    let x;
    let x2;
    let y;
    let y2;

    if (this.x === null) {
      x = xScale.range()[0];
      x2 = xScale.range()[1];
      y = yScale(this.y);
      y2 = this.y2 === null ? y : yScale(this.y2);
    } else if (this.y === null) {
      x = xScale(this.x);
      x2 = this.x2 === null ? x : xScale(this.x2);
      y = yScale.range()[0];
      y2 = yScale.range()[1];
    } else {
      x = xScale(this.x);
      x2 = this.x2 === null ? x : xScale(this.x2);
      y = yScale(this.y);
      y2 = this.y2 === null ? y : yScale(this.y2);
    }

    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = this.color;
    ctx.lineCap = "butt";
    ctx.lineWidth = 2 / pixelRatio;
    ctx.stroke();
    ctx.closePath();

    const pixelWidth = Math.max(xScale(this.dotWidth) - xScale(0), 3);

    // Draw buy signal
    if (this.buy) {
      ctx.fillStyle = "#24FF00";
      ctx.beginPath();
      ctx.arc(x, y + 6, pixelWidth / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }

    // Draw sell signal
    if (this.sell) {
      ctx.fillStyle = "#FF5252";
      ctx.beginPath();
      ctx.arc(x, y2 - 6, pixelWidth / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }

    // Draw short signal
    if (this.short) {
      ctx.fillStyle = "#a855f6";
      ctx.beginPath();
      ctx.arc(x, y2 - 6, pixelWidth / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }

    // Draw cover signal
    if (this.cover) {
      ctx.fillStyle = "#FF2525";
      ctx.beginPath();
      ctx.arc(x, y + 6, pixelWidth / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }
}
