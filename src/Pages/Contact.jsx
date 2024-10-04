import Layout from "../Layout/Layout";
import ContactForm from "../Components/ContactForm";
import BackToHomeLink from "../Components/BackToHomeLink";


function Contact() {
  return (
    <Layout>
      <main>
      <BackToHomeLink />
      <ContactForm />
      </main>
    </Layout>
  );
}

export default Contact;
