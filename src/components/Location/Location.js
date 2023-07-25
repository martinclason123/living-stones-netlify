import { Section } from "../../styles/GlobalComponents";
import { LocationSection, Map, Address } from "./LocationStyles";
const Location = () => {
  return (
    <LocationSection flex column width="100%" id="location">
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.6227415329054!2d-85.55331042287185!3d43.28027877646906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8818e308742ea39d%3A0x1571453190c166ad!2s17322%20Cedar%20Springs%20Ave%20NE%2C%20Sand%20Lake%2C%20MI%2049343!5e0!3m2!1sen!2sus!4v1689265903330!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google maps link to church address"
      ></Map>
      <Address target={"_blank"} href="https://goo.gl/maps/8od31JQ9CEokCk6r6">
        17322 Cedar Springs Ave, Sand Lake, MI 49343
      </Address>
    </LocationSection>
  );
};

export default Location;
