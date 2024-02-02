/* eslint-disable react/prop-types */
import React from "react";

//Components: 
import TeamCareers from "./team-careers";

//Images:
import stockFacility from '../../images/facility/facility-img.jpeg'
import graffiti from '../../images/facility/graffiti-wall.jpeg'

//Styles:
import { CommonH1, CommonH2, CommonStartDiv } from "../../styles/commonBDG";
import { AboutImg, AboutInfoSection } from "../../styles/about";
import { GalleryPlaceholderDiv, GalleryPlaceholderImg } from "../../styles/home";

export default function About(){
    return (
        <>
            <GalleryPlaceholderDiv>
                <GalleryPlaceholderImg src={graffiti}/>
            </GalleryPlaceholderDiv>
            <CommonStartDiv>
                {/* <CommonH1>
                    A Little About Us
                </CommonH1> */}
                <AboutInfoSection>
                    <p>
                        Bag stretch behind the couch  claw drapes destroy couch chase imaginary bugs  intrigued by the shower give attitude hide when guests come over hopped up on goofballs, flop over leave dead animals as gifts chew ipad power cord  shake treat  hunt anything that moves  intently sniff hand  make muffins, need to chase tail  rub face on everything  sweet beast under the bed attack feet flop over need to chase tail. Give attitude chew ipad power cord  flop over  rub face on everything hopped up on goofballs sweet beast under the bed  intrigued by the shower chase imaginary bugs make muffins  bag stretch,  claw drapes attack feet hunt anything that moves  intently sniff hand  hide when guests come over flop over destroy couch behind the couch. Make muffins chew ipad power cord  sweet beast under the bed attack feet flop over chase imaginary bugs shake treat  bag stretch, hopped up on goofballs  intrigued by the shower need to chase tail destroy couch behind the couch hunt anything that moves  intently sniff hand ,  rub face on everything  hide when guests come over  claw drapes give attitude flop over.
                    </p>
                    <br/>
                    <p>
                        Hide when guests come over bag stretch hopped up on goofballs make muffins sweet beast under the bed  claw drapes hunt anything that moves flop over need to chase tail, flop over attack feet  rub face on everything leave dead animals as gifts  chase imaginary bugs chew ipad power cord  give attitude destroy couch,  intrigued by the shower shake treat  behind the couch  intently sniff hand  shake treat  flop over  rub face on everything. Make muffins destroy couch  intently sniff hand   rub face on everything bag stretch give attitude behind the couch sweet beast under the bed attack feet flop over shake treat , flop over hunt anything that moves  claw drapes leave dead animals as gifts  intrigued by the shower need to chase tail hopped up on goofballs chase imaginary bugs , hide when guests come over chew ipad power cord  sweet beast under the bed flop over  intrigued by the shower make muffins shake treat  destroy couch chew ipad power cord . Flop over  claw drapes flop over leave dead animals as gifts chew ipad power cord   sweet beast under the bed behind the couch, shake treat  hunt anything that moves hide when guests come over  rub face on everything destroy couch chase imaginary bugs  intently sniff hand ,  intrigued by the shower make muffins attack feet need to chase tail bag stretch hopped up on goofballs. Hopped up on goofballs bag stretch destroy couch attack feet give attitude flop over chew ipad power cord  make muffins need to chase tail flop over,  rub face on everything behind the couch  claw drapes hunt anything that moves chase imaginary bugs  intently sniff hand.
                    </p>
                </AboutInfoSection>

                <TeamCareers/>
            </CommonStartDiv>
        </>
    )
}