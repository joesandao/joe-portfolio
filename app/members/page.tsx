import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Profile from "@/components/top/Profile";

export default function MembersPage() {
  return (
    <div>
      <Navbar />
      <main className="h-screen text-center flex flex-col">
        <div className="flex justify-center">
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <Profile />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}