"use client";

import {
  BottomDiv,
  BoxHeader,
  BoxParagraph,
  GrayParagraph,
  LeftDiv,
  LimeText,
  ListBox,
  Price,
  PriceBox,
  PriceButton,
  PriceText,
  RightDiv,
  TealText,
  TopDiv,
} from "./DivMain-styles";

import { FC } from "react";

interface DivMainProps {}

const DivMain: FC<DivMainProps> = ({}) => {
  return (
    <PriceBox>
      <TopDiv>
        <TealText>Join our community</TealText>
        <LimeText>30-day, hassle-free money back guarantee</LimeText>
        <GrayParagraph>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </GrayParagraph>
      </TopDiv>

      <BottomDiv>
        <LeftDiv>
          <BoxHeader>Monthly Subscription</BoxHeader>
          <Price>
            <PriceText>$29</PriceText>
            <BoxParagraph>per month</BoxParagraph>
          </Price>
          <BoxParagraph>Full access for less than $1 a day</BoxParagraph>
          <PriceButton>Sign Up</PriceButton>
        </LeftDiv>
        <RightDiv>
          <BoxHeader>Why Us</BoxHeader>
          <ListBox>
            <BoxParagraph>Tutorials by industry experts </BoxParagraph>
            <BoxParagraph>Peer and expert code review </BoxParagraph>
            <BoxParagraph>Coding exercises</BoxParagraph>
            <BoxParagraph>Access to our Github repos</BoxParagraph>
            <BoxParagraph>Community forum</BoxParagraph>
            <BoxParagraph>Flashcard decks</BoxParagraph>
            <BoxParagraph>New videos every week</BoxParagraph>
          </ListBox>
        </RightDiv>
      </BottomDiv>
    </PriceBox>
  );
};

export default DivMain;
