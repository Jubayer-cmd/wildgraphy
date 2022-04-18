import React from "react";

const Blogs = () => {
  return (
    <div className="conatainer m-3">
      <h3>Difference between authorization and authentication</h3>
      <h4>Authentication</h4>
      <li>
        Authentication is the process of identifying someone's identity by
        assuring that the person is the same as what he is claiming for.
      </li>
      <li>
        It is used by both server and client. The server uses authentication
        when someone wants to access the information, and the server needs to
        know who is accessing the information. The client uses it when he wants
        to know that it is the same server that it claims to be
      </li>
      <h4>Authorization</h4>
      <li>
        Authorization is the process of granting someone to do something. It
        means it a way to check if the user has permission to use a resource or
        not.
      </li>
      <li>
        The authorization usually works with authentication so that the system
        could know who is accessing the information.
      </li>
      <br />
      <h3>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p>
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more. There is
        some similer service is Auth0,MongoDB,Okta,Amazon Cognito.
      </p>
      <h3>
        What other services does firebase provide other than authentication?
      </h3>
      <p>
        <li>Cloud Firestore</li>
        <li>Cloud Functions</li>
        <li>Hosting</li>
        <li>Cloud Storage</li>
        <li>Google Analytics</li>
        <li>Predictions</li>
        <li>Cloud Messaging</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>
      </p>
      <br />
    </div>
  );
};

export default Blogs;
