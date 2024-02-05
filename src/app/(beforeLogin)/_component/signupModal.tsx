import styles from "./modal.module.css";
import BackButton from "./backButton";
import { redirect } from "next/navigation";

export default function SignupModal() {
  const onSubmitByServerAction = async (formData: FormData) => {
    "use server";

    let shouldRedirect = false;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBIC_BASE_URL}/api/user`,
        {
          method: "POST",
          body: formData,
          credentials: "include", // 쿠키가 있는사람만 회원가입 가능하도록?
        }
      );

      const res = await response.json();

      shouldRedirect = true;
    } catch (err) {
      console.error(err);
    } finally {
      if (shouldRedirect) {
        redirect("/home");
      }
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_body}>
        <BackButton />
        <h2>Signup</h2>

        <form className={styles.modal_form} action={onSubmitByServerAction}>
          <input id="email" required />
          <input id="password " required />
          <button type="submit">회원가입하기</button>
        </form>
      </div>
    </div>
  );
}
