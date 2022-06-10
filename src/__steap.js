/*
** project pages-----> 
1.pages>folder home > home + breakfast + dinner +lunch 
2.shared> header +  folder login>+ login>register+requireAuth

*/

/* 
tools setup------>
1.react router dom 
2.firebase config > react firebase hooks
*/

/* 
------------------- -------- react firebase hooks ----------------------------
         ---------------------google singIn-----------------------------
1.import { useSignInWithGoogle } from "react-firebase-hooks/auth";
...
2.const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
....
...besi kaj nai 2 steps korlei user create hobe......
===============================Box-1-end====================================

Error dekate jodi chai taile 
------------------
/*   
let elementError;
  if (error) {
    elementError = <p className="text-danger">Error: {error.message}</p>;
  }
  ...
  if (loading) {
    return <Loading></Loading>;
  } 

------------------------------------|
<p>{elementError}</p>
<p>{loading}</p>

 <Button onClick={() => signInWithGoogle()}>Google</Button>
 end-----------
*/

/* ------------------------------GitHub------------------------------------ */
// firebase client secret--enroll korar system--githup  > devoloper-setting > OAuthApp > New OAuth app.click > Application name > Homepage URL.mane local-host > uthorization callback URL--firebase take > register-application.click then > Client ID > Generate new secret key > then Client secret then enabled github.
/* 
                   --------react firebase hooks ---------
  1.import { useSignInWithGithub} from "react-firebase-hooks/auth";
  2.  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  ----------condion-erorr-loding-multiple-----------------------
    let elementError;
  if (error || error1) {
    elementError = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    console.log("user", user, user1);
    navigate("/home");
  }
  */
//  ====================================================================

/* --------------------------Register-email-user-create------------------------- */
/* 
 1.import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

 ...
2.  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  -------------sendEmailVerification send ---------ei  useCreateUserWithEmailAndPassword ar bitior auth ar sate object hesebe dile chole- nice odaron
useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
------sendEmailVerification end------------
---------------------------
  //  update forfile ---- ei nite hobe ar useUpdateProfile react firebae take input korte hobe.
const [updateProfile, updating, error] = useUpdateProfile(auth);
ar por form submit ar bitor ..
  const SubmitCreateUser = async event => {
    event.preventDefault();
    const name = useName.current.value;
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name});
    alert('Updated profile');
    navigate("/home");
  };

update end------------------------

3.form submit ar bitor input ar value niya ---ar modde patai.ope deya ace oi ta nice amne te dici bujar jonno
....
 createUserWithEmailAndPassword(email, password);

 ----------------option 2----checkbox conditon system ----------------
   const [agree, setAgre] = useState(false)
   
   <input onClick={() => setAgre(!agree)}   type="checkbox" name="trams" id="" />
   <label className={`ps-2 ${!agree?'':'ps-2 text-danger'}`} for="trams">new user checkbox </label>
   <b   
   <Button disabled={!agree} className="w-50 mx-auto mb-3" variant="info" type="submit">
     SignUP
   </Button>

 */
// ========================================================================
/* --------------------------Exists user Login------------------------- */
/* 
1. import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
....
  2. const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
*/
// ----------------------------------------------------------------------
                    /* forget password reset  */

/* 
1.import {  useSendPasswordResetEmail} from "react-firebase-hooks/auth";
2.  
  const [sendPasswordResetEmail, sending1, error1] = useSendPasswordResetEmail(
    auth
  );

 const handleForgetPassword = () => {
    const email = useEmail.current.value;
    sendPasswordResetEmail(email)
    console.log('reset send ');
  }

  <button onClick={handleForgetPassword} className='btn bg-dark text-white'>Reset</button>
 */
// --------------------------------------------------------------







/* 
---------------------------Firebase: Error---------------------------
1.Error: Firebase: Error (auth/configuration-not-found). --- এই  এরর এর মানে ,
...
solution --- Authentication > Sign-in providers > Enabled করা নাই এই জন্য এই এরর ।
...
2.Error: Firebase: Error (auth/account-exists-with-different-credential).
...
solution---এর মানে একটা accouont দিয়ে একটাই লগইন করা যাবে , একাদিক করতে চাইলে ,Authentication > Sign-in providers >One account per email address>onChange .ক্লিকে করে allow creation multiply kore dite hobe.

3.{error: {code: 400, message: "OPERATION_NOT_ALLOWED",…}} 
** Go to firebase console -> authentication -> sign-in method and then enable email/password providers
4.Eroor: Firebase: Error (auth/internal-error).
** mane email, password tek nai akarone ?
*/

/* ------------------------------Facebook----------------------- */
/* 
     steps: Facebook for Developers>My Apps>Create an App>Details>Display name>Create app.click>Waiting...facebook-password-for-next-time
*/
