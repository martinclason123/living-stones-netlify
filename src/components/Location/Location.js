import { Section } from "../../styles/GlobalComponents";
import { LocationSection, Map, Address } from "./LocationStyles";
const Location = () => {
  return (
    <LocationSection flex column width="100%" id="location">
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.159361156258!2d-85.52251842384233!3d43.289984271121604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8818e387fea8748b%3A0x739c33915b5c0014!2s15%20S%207th%20St%2C%20Sand%20Lake%2C%20MI%2049343!5e0!3m2!1sen!2sus!4v1699642277170!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google maps link to church address"
      ></Map>
      <Address
        target={"_blank"}
        href="https://maps.app.goo.gl/bZDETgecJoMUTRP87"
      >
        15 S. 7th St, Sand Lake, MI 49343
      </Address>
    </LocationSection>
  );
};

export default Location;
