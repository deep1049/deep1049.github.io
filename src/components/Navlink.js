import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
function NavLink({ to, name, onClose, ...rest }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-55}
      duration={2000}
      onClick={onClose}
    >
      <Button size="sm" {...rest}>
        {name}
      </Button>
    </Link>
  );
}

export default NavLink;
