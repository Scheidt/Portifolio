import ContactPage from "@components/contact/contact";
import Navbar from "@ui/nav-menu";

const ProfileHeaderDark = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div>
        <ContactPage />
      </div>
    </div>
  );
};

export default ProfileHeaderDark;
