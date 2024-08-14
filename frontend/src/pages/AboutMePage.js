import React from 'react';

function AboutMePage(){
    return (
<>
    <h2>About Me</h2>
    
        <article>
            <p>
            <dl>
                <dt><strong>Professional</strong></dt>
                <dd>
                    <p> 
                        Dynamic and results-driven professional with a solid background in Human Resources Management, 
                        successfully pivoting to a career in Software Engineering. Leveraging over five years of experience in HR, 
                        I bring a unique blend of people-focused skills, strategic thinking, and technical expertise to the tech industry. 
                    </p>
                    <p>
                        Skilled in modern programming languages and frameworks including Python, JavaScript, and React, with growing 
                        experience in creating and refining user-focused software applications. 
                        My ability to understand both business and technical perspectives allows me to craft solutions that not only meet 
                        user needs but also align with organizational goals. Passionate about continuous learning and committed to driving 
                        innovation through code, I am eager to contribute to cross-functional teams in fast-paced environments, 
                        where my diverse background adds value to software development and user-centric design.
                    </p>
                </dd>
                <dt><strong>Personal</strong></dt>
                <dd>
                    <p>
                        When I'm not coding, I’m celebrating life with my wonderful wife as we quickly approach our 1-year anniversary. 
                        Together, we share our home with two cats and a playful dog. Growing up in a close-knit immigrant family of six, they 
                        have always been a cornerstone of my life. This background has instilled in me a deep appreciation for family moments and 
                        the joy they bring. The sacrifices and support within my family are a source of great strength and inspiration for me. 
                        Additionally, I have a close group of friends who have become like a second family, providing unwavering support and adding even more richness to my life.
                    </p>
                    <p>
                        Outside of family life, I love traveling to new destinations, savoring diverse cuisines, and engaging in outdoor activities 
                        like disc golf and gardening. Although, I would be misleading you if I didn't mention my love for video games, binging a thrilling new
                        tv show, or catching the latest horror flick at the movies. My wife and I also love checking out the lively events around the Bay Area 
                        like farmer's markets, pop-up food events, and concerts. 
                        I truly thrive on learning, sharing memories, and new experiences. If you have any recommendations, shoot me an <a href= "./ContactPage.js">email</a>!
                    </p>
                </dd>
                <dt><strong>Why Computer Science?</strong></dt>
                <dd>
                    <p>
                        Since a young age, I have always loved math and puzzles. Not so much jigsaw puzzles, but logical, thinking puzzles. I loved taking things apart and 
                        putting them back together again, fixing things, and figuring out what caused them to break. Heading into college at Cal State East Bay, I decided I wanted to become a teacher to 
                        Elementary students. Although it wasn't a requirement, I also decided to receive a math minor in addition to my Bachelor's of Arts in Liberal Studies, simply 
                        for the enjoyment of the courses. 
                    </p>
                    <p>
                        Towards the very end of my tenure at CSUEB, I took a Linear Algebra course. The professor, Professor Yap, was awesome. She was pretty strict, 
                        and you could tell she did not take well to the students that were not serious about the course. But I loved it! 
                        Professor Yap decided to teach the course material in tandem with Python. She taught the material traditionally, but she split the class lectures between Linear Algebra and coding, since 
                        Linear Algebra is highly applicable in real life via programming. 
                    </p>
                    <p>
                        By the end of the quarter, we were in charge of creating a short program using Linear Algebra concepts. I chose to work on a cryptography project that takes a string and 
                        a user's 4 digit code, then encrypts the string using matrix operations and a vector. With that code and the encrypted string, another user could then decrpyt the message. Looking back on that now, 
                        the project could have probably been done in 20 lines of code (or less!), but it took me weeks to figure it out at the time. I was engulfed by it. I sat at the computer for hours trying to understand functions,
                        arrays, and loops. In class, I was the annoying student sitting at the front of class constantly raising my hand. I stayed after class to ask more questions. The project was an itch I never knew
                        needed scratching.
                    </p>
                    <p>
                        Fast forward a few years, I ended up in the Human Resources sector, which I quickly learned was much like teaching Elementary age students. It was an amazing experience, but with my brain,
                        math and puzzle-minded as it is, I wasn't fulfilled. I often thought back on that Linear Algebra class and would frequently look into bootcamps as a way to pivot into the tech world. 
                    </p>
                    <p>
                        Then one day, a friend mentioned the Oregon State University post-baccalaureate Bachelor's of Science Computer Science program. He was about half-way to completion in the program and was loving it. I believe
                        it was a nearly whole year until I finally mustered the courage to apply. I vividly remember receiving the email informing me that a decision had been made on my application back in July 2022. 
                        After many, many conversations with my then fiancee of the pros and cons, I reluctantly made one of the biggest decisions of my life and accepted my offer for admission.
                    </p>
                    <p>
                        I don't think I could possibly be happier with my decision. I enjoyed the program to the absolute fullest. Of course, there were many times I wanted to bang my head against the keyboard in frustration and
                        there may have even been a few tears shed (looking at you Operating Systems I) along the way, but the whole time I felt that itch being scratched again. I am looking forward to where this decision takes me
                        and excited to continue to learn and grow in this ever-evolving, exhilarating field.
                    </p>
                    
                </dd>

              </dl>
            </p>            
        </article>

</>
    );
}
export default AboutMePage;
