import "./index.css";
import { Composition } from "remotion";
import { Overlay } from "./Overlay";
import LowerThirdTitle from './LowerThird';
import {KineticStatCounterOverlay} from './StatCounter';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Overlay"
        component={Overlay}
        durationInFrames={75}
        fps={30}
        width={1920}
        height={1080}
      />
    			<Composition
					id="LowerThird"
					component={LowerThirdTitle}
					durationInFrames={60}
					width={1920}
					height={1080}
					fps={30}
					defaultProps={{}}
				/>
									<Composition
					id="KineticStatCounterOverlay"
					component={KineticStatCounterOverlay}
					durationInFrames={90}
					width={1920}
					height={1080}
					fps={30}
					defaultProps={{}}
				/>
						</>
  );
};
