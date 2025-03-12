import React, { useEffect, useRef } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import useScrollPosition from "../hooks/useScroll";
import logoImg from "../images/little-lemon-logo.png";

const pages = [
  { url: "/", displayName: "Home", anchor: "" },
  { url: "/#about", displayName: "About", anchor: "about" },
  { url: "/menu", displayName: "Menu", anchor: "" }, // Updated route
  { url: "/booking", displayName: "Reservations", anchor: "" }, // Updated route
  { url: "/", displayName: "Order Online", anchor: "" },
  { url: "/", displayName: "Login", anchor: "" }
];

const Header = () => {
  const { scrollPositionY, previousScrollPositionY } = useScrollPosition();
  const headerRef = useRef(null);

  useEffect(() => {
    if (previousScrollPositionY - scrollPositionY < 0) {
      headerRef.current.style.transform = `translateY(-200px)`;
    } else {
      headerRef.current.style.transform = `translateY(0)`;
    }
  }, [scrollPositionY]);

  const handleClick = (anchor) => (event) => {
    if (anchor) {
      event.preventDefault();
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#495E57"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Logo link */}
          <Link to="/">
            <Image src={logoImg} height="50px" alt="Little Lemon Logo" />
          </Link>
          {/* Navigation links */}
          <nav>
            <HStack spacing={8}>
              {pages.map(({ url, displayName, anchor }) => (
                anchor ? (
                  <a href={url} onClick={handleClick(anchor)} key={displayName}>
                    {displayName}
                  </a>
                ) : (
                  <Link to={url} key={displayName}>
                    {displayName}
                  </Link>
                )
              ))}
            </HStack>
          </nav>
          <Link to="/">
            <FontAwesomeIcon icon={faShoppingBasket} size="2x" color="white"/>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;