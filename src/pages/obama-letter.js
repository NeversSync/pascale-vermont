import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { ObamaWrapper, ObamaCopy, ObamaTitle } from '../styles/obama-styles';
import { HomeButton, ImageWrapper, Title } from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <ObamaWrapper>
      <ObamaTitle>A SIGN FOR OBAMA</ObamaTitle>
      <Link to="/" className="home-button obama">
        <HomeButton>HOME</HomeButton>
      </Link>
      <ObamaCopy>
        “Can you help me make a sign for Obama?” asked a young Mexican boy,
        pulling me by the hand. A Red Cross nurse and I, a disaster mental
        health volunteer, had come to the Black Oaks area of Vilonia to assess
        the medical and mental health needs of this large Mexican community. A
        scene of complete devastation greeted us - none of the houses were left
        standing, cars were flattened and scattered across the field where a few
        horses grazed, and twisted metal was wrapped around amputated, blackened
        trees.
        <br />
        <br />
        About 20 people were milling around distributing supplies they had
        received from a Red Cross distribution truck and taking shelter from the
        90 degree heat under a makeshift tent. I approached an older woman and
        asked her in Spanish if she knew anyone who might need some medical
        assistance or who needed prescriptions replaced. She was relieved to be
        able to converse in her native language and explained that she was
        diabetic and had lost her glucometer and her medicine. After translating
        her needs to the nurse, I let myself be pulled by the little boy who
        promptly told me his name was Angel and he was 8-years-old.
        <br />
        <br />
        “Hurry”, he said, “Obama is coming soon, and I did not go to school
        today so I could make a sign for him”. President Obama was indeed coming
        to tour the tornado damage in this area of Arkansas (300 destroyed
        houses, 132 injured, 16 fatalities), and there was an air of expectation
        and excitement in this crowd of people who had lost so much. One man
        told me their green cards had disappeared in the storm, and they were
        scared to ask for help in town out of fear they could not prove they
        were in the country legally and might face deportation.
        <br />
        <br />
        Angel took me to a picnic table where a large cardboard box had been
        opened and flattened to be used as a sign. “What do you want the sign to
        say?”, I asked Angel. “When the storm was coming our way, we ran up the
        hill and hid in my cousin’s house. We barely made it in time because we
        don’t have tornado sirens in this area, and we could have died.”
        Miraculously, although the material damage was extensive, nobody died in
        this community. Angel continued “I want the sign to say “We need tornado
        sirens”, and we’re going to hold up the sign when the President’s
        helicopter flies above our houses so he can see it.” I very much doubted
        that the President would be able to see the sign, but I chose not to
        squash this boy’s hope and sat down next to him. As we worked together,
        alternating writing large letters and decorating them in bright colors,
        I asked Angel to tell me the story of what happened to him during the
        storm - something I always do when I make mental health visits to
        disaster victims. I have found that people have a very powerful need to
        tell the story repeatedly, and in great detail, as a way to make it real
        and to start making sense out of their loss.
        <br />
        <br />
        As Angel and I decorated the sign with tornado shapes and embellished
        the letters with spirals, circles, rectangles, and diamonds (his
        favorite shape), he told me in very dramatic terms how the family ran
        for their lives against the wind all the way to his cousin’s house, then
        how they huddled in the hallway, their arms linked together, while
        others hid in a bathtub under a mattress rapidly pulled over their
        heads, and how they all screamed and said “I love you” to each other.
        “He’s coming!”, yelled one of the older teenagers. Sure enough, several
        helicopters flanking a larger one were approaching the area, and the
        children held up the sign while screaming excitedly “Obama, Obama, we
        need tornado sirens”. The hope and excitement was clearly sketched onto
        the children’s faces, but quickly vanished along with the fast-flying
        helicopters.
        <br />
        <br />
        “I have an idea”, I told Angel. ‘Let’s go over to your old house, and
        show me where everything was. Is that OK?” I did not want to upset this
        boy by stressing all that he had lost, but I had the beginning of an
        idea I wanted to explore. Angel took my hand and led me over to the dirt
        foundation. “This was where my bed was. And here is where my sister
        slept. And my mom’s room was here. And the TV was over there. We’re
        standing in the kitchen. And I lost all my toys and all my clothes. We
        have nothing left”, he said despondently. “Let’s go back to the picnic
        table and make another drawing”, I suggested. “Since you like diamonds
        so much, why don’t you draw me a kite with lots of diamond shapes in
        blue, your favorite color.” When Angel finished his drawing, I
        complimented him on his beautiful diamonds, and I wrote inside them the
        items he said he had lost - his bed, toys, his mom’s quilt, his sister’s
        books, their clothes, the couch, etc... “Are you done?” I asked him.
        “Yes, that’s it. It’s all gone now”, he said with a sad expression on
        his face. “Now”, I continued, “let’s turn the cardboard over, and let’s
        make a new kite, with lots of diamond shapes”. Demonstrating his new
        skill at drawing perfect diamonds, Angel made a new drawing of a large
        blue kite with lots of diamond shapes, and looked up expectantly. “Now
        what?”, he asked me. “Well”, I replied, “why don’t you look around you
        and put down the names of all the people who survived the storm, all the
        people you love, and all the people who will keep you safe and help you
        grow up”. I could see the light dawning in his eyes and a smile lighting
        up his face as he wrote down the names of all that remained in his life
        - his family, friends and community - all these people the tornado had
        left behind to form a safety net of love around him. “See”, I told
        Angel, “you will someday have a new bed, new clothes, toys, couch, TV,
        and books, but you still have the most important things in life - the
        people you care about and who love you.” “That’s right!”, he exclaimed.
        <br />
        <br />
        As Angel proudly ran from group to group, showing both sides of the
        cardboard and explaining it to his family, smiling faces turned towards
        me in acknowledgment, and I knew this was a community that was resilient
        and would take care of each other, and a boy who had learned an
        important lesson about what truly matters.
        <br />
        <br />
        Pascale Vermont
        <br /> Disaster Mental Health
      </ObamaCopy>
    </ObamaWrapper>
  </Layout>
);

export default IndexPage;
