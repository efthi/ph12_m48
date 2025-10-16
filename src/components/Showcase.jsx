import React from 'react';
import MyContainer from './MyContainer';

const Showcase = () => {
    return (
        <>
        <MyContainer>
            <div className="divider"></div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 border-4 border-accent  rounded-4xl m-5">
                    <h4 className="text-center font-bold p-2">Robust multi-factor authentication</h4>
                    <p className="text-justify font-semibold p-2">
                         <ul className='list-disc p-4'>
                            <li>Secure Access: Implement multiple authentication factors, such as one-time passcodes sent via SMS, email, or an authenticator app, significantly reducing the risk of unauthorized account access.</li>
                            <li>Customizable Policies: Allow administrators to set and enforce security policies, like requiring multi-factor authentication (MFA) for specific user roles or actions.</li>
                            <li>Flexible Options: Provide a variety of factors, giving users a secure and convenient method for verifying their identity, such as biometrics, security keys, and push notifications.</li>
                        </ul>
                    </p>
                </div>
                <div className="flex-1 border-4 border-primary rounded-4xl m-5">
                    <h4 className="text-center font-bold p-2">Streamlined single sign-on (SSO)</h4>
                    <p className="text-justify font-semibold p-2">
                        <ul className='list-disc p-4'>
                            <li>One-Click Login: Allow users to log in with a single sign-on using popular providers like Google, Microsoft, or a corporate identity provider.</li>
                            <li>Enhanced Convenience: Eliminate the need for users to remember multiple passwords, reducing login friction and improving productivity.</li>
                            <li>Centralized Management: Simplify administration by managing user identity and access from a single, unified dashboard.</li>
                        </ul>
                    </p>
                </div>
                <div className="flex-1 border-4 border-secondary rounded-4xl m-5">
                    <h4 className="text-center font-bold p-2">Role-based access control (RBAC)</h4>
                    <p className="text-justify font-semibold p-2">
                    <ul className='list-disc p-4'>
                            <li>Granular Permissions: Assign users to predefined roles (e.g., admin, editor, guest) with distinct access levels to resources and data.</li>
                            <li>Data Protection: Prevent unauthorized data exposure by restricting privileged actions to only authorized personnel.</li>
                            <li>Simplified Auditing: Improve security transparency with a clear, auditable trail of user actions based on their assigned roles.</li>
                        </ul>    
                    </p>
                </div>
                <div className="flex-1 border-4 border-warning rounded-4xl m-5">
                    <h4 className="text-center font-bold p-2"> Advanced API authorization</h4>
                    <p className="text-justify font-semibold p-2">
                        <ul className='list-disc p-4'>
                            <li>Token-based Security: Utilize industry-standard JSON Web Tokens (JWTs) to issue short-lived, verifiable access tokens.</li>
                            <li>Scalable Architecture: Provide a stateless authentication system, allowing your service to scale efficiently by removing the need for server-side session management.</li>
                            <li>Flexible Access Scopes: Define specific permissions within the tokens, allowing third-party applications to access only the resources and actions necessary for their function.</li>
                        </ul>
                    </p>
                </div>
                
            </div>
            <div className="divider"></div>
        </MyContainer>
        </>
    );
};

export default Showcase;