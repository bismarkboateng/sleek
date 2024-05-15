import { create } from "zustand"
import { auth } from "@/lib/firebase"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithRedirect, signInWithPopup
} from "firebase/auth"
import { handleError } from "@/lib/utils"
import { createCustomer } from "@/actions/customer.actions"


export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  userId: "",
  signUpState: "pending",
  loginState: "pending",
  isGoogleSigIn: "",
  isPasswordDoNotMatch: null,
  signUp: (values) => {
    if (values.password !== values.confirmPassword) {
      set({ isPasswordDoNotMatch: true })
      return
    } else {
      set({ isPasswordDoNotMatch: false })
    }

    set(state => ({...state, signUpState: "loading"}))
    createUserWithEmailAndPassword(auth, values.email, values.password)    
    .then((userCredential) => {
      const user = userCredential.user;
      set(state => ({...state, signUpState: "done"}))

      const customer = {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        userId: user.uid,
      }
      // createCustomer(customer)
    })
    .catch((error) => {
      const errorMessage = error.message;
      handleError(errorMessage)
    });

  },
  signIn: (values) => {
    set(state => ({...state, loginState: "loading"}))
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      set(state => ({...state, loginState: "done"}))
      const user = userCredential.user;
      set(state => ({...state, isLoggedIn: true, userId: user.uid}))
    })
    .catch((error) => {
      const errorMessage = error.message;
      handleError(errorMessage)
    });
  },

  signInWithRedirect: () => {
    const provider = new GoogleAuthProvider()

    set(state => ({...state, isGoogleSigIn: "not-done" }))
    signInWithPopup(auth, provider)
      .then((result) => {
        set(state => ({...state, isGoogleSigIn: "done" }))
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // createCustomer(customer) server action
        set(state => ({...state, isLoggedIn: true, userId: credential?.idToken}))
      }).catch((error) => {
        const errorMessage = error.message;
        handleError(errorMessage)
      });
  },

  logOut: () => {},
}))