import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

    signIn(): {msg: string} {
        return {msg: "Sign In Successful"};
    }
    singUp(): {msg: string} {
        return {msg: "Sign Up Successful"};
    }   
}