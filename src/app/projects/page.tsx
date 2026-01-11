import ProjectComponent from "@components/projects/projects";
import Navbar from "@/components/ui/nav-menu";

const ProfileHeaderDark = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <main className="max-w-6xl mx-auto px-6 py-12">
                <ProjectComponent />
            </main>
        </div>
    )
}

export default ProfileHeaderDark;