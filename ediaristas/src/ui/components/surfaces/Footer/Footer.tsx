import React from "react";
import { FooterContainer, FooterStyled, FooterTitle, AppList } from './Footer.style'
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus quos tempore perspiciatis cum nesciunt quae at cumque.
            Explicabo illum repellat eligendi adipisci doloremque perferendis
            expedita alias voluptatibus doloribus officiis.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;