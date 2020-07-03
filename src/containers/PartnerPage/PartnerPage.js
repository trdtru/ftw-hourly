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

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PartnerPage;
