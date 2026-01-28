import MediaQuery from "react-responsive";
import Desktop from "./devices/Desktop";
import Mobile from "./devices/Mobile";
import Tablet from "./devices/Tablet";

export default function Navbar() {
  return (
    <>
      <MediaQuery minWidth={1024}>
        <Desktop />
      </MediaQuery>
      <MediaQuery minWidth={640} maxWidth={1023}>
        <Tablet />
      </MediaQuery>
      <MediaQuery maxWidth={639}>
        <Mobile />
      </MediaQuery>
    </>
  );
}
