import { create } from "zustand"
import { auth } from "@/lib/firebase"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut
} from "firebase/auth"
import { handleError } from "@/lib/utils"
import { createCustomer } from "@/actions/customer.actions"
import Cookies from "js-cookie"


export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  userId: "",
  signUpState: "pending",
  loginState: "pending",
  isGoogleSigIn: "",
  signUp: (values) => {
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
      createCustomer(customer)
      localStorage.setItem("user", JSON.stringify(customer))
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
      Cookies.set("isLoggedIn", "true")
      set(state => ({...state, loginState: "done"}))
      const user = userCredential.user;
      set(state => ({...state, isLoggedIn: true, userId: user.uid}))
    })
    .catch((error) => {
      const errorMessage = error.message;
      handleError(errorMessage)
    });
  },

  logOut: () => {
    signOut(auth).then(() => {
      localStorage.clear()
    }).catch((error) => {
      handleError(error)
    });
  },
}))