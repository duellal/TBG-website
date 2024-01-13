/* 
    ALL pages have an expanded different photo - same like header below the nav bar
        Make long text boxes shorter (less width)

    Take out contact form

    Have all info on one page (no nav items)
 */

/* eslint-disable react/prop-types */
import React from "react";

//About Styles:
import "../../styles/about.css"

//Images:
import stockFacility from '../../images/facility-img.jpeg'

export default function About(){
//This will have an about page for the history, owner, + facility

//client testimonials from google reviews
    return (
        <div id="about">
            <h1>
                A Little About Us
            </h1>
            <div className="info-div">
                <p className="p1-info">
                    Bag stretch behind the couch  claw drapes destroy couch chase imaginary bugs  intrigued by the shower give attitude hide when guests come over hopped up on goofballs, flop over leave dead animals as gifts chew ipad power cord  shake treat  hunt anything that moves  intently sniff hand  make muffins, need to chase tail  rub face on everything  sweet beast under the bed attack feet flop over need to chase tail. Give attitude chew ipad power cord  flop over  rub face on everything hopped up on goofballs sweet beast under the bed  intrigued by the shower chase imaginary bugs make muffins  bag stretch,  claw drapes attack feet hunt anything that moves  intently sniff hand  hide when guests come over flop over destroy couch behind the couch. Make muffins chew ipad power cord  sweet beast under the bed attack feet flop over chase imaginary bugs shake treat  bag stretch, hopped up on goofballs  intrigued by the shower need to chase tail destroy couch behind the couch hunt anything that moves  intently sniff hand ,  rub face on everything  hide when guests come over  claw drapes give attitude flop over.
                </p>
                <br/>
                <p className="p2-info">
                    Hide when guests come over bag stretch hopped up on goofballs make muffins sweet beast under the bed  claw drapes hunt anything that moves flop over need to chase tail, flop over attack feet  rub face on everything leave dead animals as gifts  chase imaginary bugs chew ipad power cord  give attitude destroy couch,  intrigued by the shower shake treat  behind the couch  intently sniff hand  shake treat  flop over  rub face on everything. Make muffins destroy couch  intently sniff hand   rub face on everything bag stretch give attitude behind the couch sweet beast under the bed attack feet flop over shake treat , flop over hunt anything that moves  claw drapes leave dead animals as gifts  intrigued by the shower need to chase tail hopped up on goofballs chase imaginary bugs , hide when guests come over chew ipad power cord  sweet beast under the bed flop over  intrigued by the shower make muffins shake treat  destroy couch chew ipad power cord . Flop over  claw drapes flop over leave dead animals as gifts chew ipad power cord   sweet beast under the bed behind the couch, shake treat  hunt anything that moves hide when guests come over  rub face on everything destroy couch chase imaginary bugs  intently sniff hand ,  intrigued by the shower make muffins attack feet need to chase tail bag stretch hopped up on goofballs. Hopped up on goofballs bag stretch destroy couch attack feet give attitude flop over chew ipad power cord  make muffins need to chase tail flop over,  rub face on everything behind the couch  claw drapes hunt anything that moves chase imaginary bugs  intently sniff hand.
                </p>
            </div>

            <div className="image">
                <img loading="lazy" src={stockFacility} alt='A black dog with tongue sticking out and wide eyes on a persons lap'></img>
            </div>

            <div id="facility">
                <h2>
                    Our Facility 
                </h2>
                <p className="p1-facility">
                    Rub face on everything inspect anything brought into the house hunt anything that moves hopped up on goofballs bag stretch destroy couch lick butt  intrigued by the shower, behind the couch attack feet give attitude  intently stare at the same spot leave dead animals as gifts  claw drapes flop over, stretch lick butt sweet beast under the bed hide when guests come over  rub face on everything leave dead animals as gifts  claw drapes flop over  stand in front of the computer screen  flop over inspect anything brought into the house.  destroy couch leave dead animals as gifts lick butt  rub face on everything give attitude hopped up on goofballs inspect anything brought into the house intently stare at the same spot,  stand in front of the computer screen  hide when guests come over make muffins bag stretch flop over  claw drapes why must they do that attack feet, behind the couch all of a sudden go crazy  intrigued by the shower sweet beast under the bed hunt anything that moves give attitude  stand in front of the computer screen . 
                </p>
                <br/>
                <p className="p2-facility">
                Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs, hunt anything that moves sweet beast under the bed  stand in front of the computer screen  all of a sudden go crazy intently stare at the same spot leave dead animals as gifts why must they do that, bag stretch lick butt  claw drapes  intrigued by the shower  rub face on everything.  rub face on everything  claw drapes make muffins intently stare at the same spot hunt anything that moves bag stretch all of a sudden go crazy give attitude why must they do that,  destroy couch inspect anything brought into the house sweet beast under the bed flop over hopped up on goofballs  stand in front of the computer screen , hide when guests come over leave dead animals as gifts attack feet  intrigued by the shower behind the couch lick butt inspect anything brought into the house.
                </p>
            </div>
        </div>
    )
}