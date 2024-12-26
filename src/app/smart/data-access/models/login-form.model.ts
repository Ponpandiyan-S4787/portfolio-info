import { FormControl, FormGroup, Validators } from "@angular/forms";

export const loginForms=new FormGroup({
    loginFname:new FormControl('',[Validators.required, Validators.minLength(8)]),
    loginLname:new FormControl('',[Validators.required, Validators.minLength(6)]),
    loginEmail:new FormControl('',[Validators.required,Validators.email]),
    loginPassword:new FormControl('', [Validators.required, Validators.minLength(8)]),
})
export interface LoginFormModel{
    id:string,
    firstName: any,
    lastName: any,
    email: any ,
    password: any,
    
}

export interface GetLoginInterFace {
    user: LoginUserInfo;
    providerId?: any;
    _tokenResponse: TokenResponse;
    operationType: string;
  }
  interface TokenResponse {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
  }
  export interface LoginUserInfo {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  }
  interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  }
  interface ProviderDatum {
    providerId: string;
    uid: string;
    displayName?: any;
    email: string;
    phoneNumber?: any;
    photoURL?: any;
  }