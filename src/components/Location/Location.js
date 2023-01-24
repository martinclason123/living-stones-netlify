import { Section } from "../../styles/GlobalComponents";
import { Map } from "./LocationStyles";
const Location = () => {
  return (
    <Section width="100%">
      <Map
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1452.0272080805257!2d-85.5175038!3d43.2921821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8818e4770e2634cf%3A0x63fad4171367ed95!2s18%20W%20Lake%20St%2C%20Sand%20Lake%2C%20MI%2049343!5e0!3m2!1sen!2sus!4v1674323522101!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Map>
    </Section>
  );
};

export default Location;
