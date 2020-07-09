import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './PartnerPage.css';
import image from './about-us-1056.jpg';
import signupimage from './signup.jpg';
import listingimage from './listing.jpg';

const PartnerPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Partner Help Centre | vivify Mobile Hair, Nails & Beauty"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'vivify Partner Help Centre',
        name: 'Partner page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Ready to vivify your business?</h1>
          <img className={css.coverImage} src={image} alt="Show me the MONEY!" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <h2>Skip to:</h2>
              <ul>
              <li>Why vivify?</li>
              <li>How to sign up</li>
              </ul>
            </div>

            <div className={css.contentMain}>
              <h2>
              Beauty like a boss as a vivify pro </h2>
              <p>Dedicated to bringing the best in hair, beauty and wellness to those that demand it, vivify is the first online platform that allows people to search, book and pay for mobile hair, beauty, nail, barbering, massage and aesthetic treatments at the click of a button. Come and join us and let’s make beautiful things happen.</p>
            </div>
          </div>
          <h2>So, why vivify?</h2>
          <p>Good question.</p>
          <p>vivify partners with specialists in hair, beauty, nails, massage, spa treatments, barbering and aesthetics who offer mobile services to their clients. Dedicated to bringing the best in hair, beauty and wellness to those that demand it, vivify is the first online platform that allows people to search, book and pay for treatments at the click of a button. Our mission is to make it easy for everyone to get beauty on demand.
          </p><p>Think about it, when you currently search online for mobile hair or nails, or any other beauty and wellness treatment all you get is a confusing mass of business listing web pages. An unnecessarily difficulty process for anyone looking to find someone locally and easily book online. And unless you as an individual want to pay £1000s in advertising it can be extremely difficult, if not impossible, to be ‘seen’.
          </p><p>The vivify platform is the first of it’s kind – allowing people to search, book and pay for mobile hair, beauty, nail, barbering, massage and aesthetic treatments at a click of a button. And not just a time and price that is right for them, but also in a location of their choosing. At home, at the office or wherever they need you! Our mission is to make it easy for everyone to get beauty on demand.
          </p><p>And we’ll take care of the advertising, promotion and payments so you can focus on the things you do best, rather than worrying about the admin.
          </p>
<h2>How to sign up</h2>

<h3>Step 1 - Create a user profile</h3>
<p>That one is easy - just hit the "Sign Up" link wherever you see it, fill in your details and then verify your email address. <i>Hint: this works just like a regular users profile, so if you ever want to treat yourself you can book other vivify partners through this :)</i></p>
<img className={css.coverImage} src={signupimage} alt="Sign up to be a vivify partner." />

<h3>Step 2 - Create your partner listing</h3>
<p>Okay, so now we have a user profile you can create your "listing". There are a few things to do here:</p>
<img className={css.coverImage} src={listingimage} alt="Creating your partner listing." />
<p>Description - tell us about you, your services, your awards, your dogs name. Basically anything you think will help sell you to potential clients. Or, you know, just copy and paste your Insta bio.</p>
<p>Categories - a simple tickbox exercise telling us which categories you want to be listed under. You can select as many as you want.</p>
<p>Treatment Prices - this is where you enter your pricelist. You can list out as many services as you want here. For example, if you offer Nail Services then in this section you may want to list Gel Polish hands, feet, or both as different services at different prices.
</p>
<p>Categories - </p>
<p>Categories - </p>


        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PartnerPage;
