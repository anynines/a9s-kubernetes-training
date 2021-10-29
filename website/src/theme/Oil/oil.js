import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";
import Analytics from "../Analytics/Analytics";

const Oil = () => {
  return (
    <>
      <Head>
        <script id="oil-configuration" type="application/configuration">
          {`
          {
            "config_version": 1,
            "publicPath": "${useBaseUrl("/")}",
            "advanced_settings": true,
            "default_to_optin": true,
            "gdpr_applies_globally": true,
            "timeout": -1,
            "local_url": "${useBaseUrl("/oils-de.json")}",
            "iabVendorListUrl": "${useBaseUrl("/vendorlist.json")}",
            "customVendorListUrl": "${useBaseUrl("/vendors.json")}",
          }
        `}
        </script>
        <script src={useBaseUrl("/oilstub.1.3.5-SNAPSHOT.min.js")} />
        <script
          src={useBaseUrl("/oil.1.3.5-SNAPSHOT.min.js")}
          type="text/javascript"
        />
      </Head>
      <Analytics />
    </>
  );
};

export default Oil;
