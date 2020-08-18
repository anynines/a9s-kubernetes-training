import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import Analytics from '../Analytics/Analytics';

const Oil = () => {
  return (
    <>
    <Head>
      <script id="oil-configuration" type="application/configuration">
        {`
          {
            "config_version": 1,
            "publicPath": "/js",
            "advanced_settings": true,
            "default_to_optin": true,
            "gdpr_applies_globally": true,
            "timeout": -1,
            "local_url": "/oils-de.json",
            "iabVendorListUrl": "/vendorlist.json",
            "customVendorListUrl": "/vendors.json",
          }
        `}
      </script>
      <script src="/oilstub.1.3.5-SNAPSHOT.min.js"></script>
      <script src="/oil.1.3.5-SNAPSHOT.min.js" type='text/javascript'></script>
    </Head>
    <Analytics />
    </>
  );
}

export default Oil