import { styled } from "@mui/material";
import { Container, Typography } from "@mui/material";



export const FooterStyled = styled('footer')`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.getContrastText(theme.palette.primary.main)};
    padding: ${({theme}) => theme.spacing(4)} 0;
    margin-top: auto;

`

export const FooterContainer = styled(Container)`
  display:flex;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({theme}) => theme.breakpoints.down('md')}{
    gap: ${({theme}) => theme.spacing(5)};
  }
`

type Title = {
  children: string;
}

export const FooterTitle = styled((props: Title) => (
    <Typography component={'h2'} variant={'body2'} {...props}/>
  ))`
    font-weight:bold;
`;

export const AppList = styled("ul")`
  display:flex;
  list-style-type: none;
  padding: 0;
  gap: ${({theme}) => theme.spacing()};

  img{
    width: 122px;
  }
`;