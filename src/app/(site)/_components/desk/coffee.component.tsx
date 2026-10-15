import * as stylex from "@stylexjs/stylex";

import { objectMarker } from "../../_design/object-feedback.stylex";
import { styles } from "./coffee.style";
export function Coffee() {
  return (
    <div {...stylex.props(styles.coffee, objectMarker)}>
      <span {...stylex.props(styles.saucer)} />
      <span {...stylex.props(styles.vessel)}>
        <span {...stylex.props(styles.handle)} />
        <span {...stylex.props(styles.cup)}>
          <i {...stylex.props(styles.coffeeShine)} />
        </span>
      </span>
    </div>
  );
}
