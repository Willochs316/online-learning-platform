import * as React from "react";
import Svgs from "../../assets/svgs";
import "./loginForm.css";
import {
  AuthFormFieldGroup,
  Div,
  FormField,
  FormFieldContainer,
  FormInputContainer,
  LoginComponent,
  LoginFormContainer,
  LoginFormGroup,
  LoginMainContainer,
} from "./loginForm.styled";

interface loginProps {}

export const LoginForm: React.FunctionComponent<loginProps> = (props) => {
  return (
    <LoginMainContainer>
      <LoginComponent>
        <LoginFormContainer>
          <h2 className="login-form--greeting">Log in to your Udemy account</h2>

          <Div>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="google-login"
            >
              <Svgs.googleIcon className="googleIcon" />
              <span>Continue with Google</span>
            </button>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="facebook-login"
            >
              <Svgs.facebookIcon className="googleIcon" />
              <span>Continue with Facebook</span>
            </button>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="apple-login"
            >
              <Svgs.appleIcon className="googleIcon" />
              <span>Continue with Apple</span>
            </button>

            <LoginFormGroup>
              <FormField>
<AuthFormFieldGroup>
<FormFieldContainer>

<FormInputContainer>
<input aria-invalid="false" name="email" min-length="7" max-length="64" id="form-group--1" type="email" className="email-form-control" value="Email" />
  </FormInputContainer>

</FormFieldContainer>
</AuthFormFieldGroup>

<AuthFormFieldGroup>
<FormFieldContainer>

<FormInputContainer>
<input aria-invalid="false" name="email" min-length="7" max-length="64" id="form-group--1" type="email" className="email-form-control" value="Email" />
  </FormInputContainer>

</FormFieldContainer>
</AuthFormFieldGroup>
<button type="submit" className="login-submit-button"><span>Log In</span></button>

              </FormField>
            </LoginFormGroup>
          </Div>
        </LoginFormContainer>
      </LoginComponent>
    </LoginMainContainer>
  );
};
