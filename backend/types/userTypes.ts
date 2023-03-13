export interface UserType {
    userFirstName:    string;
    userLastName:     string;
    userEmail:        string;
    password:         string;
    profilePictureId: string;
    userPicturesIds:  string[];
    savedPicturesIds: string[];
    savedRoutes: string[];

  }
  export interface UserReturnType {
    _id: string;
    userEmail: string;
    token: string;
  }
  