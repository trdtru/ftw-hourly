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
  NamedLink,
  ExternalLink,
} from '../../components';

import css from './PartnerPage.css';
import image from './about-us-1056.jpg';
import signupimage from './signup.jpg';
import listingimage from './listing.jpg';
import paymentimage from './payments.jpg';

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
              <li><NamedLink name="PartnerPage" to={{ hash: '#whyvivify' }}>Why vivify?</NamedLink></li>
              <li><NamedLink name="PartnerPage" to={{ hash: '#signup' }}>How to sign up</NamedLink></li>
              </ul>
            </div>

            <div className={css.contentMain}>
              <h2>
              Beauty like a boss as a vivify pro </h2>
              <p>Dedicated to bringing the best in hair, beauty and wellness to those that demand it, vivify is the first online platform that allows people to search, book and pay for mobile hair, beauty, nail, barbering, massage and aesthetic treatments at the click of a button. Come and join us and let’s make beautiful things happen.</p>
</div></div>
          <h2 id="whyvivify">So, why vivify?</h2>
          <p>Good question.</p>
          <p>vivify partners with specialists in hair, beauty, nails, massage, spa treatments, barbering and aesthetics who offer mobile services to their clients. Dedicated to bringing the best in hair, beauty and wellness to those that demand it, vivify is the first online platform that allows people to search, book and pay for treatments at the click of a button. Our mission is to make it easy for everyone to get beauty on demand.
          </p><p>Think about it, when you currently search online for mobile hair or nails, or any other beauty and wellness treatment all you get is a confusing mass of business listing web pages. An unnecessarily difficulty process for anyone looking to find someone locally and easily book online. And unless you as an individual want to pay £1000s in advertising it can be extremely difficult, if not impossible, to be ‘seen’.
          </p><p>The vivify platform is the first of it’s kind – allowing people to search, book and pay for mobile hair, beauty, nail, barbering, massage and aesthetic treatments at a click of a button. And not just a time and price that is right for them, but also in a location of their choosing. At home, at the office or wherever they need you! Our mission is to make it easy for everyone to get beauty on demand.
          </p><p>And we’ll take care of the advertising, promotion and payments so you can focus on the things you do best, rather than worrying about the admin.
          </p>
<h2 id="signup">How to sign up</h2>

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
<p>Policies - this section is for you to outline any cancellation and refund policies. Require 48 hours notice to cancel? This is where you spell that out.</p>
<p>Location - don’t worry, we never share your address or location details, this is only used to allow people to see what services and practitioners are available in their area. You simply input your postcode and how many km you're willing to travel for treatments.
</p><p>Availability - here you can set your operating hours to make it easy for users to make a booking. Select each day and add in your hours of work. You can also add exceptions in here, for dates and times of existing bookings and any made outside of vivify. You can update this at any time to make managing your calendar as easy as possible.
</p><p>Photos - hit us with your best shot! Choose your top 2-3 photos of you and your work so people get a sense of what you can do! The first photo you upload will be the cover photo for your business, so make sure it's a good one.
</p>

<h3>Step 3 - Make sure you're getting PAID</h3>
<p>Jessie J was wrong when she said it’s not about the money! This next step is all about making sure you get paid – we use Stripe as our trusted payment platform so you can have peace of mind. We’ll need to know the following:
</p><p>- If you’re representing a company or signing up as an individual & which company you’re operating from (at the moment we’re just accepting sign ups from the UK).
</p><p>- Your sort code and account number – otherwise we can’t get your hard earned cash to you.
</p><p>- You’ll then need to verify these details – we want to make sure we’re thorough here as it’s your money we’re talking about.
</p>
<img className={css.coverImage} src={paymentimage} alt="Creating your partner listing." />
<p>
And that’s it, you're a vivify pro, and you are ready vivify the nation!
</p><p>
You can update and edit any of these details at any time by navigating to your Partner Profile and hitting the edit link. You’re welcome :)
</p>


        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PartnerPage;
