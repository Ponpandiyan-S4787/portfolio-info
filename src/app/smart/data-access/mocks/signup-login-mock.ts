export const signupLoginMockRes = [
  {
    header: '',
    description:
      '',
    heading: [
      {
        id: 1,
        header: 'First Name & Last Name',
        desc: 'The  First Name and  Last Name fields are used to identify the user. These help personalize communication and ensure the user’s profile is easily recognized by the platform.',
      },
      {
        id: 2,
        header: 'Email',
        desc: 'The  Email field is crucial as it acts as the primary identifier for the account. It allows the platform to send verification emails and notifications.Ensuring the email is correct is important, and many platforms require email verification to confirm ownership.',
      },
      {
        id: 3,
        header: 'Password',
        desc: 'The  Password field is required to secure the user’s account. Strong password guidelines are often provided to ensure security.',
      },
      {
        id: 4,
        header: 'Date of Birth',
        desc: 'The  Date of Birth   field helps verify the user’s age, especially for platforms with age restrictions. It ensures compliance with legal requirements.This signup form is designed to collect essential information securely and efficiently, enabling personalized user access.',
      },
      {
        id: 5,
        header: 'Address',
        desc: 'It collects details like the street address, city, state, and postal code.',
      },
    ],
  },
  {
    header: '',
    description:
      'A login form is a vital feature for websites and online platforms, allowing registered users to access their accounts. The login process typically requires users to enter their credentials, including Email and Password.',
    heading: [
      {
        id: 1,
        header: 'First Name & Last Name (Optional for Login)',
        desc: 'While  First Name   and  Last Name   are generally part of the signup form, they are not typically required for the login process. However, some platforms may display the user’s name upon successful login to personalize the experience, such as a greeting or profile view.',
      },
      {
        id: 2,
        header: 'Email',
        desc: 'The  Email   field is essential for identifying the user’s account. It acts as a unique identifier, allowing the platform to link the login attempt to the correct user profile. Users must input the same email address they used during the signup process.',
      },
      {
        id: 3,
        header: 'Password',
        desc: 'The  Password   field is used to secure the user’s account. It is typically paired with the email to verify the user’s identity. Most platforms enforce strong password policies, ensuring that users choose a secure password to protect their account. If the password is forgotten, users can usually reset it through a link sent to their email.',
      },
    ],
  },
];
export interface signupLoginInterface {
  header: string;
  description: string;
  heading: Heading[];
}

export interface Heading {
  id: number;
  header: string;
  desc: string;
}
