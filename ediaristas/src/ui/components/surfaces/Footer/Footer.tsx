import React from "react";
import { FooterContainer, FooterStyled, FooterTitle } from './Footer.style'
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          delectus quos tempore perspiciatis cum nesciunt quae at cumque.
          Explicabo illum repellat eligendi adipisci doloremque perferendis
          expedita alias voluptatibus doloribus officiis.
        </Typography>
        <FooterTitle >Baixe nossos aplicativos</FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;