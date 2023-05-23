
export type ScreeningType = {
  id: string;
  date: string;
  title: string;
  location: string;
  spokenLang: string;
  subLang: string;
  poster: string;
  screeningId: string;
  screenings: string[];
  description: string;
  rating: number;
};

export type SubmitedUserResponse = {
  userCreated: boolean;
  errors: string[];
};

export type UserType = {
  name: {
    first: string;
    last: string;
  };
  userName: string;
  email: string;
  password: string;
};

export type StrengthMeterStyles = {
  25: { style: string; text: string };
  50: { style: string; text: string };
  75: { style: string; text: string };
  100: { style: string; text: string };
};

export type MovieProps = {
  title: string;
  poster: string;
  description?: string;
};

export type userData = {
  name: { 
    first: string; 
    last: string 
  };
  email: string;
  userName: string;
}
