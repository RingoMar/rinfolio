import { Container, Row, row } from "react-bootstrap";

import React from "react";

navigator.sayswho = (function () {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE " + (tem[1] || "");
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
    if (tem != null)
      return tem
        .slice(1)
        .join(" ")
        .replace("OPR", "Opera")
        .replace("Edg ", "Edge ");
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(" ");
})();

function prvate() {
  return (
    <Container fluid="xl" className="text-left justify-content-md-center">
      <Row>
        <row>
          <h1>
            Privacy Policy
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            Ringo Mar takes your privacy seriously. To better protect your
            privacy I provide this privacy policy notice explaining the way your
            personal information is collected and used.
          </p>
        </row>
        <row>
          <h1>
            Collection of Routine Information
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            This website track basic information about their visitors. This
            information includes, but is not limited to, IP addresses,{" "}
            {navigator.sayswho} details, timestamps and referring pages. None of
            this information can personally identify specific visitors to this
            website. The information is tracked for routine administration and
            maintenance purposes.
          </p>
        </row>
        <row>
          <h1>
            Cookies
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            Where necessary, this website uses cookies to store information
            about a visitor’s preferences and history in order to better serve
            the visitor and/or present the visitor with customized content.
          </p>
        </row>
        <row>
          <h1>
            Advertisement and Other Third Parties
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            Advertising partners and other third parties may use cookies,
            scripts and/or web beacons to track visitors activities on this
            website in order to display advertisements and other useful
            information. Such tracking is done directly by the third parties
            through their own servers and is subject to their own privacy
            policies. This website has no access or control over these cookies,
            scripts and/or web beacons that may be used by third parties. Learn
            how to{" "}
            <a href="https://www.google.com/privacy_ads.html">
              opt out of Google’s cookie usage.
            </a>
          </p>
        </row>
        <row>
          <h1>
            Links to Third Party Websites
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            I have included links on this website for your use and reference. I
            are not responsible for the privacy policies on these websites. You
            should be aware that the privacy policies of these websites may
            differ from my own.
          </p>
        </row>
        <row>
          <h1>
            Security
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            The security of your personal information is important to me, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. While I strive to use
            commercially acceptable means to protect your personal information,
            I cannot guarantee its absolute security.
          </p>
        </row>
        <row>
          <h1>
            Changes To This Privacy Policy
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            This Privacy Policy is effective as of July 2020 and will remain in
            effect except with respect to any changes in its provisions in the
            future, which will be in effect immediately after being posted on
            this page. I reserve the right to update or change my Privacy Policy
            at any time and you should check this Privacy Policy periodically.
            If I make any material changes to this Privacy Policy, I will notify
            you either through the email address you have provided me, or by
            placing a prominent notice on my website.
          </p>
        </row>
        <row>
          <h1>
            Contact Information
            <hr className="hr-color-up" />
          </h1>
          <p className="text-white">
            For any questions or concerns regarding the privacy policy, please
            send me an email to ringomar31@gmail.com.
          </p>
        </row>
      </Row>
    </Container>
  );
}

export default prvate;
