export type ScreeningType = {
    id: string;
    date: string;
    title: string;
    location: string;
    spokenLang: string;
    subLang: string;
    poster: string;
    screeningId: string;
  };

  export type SubmitedUserResponse = {
    userCreated: boolean;
    errors: string[];
  }

  export type User = {
    userName: string;
    firstName: string;
    lastName: string;
    eMail: string;
    password: string;
  };
  
  export type StrengthMeterStyles = {
    25: { style: string; text: string };
    50: { style: string; text: string };
    75: { style: string; text: string };
    100: { style: string; text: string };
  };