import React from "react";
import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from './PageTitle.style'

interface PageTitleProps{
    title: string
    subtitle?: string | JSX.Element | number

}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageSubTitleStyled>
                {props.subtitle}
            </PageSubTitleStyled>
        </PageTitleContainer>
    )
}

export default PageTitle;

/*
interface PageTitleProps{
    title: string
    subtitle: string
}

const PageTitle = (props:PageTitleProps) => {
    let abc : number
    return (
        <div>
            {props.title}
            {props.subtitle}
        </div>
    )
} */